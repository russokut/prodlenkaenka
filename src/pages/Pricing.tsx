import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Calculator, ArrowRight } from 'lucide-react';
import { cn } from '../constants';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('mini-garden');

  const pricingData = {
    'mini-garden': [
      { title: 'Мини-сад', price: '11 000', period: 'месяц', features: ['09:00 - 13:00', '2 занятия в день', 'Перекус в 11:00', 'Игры и общение'], popular: true },
    ],
    'after-school': [
      { title: 'Абонемент Месяц', price: '16 000', period: 'месяц', features: ['Для 1-й и 2-й смены', 'Обед и полдник', 'Помощь с уроками', 'Творчество', 'Прогулки'] },
      { title: 'Разовое посещение', price: '1 000', period: 'день', features: ['Горячее питание', 'Помощь с уроками', 'Творческие занятия'] },
    ],
    'extra': [
      { title: 'Абонемент 8 занятий', price: '6 400', period: 'абонемент', features: ['2 раза в неделю', 'Любое направление', 'Перенос занятий'] },
      { title: 'Абонемент 4 занятия', price: '3 600', period: 'абонемент', features: ['1 раз в неделю', 'Любое направление', 'Срок 1 месяц'] },
      { title: 'Индивидуально', price: '1 500', period: 'занятие', features: ['60 минут', 'Персональный план', 'Удобное время'] },
    ],
    'summer-camp': [
      { title: 'Тематическая смена', price: '18 000', period: 'смена', features: ['2 недели (10 дней)', '08:00 - 18:00', '3-разовое питание', 'Все мастер-классы', 'Выездные экскурсии'], popular: true },
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
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Стоимость обучения</h1>
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
          {pricingData[activeTab as keyof typeof pricingData].map((plan, i) => (
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
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-brand-mint shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/79282468732?text=Здравствуйте! Хочу выбрать тариф: ${plan.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Выбрать тариф
              </a>
            </div>
          ))}
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
              href="https://wa.me/79282468732?text=Здравствуйте! Хочу рассчитать индивидуальную стоимость обучения"
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
