import React from 'react';
import { motion } from 'motion/react';
import { Sun, Map, Zap, Utensils, Star, ArrowRight } from 'lucide-react';
import { cn } from '../constants';

export default function SummerCamp() {
  const shifts = [
    {
      title: 'Шоколадная фабрика',
      desc: 'Погружение в мир шоколада и сладостей. Дегустации, создание шоколада, кулинарные мастер-классы',
      color: 'bg-brand-coral',
      icon: Utensils,
      img: 'https://picsum.photos/seed/chocolate/600/400'
    },
    {
      title: 'Хогвартс',
      desc: 'Волшебный мир Гарри Поттера. Уроки зельеварения, квиддич, создание волшебных палочек и квесты',
      color: 'bg-brand-blue',
      icon: Zap,
      img: 'https://picsum.photos/seed/magic/600/400'
    },
    {
      title: 'Кулинария стран мира',
      desc: 'Путешествие по кухням разных стран. Готовим блюда Италии, Мексики, Японии и Франции',
      color: 'bg-brand-yellow',
      icon: Utensils,
      img: 'https://picsum.photos/seed/cooking/600/400'
    },
    {
      title: 'Путешествия во времени',
      desc: 'Исследуем разные эпохи: динозавры, средневековье, будущее. Научные эксперименты и реконструкции',
      color: 'bg-brand-mint',
      icon: Map,
      img: 'https://picsum.photos/seed/time/600/400'
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
            <span>Лето 2024</span>
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
                    <div className="text-brand-blue font-bold">Длительность: 2 недели</div>
                    <a 
                      href={`https://wa.me/79282468732?text=Здравствуйте! Хочу забронировать смену: ${shift.title}`}
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

        {/* Pricing CTA */}
        <div className="bg-brand-mint rounded-[50px] p-12 md:p-20 text-white flex flex-col items-center text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Раннее бронирование</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl">
            Забронируйте смену до 1 мая и получите скидку 15% на любую программу летнего клуба
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/79282468732?text=Здравствуйте! Хочу узнать стоимость летнего клуба"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-slate-800"
            >
              Узнать стоимость
            </a>
            <a 
              href="https://wa.me/79282468732?text=Здравствуйте! Хочу оставить заявку в летний клуб"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-brand-mint"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
