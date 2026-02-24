import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Share2 } from 'lucide-react';
import { CONTACT_INFO, cn } from '../constants';
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Contacts() {
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
          <div className="glass-card p-10 md:p-12">
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-8">Напишите нам</h2>
            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Иван"
                    className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__"
                    className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="example@mail.ru"
                  className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Сообщение</label>
                <textarea 
                  rows={4}
                  placeholder="Ваш вопрос..."
                  className="px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none resize-none"
                />
              </div>
              <button className="btn-primary py-5 text-lg">Отправить сообщение</button>
            </form>
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
                  href={CONTACT_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-bold transition-transform hover:scale-105 bg-green-500"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[500px] bg-slate-200 rounded-[50px] overflow-hidden shadow-2xl relative">
          <YMaps query={{ apikey: 'aac27526-48ca-49c9-89c2-d997d532a3a9' }}>
            <Map 
              defaultState={{ center: [45.099161, 38.948218], zoom: 16 }} 
              width="100%" 
              height="100%"
            >
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
