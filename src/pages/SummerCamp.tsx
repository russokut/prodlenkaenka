import React from 'react';
import { motion } from 'motion/react';
import { Sun, Map, Zap, Utensils, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../constants';

export default function SummerCamp() {
  const shifts = [
    {
      title: 'Шоколадная фабрика',
      desc: 'Погружение в мир шоколада и сладостей. Дегустации, создание шоколада, кулинарные мастер-классы',
      color: 'bg-brand-coral',
      icon: Utensils,
      img: 'https://lh3.googleusercontent.com/d/13MToA3OqwejaD9-eM0gg1bonzr2ptpzJ'
    },
    {
      title: 'Хогвартс',
      desc: 'Волшебный мир Гарри Поттера. Уроки зельеварения, квиддич, создание волшебных палочек и квесты',
      color: 'bg-brand-blue',
      icon: Zap,
      img: 'https://lh3.googleusercontent.com/d/1Xwti7l12gR1xtgKC993cT50jewVJwK6r'
    },
    {
      title: 'Кулинария стран мира',
      desc: 'Путешествие по кухням разных стран. Готовим блюда Италии, Мексики, Японии и Франции',
      color: 'bg-brand-yellow',
      icon: Utensils,
      img: 'https://lh3.googleusercontent.com/d/1MnT2D5OpYSiesZRB4SpL-gvKg_nTtNkm'
    },
    {
      title: 'Путешествия во времени',
      desc: 'Исследуем разные эпохи: динозавры, средневековье, будущее. Научные эксперименты и реконструкции',
      color: 'bg-brand-mint',
      icon: Map,
      img: 'https://lh3.googleusercontent.com/d/171clYl0E7vJHqLrN2zqaxkWYif07jOqC'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 text-brand-yellow rounded-full font-bold text-sm mb-4">
            <Sun className="w-4 h-4 fill-brand-yellow" />
            <span>Лето 2026</span>
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Летний клуб</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Незабываемые каникулы в городе! Тематические смены, новые друзья и море впечатлений
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Возраст', value: '5 - 10 лет', icon: Star },
            { title: 'Время', value: '08:00 - 18:00', icon: Sun },
            { title: 'Питание', value: '3 раза + перекусы', icon: Utensils },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <item.icon className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.title}</div>
              <div className="text-2xl font-display font-bold text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Shifts */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Тематические смены</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {shifts.map((shift, i) => (
              <div key={i} className="group glass-card overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={shift.img} 
                    alt={shift.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className={cn("absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", shift.color)}>
                    <shift.icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="p-10 flex flex-col gap-4 flex-grow">
                  <h3 className="text-2xl font-display font-bold text-slate-800">{shift.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{shift.desc}</p>
                  <div className="mt-auto pt-6 flex justify-between items-center">
                    <div className="text-brand-blue font-bold">Длительность: 11 дней</div>
                    <a 
                      href={`https://t.me/prodlenka_enka?text=Здравствуйте! Хочу забронировать смену: ${shift.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline py-2 px-6 text-sm"
                    >
                      Забронировать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Early Booking */}
        <div className="bg-brand-mint rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Раннее бронирование</h2>
              <p className="text-xl text-white/80 mb-8">
                Планируйте лето заранее и экономьте! Мы подготовили специальные условия для тех, кто бронирует места заранее.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center text-slate-800 font-bold">
                    15%
                  </div>
                  <div>
                    <div className="font-bold text-lg">До 1 апреля</div>
                    <div className="text-white/70">Максимальная выгода при раннем бронировании</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 bg-brand-yellow/80 rounded-2xl flex items-center justify-center text-slate-800 font-bold">
                    7%
                  </div>
                  <div>
                    <div className="font-bold text-lg">До 1 мая</div>
                    <div className="text-white/70">Успейте занять место со скидкой</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 text-slate-800 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Стоимость смены</div>
                <div className="text-5xl font-display font-bold text-brand-blue">18 000 ₽</div>
                <div className="text-slate-400 text-sm mt-1">за 11 дней (рабочие дни)</div>
              </div>
              
              <div className="space-y-4 mb-8">
                {['3-разовое питание', 'Все мастер-классы', 'Выездные экскурсии', 'Страховка включена'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-brand-mint/20 rounded-full flex items-center justify-center text-brand-mint">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу забронировать место в летнем клубе"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Забронировать место
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
