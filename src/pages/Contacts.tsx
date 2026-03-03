import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Share2, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_INFO, cn } from '../constants';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        setError(errorData.details || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Произошла ошибка. Проверьте интернет-соединение.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Контакты</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы всегда рады общению! Свяжитесь с нами любым удобным способом или приходите в гости в любой из наших филиалов
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Form */}
          <div className="glass-card p-10 md:p-12 relative overflow-hidden">
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-8">Напишите нам</h2>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-brand-mint/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-mint" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Сообщение отправлено!</h3>
                  <p className="text-slate-500 mb-8">Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="btn-outline px-8 py-3"
                  >
                    Отправить еще одно
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ваше имя</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Иван"
                        className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Телефон</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+7 (___) ___-__-__"
                        className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="example@mail.ru"
                      className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Сообщение</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ваш вопрос..."
                      className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none resize-none transition-all"
                    />
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-semibold text-center"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className={cn(
                      "btn-primary py-5 text-lg flex items-center justify-center gap-3 transition-all",
                      isSubmitting && "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Отправить сообщение
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-coral/10 rounded-2xl flex items-center justify-center text-brand-coral">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Телефон</div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-slate-800 hover:text-brand-blue transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-slate-800 hover:text-brand-blue transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-mint/10 rounded-2xl flex items-center justify-center text-brand-mint">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Адреса</div>
                  <div className="text-lg font-bold text-slate-800 flex flex-col gap-1">
                    {CONTACT_INFO.addresses.map((addr, i) => (
                      <span key={i}>{addr}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Режим работы</div>
                  <div className="text-xl font-bold text-slate-800">
                    {CONTACT_INFO.workingHours}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[40px] shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Мы в соцсетях</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={CONTACT_INFO.socials.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold transition-transform hover:scale-105 bg-blue-600"
                >
                  <Share2 className="w-5 h-5" />
                  ВК
                </a>
                <a 
                  href={CONTACT_INFO.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold transition-transform hover:scale-105 bg-blue-500"
                >
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
                <a 
                  href={CONTACT_INFO.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold transition-transform hover:scale-105 bg-blue-400"
                >
                  <Send className="w-5 h-5" />
                  Написать нам
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[500px] bg-slate-200 rounded-[50px] overflow-hidden shadow-2xl relative">
          <YMaps query={{ apikey: 'aac27526-48ca-49c9-89c2-d997d532a3a9' }}>
            <Map 
              defaultState={{ center: [45.100273, 38.960403], zoom: 14 }} 
              width="100%" 
              height="100%"
            >
              <Placemark 
                geometry={[45.099015, 38.973903]}
                properties={{
                  balloonContent: 'Продлёнка Энка: ул. Кореновская, 21',
                  hintContent: 'ул. Кореновская, 21'
                }}
                options={{
                  preset: 'islands#redCircleDotIcon'
                }}
              />
              <Placemark 
                geometry={[45.101531, 38.946903]}
                properties={{
                  balloonContent: 'Продлёнка Энка: ул. Хабибуллина, 4',
                  hintContent: 'ул. Хабибуллина, 4'
                }}
                options={{
                  preset: 'islands#redCircleDotIcon'
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
