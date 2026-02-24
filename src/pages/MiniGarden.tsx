import React from 'react';
import { motion } from 'motion/react';
import { Clock, Coffee, Sun, Moon, Utensils, Heart, CheckCircle2 } from 'lucide-react';
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
          <div className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-yellow rounded-full font-bold text-sm mb-4">
            Для детей от 1.5 до 7 лет
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Мини-сад</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Полноценный день с заботой, развитием и весельем. Мы создаем атмосферу второго дома
          </p>
        </motion.div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: 'Ясельная группа', age: '1.5 - 3 года', color: 'bg-brand-coral' },
            { title: 'Младшая группа', age: '3 - 4 года', color: 'bg-brand-yellow' },
            { title: 'Средняя группа', age: '4 - 5 лет', color: 'bg-brand-blue' },
            { title: 'Старшая группа', age: '5 - 7 лет', color: 'bg-brand-mint' },
          ].map((group, i) => (
            <div key={i} className="glass-card p-8 text-center flex flex-col items-center gap-4">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg", group.color)}>
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{group.title}</h3>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{group.age}</div>
              <p className="text-slate-500 text-sm">Индивидуальная программа развития и мягкая адаптация</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Распорядок дня</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { time: '07:30 - 09:00', title: 'Встреча и завтрак', icon: Coffee },
              { time: '09:00 - 10:30', title: 'Развивающие занятия', icon: Sun },
              { time: '10:30 - 12:00', title: 'Прогулка и игры', icon: Sun },
              { time: '12:00 - 13:00', title: 'Обед', icon: Utensils },
              { time: '13:00 - 15:00', title: 'Тихий час', icon: Moon },
              { time: '15:00 - 16:00', title: 'Полдник и творчество', icon: Coffee },
              { time: '16:00 - 17:30', title: 'Прогулка', icon: Sun },
              { time: '17:30 - 18:30', title: 'Ужин и игры', icon: Utensils },
              { time: '18:30 - 19:00', title: 'Уход домой', icon: Clock },
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

        {/* What's Included */}
        <div className="bg-brand-blue rounded-[50px] p-12 md:p-20 text-white mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Что включено в стоимость?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  '5-разовое питание',
                  'Прогулки 2 раза в день',
                  'Развитие речи',
                  'Творческие студии',
                  'Физическая активность',
                  'Английский язык',
                  'Логопед',
                  'Психолог',
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
                src="https://picsum.photos/seed/garden-2/800/600" 
                alt="Мини-сад" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Полный день', time: '08:00 - 19:00', price: '35 000 ₽', features: ['5-разовое питание', 'Все занятия', 'Прогулки', 'Сон'], color: 'border-brand-blue' },
              { title: 'Половина дня', time: '08:00 - 13:00', price: '22 000 ₽', features: ['Завтрак и обед', 'Утренние занятия', 'Прогулка'], color: 'border-brand-yellow', popular: true },
              { title: 'Гибкий график', time: 'По договоренности', price: 'от 15 000 ₽', features: ['Выбор дней', 'Индивидуально', 'Все услуги'], color: 'border-brand-mint' },
            ].map((plan, i) => (
              <div key={i} className={cn("glass-card p-10 flex flex-col gap-6 relative border-4", plan.color)}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-coral text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    Популярный выбор
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.title}</h3>
                  <div className="text-slate-500 font-semibold mb-4">{plan.time}</div>
                  <div className="text-4xl font-display font-bold text-brand-blue">{plan.price}</div>
                  <div className="text-slate-400 text-sm mt-1">в месяц</div>
                </div>
                <div className="flex flex-col gap-4 py-6 border-y border-slate-100">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-slate-600">
                      <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={`https://wa.me/79282468732?text=Здравствуйте! Хочу записаться в мини-сад, тариф: ${plan.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
