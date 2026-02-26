import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Utensils, Star, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../constants';

export default function AfterSchool() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-full font-bold text-sm mb-4">
            Для школьников 1-4 классов
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Продленка</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Поможем с уроками и организуем интересный досуг, пока вы на работе
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-display font-bold text-slate-800">Что мы делаем в продленке?</h2>
            <div className="grid gap-6">
              {[
                { title: 'Помощь с уроками', desc: 'Разбираем сложные темы и контролируем выполнение домашних заданий', icon: BookOpen, color: 'bg-brand-yellow' },
                { title: 'Обед и полдник', desc: 'Сбалансированное горячее питание из натуральных продуктов', icon: Utensils, color: 'bg-brand-mint' },
                { title: 'Творчество и игры', desc: 'Мастер-классы, настольные игры и активный отдых', icon: Star, color: 'bg-brand-coral' },
                { title: 'Прогулки', desc: 'Ежедневные прогулки на свежем воздухе на закрытой территории', icon: Users, color: 'bg-brand-blue' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 glass-card">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0", item.color)}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/afterschool/800/1000" 
                alt="Продленка" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-xs hidden md:block">
              <div className="text-brand-coral font-bold text-lg mb-2">Время работы</div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">2-я смена</div>
                  <div className="text-2xl font-display font-bold text-slate-800">с 07:30</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">1-я смена</div>
                  <div className="text-2xl font-display font-bold text-slate-800">с 10:00</div>
                </div>
              </div>
              <div className="text-slate-500 text-sm mt-3">Забираем детей из школы по договоренности</div>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-[50px] p-12 md:p-20 mb-32 shadow-xl">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Примерное расписание</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="py-6 px-4 text-slate-400 font-bold uppercase tracking-wider text-sm">Время</th>
                  <th className="py-6 px-4 text-slate-400 font-bold uppercase tracking-wider text-sm">Активность</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '12:00 - 13:30', activity: 'Встреча детей, прогулка' },
                  { time: '13:30 - 14:00', activity: 'Горячий обед' },
                  { time: '14:00 - 16:00', activity: 'Выполнение домашних заданий' },
                  { time: '16:00 - 16:30', activity: 'Полдник' },
                  { time: '16:30 - 18:00', activity: 'Творческие студии / Свободные игры' },
                  { time: '18:00 - 19:00', activity: 'Прогулка, уход домой' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-brand-cream/30 transition-colors">
                    <td className="py-6 px-4 font-bold text-brand-blue">{row.time}</td>
                    <td className="py-6 px-4 text-slate-700 font-medium">{row.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-coral rounded-[50px] p-12 md:p-20 text-white text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию, и мы расскажем подробнее о нашей программе продленки
          </p>
          <a 
            href="https://wa.me/79282468732?text=Здравствуйте! Хочу записаться на консультацию по продленке"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-5 px-12 text-lg inline-block"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </div>
  );
}
