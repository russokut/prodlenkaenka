import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calculator, ArrowRight, Languages, Brain, GraduationCap, Zap, Palette, Scissors, Shapes } from 'lucide-react';
import { cn } from '../constants';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('mini-garden');

  const pricingData = {
    'mini-garden': [
      { title: 'Мини-сад', price: '11 000', period: 'месяц', features: ['09:00 - 13:00', '2 занятия в день', 'Перекус в 11:00', 'Игры и общение'], popular: true },
    ],
    'after-school': [
      { title: 'Абонемент Месяц', price: '16 000', period: 'месяц', features: ['Для 1-й и 2-й смены', 'Завтрак/Обед и полдник', 'Помощь с уроками', 'Творчество', 'Прогулки'] },
      { title: 'Разовое посещение', price: '1 000', period: 'день', features: ['Горячее питание', 'Помощь с уроками', 'Творчество'] },
    ],
    'extra': [
      { 
        title: 'Английский язык', 
        icon: Languages, 
        color: 'bg-brand-blue',
        options: [
          { label: 'Индивидуальные (8 зан.)', price: '5 600' },
          { label: 'Групповые (8 зан.)', price: '4 000' }
        ]
      },
      { 
        title: 'Шахматы', 
        icon: Brain, 
        color: 'bg-brand-yellow',
        options: [
          { label: '8 занятий (2 р/нед)', price: '4 000' },
          { label: '4 занятия (1 р/нед)', price: '2 000' }
        ]
      },
      { 
        title: 'Подготовка к школе', 
        icon: GraduationCap, 
        color: 'bg-brand-mint',
        options: [
          { label: '8 занятий (2 р/нед)', price: '4 000' }
        ]
      },
      { 
        title: 'Скорочтение', 
        icon: Zap, 
        color: 'bg-brand-coral',
        options: [
          { label: 'Индивидуальные (8 зан.)', price: '6 400' },
          { label: 'Групповые (8 зан.)', price: '4 800' }
        ]
      },
      { 
        title: 'ИЗО-студия', 
        icon: Palette, 
        color: 'bg-brand-lavender',
        options: [
          { label: 'Групповые (8 зан.)', price: '3 200' }
        ]
      },
      { 
        title: 'Рукоделочка', 
        icon: Scissors, 
        color: 'bg-brand-mint',
        options: [
          { label: '8 занятий (2 р/нед)', price: '3 600' }
        ]
      },
      { 
        title: 'Гончарное дело', 
        icon: Shapes, 
        color: 'bg-brand-yellow',
        options: [
          { label: '4 занятия (1 р/нед)', price: '3 600' }
        ]
      }
    ],
    'summer-camp': [
      { title: 'Тематическая смена', price: '18 000', period: 'смена', features: ['11 дней', '08:00 - 18:00', '3-разовое питание', 'Все мастер-классы', 'Выездные экскурсии'], popular: true },
    ]
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Стоимость развития</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Прозрачные цены и гибкая система абонементов для вашего удобства
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'mini-garden', label: 'Мини-сад' },
            { id: 'after-school', label: 'Продленка' },
            { id: 'extra', label: 'Доп. занятия' },
            { id: 'summer-camp', label: 'Летний клуб' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-3 rounded-full font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-brand-blue text-white shadow-lg scale-105" 
                  : "bg-white text-slate-500 hover:bg-brand-cream"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-32">
          {activeTab === 'extra' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {pricingData.extra.map((item: any, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-8 flex flex-col gap-6 hover:shadow-xl transition-all group border-t-4 border-t-transparent hover:border-t-brand-blue"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-800">{item.title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-4 py-4 border-y border-slate-50">
                    {item.options.map((opt: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">{opt.label}</span>
                        <span className="text-lg font-display font-bold text-brand-blue">{opt.price} ₽</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={`https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на доп. занятие: ${item.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-center py-3 text-sm flex items-center justify-center gap-2 group-hover:bg-brand-blue group-hover:text-white transition-all"
                  >
                    Записаться
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            (pricingData[activeTab as keyof typeof pricingData] as any[]).map((plan, i) => (
              <div key={i} className={cn(
                "glass-card p-10 flex flex-col gap-8 relative w-full max-w-md",
                plan.popular && "border-4 border-brand-coral"
              )}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-coral text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    Популярный выбор
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{plan.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold text-brand-blue">{plan.price} ₽</span>
                    <span className="text-slate-400 font-semibold">/ {plan.period}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 py-8 border-y border-slate-100">
                  {plan.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <Check className="w-5 h-5 text-brand-mint shrink-0" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://t.me/prodlenka_enka?text=Здравствуйте! Хочу выбрать тариф: ${plan.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Выбрать тариф
                </a>
              </div>
            ))
          )}
        </div>

        {/* Calculator Placeholder */}
        <div className="bg-white rounded-[50px] p-12 md:p-20 shadow-xl flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center text-brand-yellow mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Индивидуальный расчет</h2>
            <p className="text-xl text-slate-600 mb-8">
              Хотите составить индивидуальный график посещений или записать двоих детей? Мы рассчитаем стоимость со скидкой
            </p>
            <a 
              href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу рассчитать индивидуальную стоимость развития"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              Рассчитать стоимость
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-mint/10 rounded-3xl">
              <h4 className="font-bold text-brand-mint mb-2">Скидка 10%</h4>
              <p className="text-sm text-slate-500">На второго ребенка из одной семьи</p>
            </div>
            <div className="p-8 bg-brand-blue/10 rounded-3xl">
              <h4 className="font-bold text-brand-blue mb-2">Скидка 5%</h4>
              <p className="text-sm text-slate-500">Для многодетных семей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
