import React from 'react';
import { motion } from 'motion/react';
import { HistoryComparison } from '../components/HistoryComparison';

export default function About() {
  const currentEntrance = "https://lh3.googleusercontent.com/d/1mPd1klVQHSxXt4eftdL0XSfAzOTYBjef"; // Using the high-quality entrance photo from Home
  const pastEntrance = "https://lh3.googleusercontent.com/d/1mPd1klVQHSxXt4eftdL0XSfAzOTYBjef"; // We'll apply CSS filters in the component for now, or I can try to generate one.
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">О нашем центре</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            "Продлёнка Энка" — это не просто детский сад, это место силы для маленьких исследователей
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <HistoryComparison 
            currentImg="https://lh3.googleusercontent.com/d/1mPd1klVQHSxXt4eftdL0XSfAzOTYBjef"
            pastImg="https://lh3.googleusercontent.com/d/1mPd1klVQHSxXt4eftdL0XSfAzOTYBjef"
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-display font-bold text-slate-800">Наша история</h2>
            <p className="text-slate-600 leading-relaxed">
              Мы открыли свои двери в 2015 году с одной простой мечтой: создать детский центр, в который дети будут бежать с радостью, а родители — отдавать их со спокойным сердцем
            </p>
            <p className="text-slate-600 leading-relaxed">
              За 10 лет мы выросли из маленькой студии в полноценный центр развития с собственным мини-садом и более чем 10 направлениями обучения
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-brand-yellow/10 rounded-3xl">
                <div className="text-3xl font-bold text-brand-yellow mb-1">100+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Счастливых семей</div>
              </div>
              <div className="p-6 bg-brand-mint/10 rounded-3xl">
                <div className="text-3xl font-bold text-brand-mint mb-1">8+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Опытных педагогов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-[50px] p-12 md:p-20 mb-32">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Наша философия</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Развитие через игру', desc: 'Мы верим, что игра — это самый естественный и эффективный способ познания мира для ребенка' },
              { title: 'Безопасность и комфорт', desc: 'Создаем среду, где ребенок чувствует себя защищенным и может свободно проявлять свои эмоции' },
              { title: 'Партнерство с родителями', desc: 'Мы всегда на связи и работаем в одной команде для достижения лучших результатов' },
            ].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue text-2xl font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
