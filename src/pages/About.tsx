import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, ShieldCheck, Users } from 'lucide-react';
import { HistoryComparison } from '../components/HistoryComparison';
import { cn } from '../constants';

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
            Продлёнка Энка — это место силы для маленьких исследователей
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
              За 10 лет мы выросли из маленькой студии в полноценный центр развития с собственным мини-садом и более чем 10 направлениями развития
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

        {/* Team Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-brand-mint/20 text-brand-mint rounded-full font-bold text-sm mb-6">
                Сердце нашего центра
              </div>
              <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Команда профессионалов, влюбленных в свое дело</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Наши педагоги — это не просто специалисты с профильным образованием. Это люди, которые искренне любят детей и умеют находить подход к каждому маленькому человеку
              </p>
              <div className="grid gap-6">
                {[
                  { title: 'Забота и внимание', desc: 'Уважаем личность ребенка и поддерживаем его инициативы', icon: Heart, color: 'text-brand-coral' },
                  { title: 'Профессионализм', desc: 'Постоянно повышаем квалификацию и внедряем лучшие методики', icon: Star, color: 'text-brand-yellow' },
                  { title: 'Безопасность', desc: 'Создаем психологически комфортную и защищенную среду', icon: ShieldCheck, color: 'text-brand-blue' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={cn("mt-1 shrink-0", item.color)}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/d/18i-9-v3qMQiuSJnZS-_b2gbmBV_n6Vqm" 
                  alt="Наши педагоги" 
                  className="w-full h-full object-cover brightness-105 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow/20 rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue/10 rounded-full -z-10" />
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-brand-mint rounded-2xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-slate-800">8+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Педагогов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
