import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Heart, Shield, Users, BookOpen, Music, ArrowRight, CheckCircle2, Clock, UtensilsCrossed, Coffee, Loader2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../constants';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [activeScheduleTab, setActiveScheduleTab] = useState('mini-garden');

  const schedules = {
    'mini-garden': [
      { time: '09:00 - 09:30', title: 'Прием детей', icon: Users },
      { time: '09:30 - 09:50', title: 'Зарядка', icon: Heart },
      { time: '10:00 - 10:30', title: 'Развитие речи', icon: BookOpen },
      { time: '11:00 - 11:15', title: 'Перекус', icon: UtensilsCrossed },
      { time: '11:15 - 11:45', title: 'ИЗО-лепка', icon: Star },
      { time: '12:00 - 13:00', title: 'Свободная игра', icon: Music },
    ],
    'after-school-1': [
      { time: '10:30', title: 'Встреча из школы', icon: Users },
      { time: '11:30 - 13:00', title: 'Уроки', icon: BookOpen },
      { time: '13:00 - 13:40', title: 'Обед', icon: UtensilsCrossed },
      { time: '14:00 - 15:00', title: 'Творчество', icon: Star },
      { time: '15:00 - 17:00', title: 'Прогулка и секции', icon: Clock },
      { time: '17:00', title: 'Полдник', icon: Coffee },
      { time: '17:30 - 18:00', title: 'Мультфильмы', icon: Play },
      { time: '18:00 - 19:00', title: 'Свободное время', icon: Music },
    ],
    'after-school-2': [
      { time: '07:30', title: 'Встреча детей', icon: Users },
      { time: '09:00 - 09:30', title: 'Завтрак', icon: UtensilsCrossed },
      { time: '09:30 - 12:00', title: 'Уроки и прогулки', icon: BookOpen },
      { time: '12:30 - 13:00', title: 'В школу', icon: ArrowRight },
      { time: '17:00 - 18:00', title: 'Встреча и полдник', icon: Coffee },
      { time: '18:00 - 19:00', title: 'Свободное время', icon: Music },
    ]
  };

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
        body: JSON.stringify({
          ...formData,
          email: 'N/A',
          message: 'Запись на бесплатную экскурсию'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.details || 'Ошибка при отправке. Попробуйте позже.');
      }
    } catch (error) {
      setError('Произошла ошибка. Проверьте соединение.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-mint/10 text-brand-mint rounded-full font-bold text-sm">
                <Star className="w-4 h-4 fill-brand-mint" />
                <span>Ваш надежный партнер в воспитании</span>
              </div>
              <iframe 
                src="https://yandex.ru/sprav/widget/rating-badge/18606550128?type=award" 
                width="150" 
                height="50" 
                frameBorder="0"
                title="Яндекс Хорошее место"
              ></iframe>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Детский центр развития в Краснодаре — <span className="text-brand-coral">Продлёнка Энка</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Детский центр развития для детей от 1,5 до 10 лет. Мы создаем среду, в которой каждый ребенок раскрывает свой потенциал через игру и творчество
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на пробное занятие"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Записаться на пробное
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/about" className="btn-outline">
                Узнать больше
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/d/1mPd1klVQHSxXt4eftdL0XSfAzOTYBjef" 
                alt="Счастливые дети" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow rounded-3xl shadow-xl flex items-center justify-center z-20 rotate-12"
            >
              <Heart className="w-16 h-16 text-white fill-white" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 z-20 -rotate-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">100+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Выпускников</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Почему выбирают нас?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Мы продумали каждую деталь, чтобы пребывание вашего ребенка в центре было максимально комфортным и полезным</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Опытные педагоги', desc: 'Наши специалисты имеют высшее педагогическое образование и любят детей', color: 'bg-brand-yellow' },
              { icon: Shield, title: 'Безопасная среда', desc: 'Закрытая территория, видеонаблюдение и строгий контроль доступа', color: 'bg-brand-mint' },
              { icon: Heart, title: 'Индивидуальный подход', desc: 'Учитываем особенности характера и темп развития каждого ребенка', color: 'bg-brand-coral' },
              { icon: BookOpen, title: 'Современные методики', desc: 'Используем лучшие мировые практики: Монтессори, Реджио и др', color: 'bg-brand-blue' },
              { icon: Music, title: 'Творческое развитие', desc: 'Разнообразные студии для раскрытия талантов каждого ребенка', color: 'bg-brand-lavender' },
              { icon: Coffee, title: 'Уютная атмосфера', desc: 'Создаем пространство, где каждый ребенок чувствует себя как дома', color: 'bg-brand-yellow' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 flex flex-col gap-4"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-24 px-4 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Наши направления</h2>
              <p className="text-slate-500">Выбирайте программу, которая подходит именно вашему ребенку. От ясельной группы до подготовки к школе</p>
            </div>
            <Link to="/pricing" className="btn-outline py-3">Смотреть все цены</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Мини-сад', age: '1.5 - 7 лет', img: 'https://lh3.googleusercontent.com/d/1rISku4tvnFaZmfl_KiPk4Q93Vi6qkYJJ', href: '/mini-garden', color: 'border-brand-yellow' },
              { title: 'Продленка', age: '7 - 10 лет', img: 'https://lh3.googleusercontent.com/d/1-YkL2NFofV4xmE6yHWKapLrmgFHVHbep', href: '/after-school', color: 'border-brand-blue' },
              { title: 'Творчество', age: '3 - 10 лет', img: 'https://lh3.googleusercontent.com/d/1ZmkXthrnXzkz_Naecz2EgaUxD7kFj3bF', href: '/creativity', color: 'border-brand-coral' },
              { title: 'Летний клуб', age: '5 - 10 лет', img: 'https://lh3.googleusercontent.com/d/1M7VW852cT6_AiFlG0qSbFCVhnlZcVeB7', href: '/summer-camp', color: 'border-brand-mint' },
            ].map((dir, i) => (
              <Link 
                key={i}
                to={dir.href}
                className={cn("group relative rounded-[30px] overflow-hidden aspect-[4/5] border-4 shadow-xl transition-all hover:scale-[1.02]", dir.color)}
              >
                <img 
                  src={dir.img} 
                  alt={dir.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">{dir.age}</div>
                  <h3 className="text-2xl font-display font-bold mb-4">{dir.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Распорядок дня</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Продуманный режим дня помогает детям чувствовать себя уверенно и гармонично развиваться
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'mini-garden', label: 'Мини-сад' },
              { id: 'after-school-1', label: '1 смена' },
              { id: 'after-school-2', label: '2 смена' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScheduleTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-bold transition-all",
                  activeScheduleTab === tab.id 
                    ? "bg-brand-blue text-white shadow-lg scale-105" 
                    : "bg-white text-slate-500 hover:bg-brand-cream"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {schedules[activeScheduleTab as keyof typeof schedules].map((item, i) => (
                <motion.div 
                  key={`${activeScheduleTab}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 transition-all hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <item.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-brand-coral font-bold text-sm mb-1">{item.time}</div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/pricing" className="btn-outline inline-flex items-center gap-2">
              Посмотреть стоимость
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-blue rounded-[50px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-yellow/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Запишитесь на бесплатную экскурсию</h2>
                <p className="text-xl text-white/80 mb-8">
                  Приходите к нам в гости, познакомьтесь с педагогами и посмотрите, как проходят занятия. Мы с радостью ответим на все вопросы
                </p>
                <ul className="flex flex-col gap-4">
                  {['Покажем все классы и игровые', 'Познакомим с методиками', 'Расскажем о питании и режиме'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-yellow" />
                      <span className="font-semibold">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
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
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Заявка принята!</h3>
                      <p className="text-slate-500 mb-8">Мы свяжемся с вами в ближайшее время для подтверждения времени экскурсии.</p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="btn-outline px-8 py-3"
                      >
                        Вернуться
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
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ваше имя</label>
                        <input 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Иван Иванов"
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

                      {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-semibold text-center">
                          {error}
                        </div>
                      )}

                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className={cn(
                          "btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 transition-all",
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
                            Записаться на экскурсию
                          </>
                        )}
                      </button>
                      <p className="text-xs text-slate-400 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Жизнь нашего центра</h2>
              <p className="text-slate-500">Посмотрите, как проходят наши будни и праздники. Больше фото и видео в нашей галерее</p>
            </div>
            <Link to="/gallery" className="btn-outline py-3 flex items-center gap-2">
              Перейти в галерею
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '10z_ICrcaEQ4aGWin4UNOxTUkivA2B6A0',
              '1mysF4dRuF-qDrfHvwN4m6o4kFHfYkRy2',
              '1edCBkm6Gw6W18wcAD_gJSE9V2wy7tYRr',
              '1uAsb3U38ebeI5AuYQmZcPJvTuQwtRowG'
            ].map((id, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "relative rounded-3xl overflow-hidden shadow-lg aspect-square",
                  i === 1 && "md:translate-y-8",
                  i === 3 && "md:translate-y-8"
                )}
              >
                <img 
                  src={`https://lh3.googleusercontent.com/d/${id}`} 
                  alt="Галерея" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Что говорят родители</h2>
              <p className="text-slate-500">Мы гордимся тем, что родители доверяют нам самое ценное. Читайте честные отзывы о нашей работе</p>
            </div>
            <Link to="/reviews" className="btn-outline py-3 flex items-center gap-2">
              Все отзывы
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { author: 'Анна М.', text: 'Замечательный центр! Ребенок ходит в мини-сад с огромным удовольствием. Педагоги очень внимательные.', branch: 'Кореновская' },
              { author: 'Сергей В.', text: 'Продленка — наше спасение. Забирают из школы, делают уроки, кормят. Ребенок всегда под присмотром.', branch: 'Хабибуллина' },
              { author: 'Елена К.', text: 'Ходим на творческие занятия. Дочка в восторге от мастер-классов. Атмосфера очень теплая.', branch: 'Кореновская' },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] shadow-md border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-900">{t.author}</span>
                  <span className="text-slate-400">филиал {t.branch}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">Я</div>
              <span className="font-bold text-slate-700">5.0 на Яндекс</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">2Г</div>
              <span className="font-bold text-slate-700">5.0 в 2ГИС</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Наши филиалы</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Ждем вас в гости в любом из наших центров в Краснодаре</p>
          </div>
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
      </section>
    </div>
  );
}
