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
          <div className="relative group">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1pI2xvMBgsY1YamSsd0nWqdeiULdIqNwn" 
                alt="Наш центр Продленка Энка" 
                className="w-full h-full object-cover brightness-105 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* "Processed" Marketing Badge */}
            <div className="absolute -top-6 -left-6 bg-brand-yellow text-slate-900 px-6 py-4 rounded-3xl shadow-xl transform -rotate-12 font-bold text-center border-4 border-white z-10">
              <div className="text-xs uppercase tracking-widest opacity-70">Ждем вас</div>
              <div className="text-xl">В ГОСТИ!</div>
            </div>

            <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-xs hidden md:block z-10">
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
        <div className="bg-white rounded-[50px] p-8 md:p-20 mb-32 shadow-xl">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Примерное расписание</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1st Shift */}
            <div>
              <h3 className="text-2xl font-display font-bold text-brand-blue mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">1</div>
                1-я смена
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="py-4 px-2 text-slate-400 font-bold uppercase tracking-wider text-xs">Время</th>
                      <th className="py-4 px-2 text-slate-400 font-bold uppercase tracking-wider text-xs">Активность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: '10:30', activity: 'Встреча детей из школы' },
                      { time: '11:00 - 11:30', activity: 'Свободное время' },
                      { time: '11:30 - 13:00', activity: 'Помощь в выполнении домашнего задания' },
                      { time: '13:00 - 13:40', activity: 'Горячий обед' },
                      { time: '14:00 - 15:00', activity: 'Игры, творческие занятия' },
                      { time: '15:00 - 17:00', activity: 'Прогулка, сопровождение на секции' },
                      { time: '17:00', activity: 'Полдник' },
                      { time: '17:30 - 18:00', activity: 'Просмотр мультиков, фильмов' },
                      { time: '18:00 - 19:00', activity: 'Свободное время' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-brand-cream/30 transition-colors">
                        <td className="py-4 px-2 font-bold text-brand-blue text-sm whitespace-nowrap">{row.time}</td>
                        <td className="py-4 px-2 text-slate-700 font-medium text-sm">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2nd Shift */}
            <div>
              <h3 className="text-2xl font-display font-bold text-brand-coral mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-coral/10 rounded-lg flex items-center justify-center text-brand-coral">2</div>
                2-я смена
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="py-4 px-2 text-slate-400 font-bold uppercase tracking-wider text-xs">Время</th>
                      <th className="py-4 px-2 text-slate-400 font-bold uppercase tracking-wider text-xs">Активность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: '07:30', activity: 'Встреча детей' },
                      { time: '08:00 - 09:00', activity: 'Свободное время' },
                      { time: '09:00 - 09:30', activity: 'Завтрак' },
                      { time: '09:30 - 12:00', activity: 'Уроки, секции, прогулки, игры' },
                      { time: '12:30 - 13:00', activity: 'Сопровождение детей в школу' },
                      { time: '17:00 - 18:00', activity: 'Встреча из школы, полдник' },
                      { time: '18:00 - 19:00', activity: 'Свободное время' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-brand-cream/30 transition-colors">
                        <td className="py-4 px-2 font-bold text-brand-blue text-sm whitespace-nowrap">{row.time}</td>
                        <td className="py-4 px-2 text-slate-700 font-medium text-sm">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-slate-900">Наши филиалы</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Branch 1: Korenovskaya */}
            <div className="relative group">
              <div className="bg-white p-4 pb-12 shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 rounded-sm border border-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1EQtAa0HkIzs0srRMz8UKgBz97ZbNkgKp" 
                  alt="Филиал на Кореновской, 21" 
                  className="w-full h-[400px] object-cover rounded-sm mb-4"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center font-handwriting text-2xl text-slate-600 transform -rotate-1">
                  Кореновская, 21 ❤️
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-yellow rounded-full -z-10 animate-pulse" />
            </div>

            {/* Branch 2: Khibibullina */}
            <div className="relative group">
              <div className="bg-white p-4 pb-12 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 rounded-sm border border-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1yy_BKEitK1Z3cslqOTRkrPYa3d9vPqLa" 
                  alt="Филиал на Хибибуллина, 4" 
                  className="w-full h-[400px] object-cover rounded-sm mb-4"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center font-handwriting text-2xl text-slate-600 transform rotate-1">
                  Хибибуллина, 4 ❤️
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-blue/10 rounded-full -z-10" />
            </div>
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-6 text-slate-800">Уют как дома в каждом филиале</h3>
            <p className="text-lg text-slate-600">
              Мы создали два уникальных пространства, где ребенку хочется находиться. Это не просто «место ожидания родителей», а полноценный клуб по интересам, где каждый чувствует себя частью большой и дружной семьи.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-coral rounded-[50px] p-12 md:p-20 text-white text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию, и мы расскажем подробнее о нашей программе продленки
          </p>
          <a 
            href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на консультацию по продленке"
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
