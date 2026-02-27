import React from 'react';
import { motion } from 'motion/react';
import { Clock, Coffee, Sun, Moon, Utensils, Heart, CheckCircle2, Users } from 'lucide-react';
import { cn } from '../constants';

export default function MiniGarden() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1wc2YnRltxkFRfwAhsixr-IyNIWMx5-Qa" 
              alt="Наш уютный мини-сад" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-yellow rounded-full font-bold text-sm mb-4">
            Для детей от 2.5 до 5 лет
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Мини-сад</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Утреннее время с пользой: развитие, творчество и общение в уютной атмосфере
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Возраст', value: '2.5 - 5 лет', desc: 'Одна смешанная группа', icon: Heart, color: 'bg-brand-coral' },
            { title: 'Время работы', value: '09:00 - 13:00', desc: 'Понедельник — Пятница', icon: Clock, color: 'bg-brand-blue' },
            { title: 'Перекус', value: 'в 11:00', desc: 'Питание не предусмотрено', icon: Utensils, color: 'bg-brand-mint' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <div className="text-2xl font-display font-bold text-brand-blue">{item.value}</div>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Распорядок дня</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { time: '09:00 - 09:30', title: 'Встреча и свободная игра', icon: Sun },
              { time: '09:30 - 10:15', title: 'Первое развивающее занятие', icon: Heart },
              { time: '10:15 - 11:00', title: 'Игры и свободное общение', icon: Users },
              { time: '11:00 - 11:30', title: 'Время перекуса', icon: Utensils },
              { time: '11:30 - 12:15', title: 'Второе развивающее занятие', icon: Heart },
              { time: '12:15 - 13:00', title: 'Свободное общение и уход домой', icon: Clock },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-50">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-brand-coral font-bold text-sm">{item.time}</div>
                  <div className="font-bold text-slate-800">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-brand-blue rounded-[50px] p-12 md:p-20 text-white mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Развивающие занятия</h2>
              <p className="text-brand-cream/80 mb-8 text-lg">
                Дважды в день мы проводим увлекательные занятия, направленные на всестороннее развитие ребенка:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Лепка и аппликация',
                  'Чтение и развитие речи',
                  'Театральное мастерство',
                  'Беби фитнес (аэробика)',
                  'Музыкальные занятия',
                  'Творческие мастерские',
                  'Игры на логику',
                  'Свободное общение',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow" />
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1_aBx0jy1ndIDR3eRJmaWRsCQmhM2bVfF" 
                alt="Развивающие занятия в нашем центре" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Стоимость</h2>
          <div className="max-w-md mx-auto">
            <div className="glass-card p-10 flex flex-col gap-6 relative border-4 border-brand-blue">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-coral text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                Единый тариф
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Мини-сад</h3>
                <div className="text-slate-500 font-semibold mb-4">09:00 - 13:00</div>
                <div className="text-5xl font-display font-bold text-brand-blue">11 000 ₽</div>
                <div className="text-slate-400 text-sm mt-1">в месяц</div>
              </div>
              <div className="flex flex-col gap-4 py-6 border-y border-slate-100">
                {[
                  'Группа 2.5 - 5 лет',
                  '2 занятия в день',
                  'Перекус в 11:00',
                  'Игры и общение',
                ].map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-slate-600">
                    <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://wa.me/79282468732?text=Здравствуйте! Хочу записаться в мини-сад"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
