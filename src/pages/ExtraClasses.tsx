import React from 'react';
import { motion } from 'motion/react';
import { Languages, Brain, GraduationCap, CheckCircle2, ArrowRight, Zap, Palette, Scissors, Shapes } from 'lucide-react';
import { cn } from '../constants';

export default function ExtraClasses() {
  const classes = [
    {
      title: 'Английский язык',
      icon: Languages,
      color: 'bg-brand-blue',
      desc: 'Изучаем язык через игры, песни и общение. Группы по уровням и возрастам',
      features: ['Носители языка', 'Игровая методика', 'Разговорный клуб'],
      age: '4 - 10 лет'
    },
    {
      title: 'Шахматы',
      icon: Brain,
      color: 'bg-brand-yellow',
      desc: 'Развиваем логику, стратегическое мышление и усидчивость',
      features: ['Турниры', 'Индивидуальный подход', 'Опытные тренеры'],
      age: '5 - 10 лет'
    },
    {
      title: 'Подготовка к школе',
      icon: GraduationCap,
      color: 'bg-brand-mint',
      desc: 'Комплексная подготовка: чтение, письмо, математика и психологическая готовность',
      features: ['Малые группы', 'Авторские методики', 'Диагностика'],
      age: '5 - 7 лет'
    },
    {
      title: 'Скорочтение',
      icon: Zap,
      color: 'bg-brand-coral',
      desc: 'Увеличиваем скорость чтения и понимания текста в 2-3 раза',
      features: ['Развитие памяти', 'Концентрация', 'Техники чтения'],
      age: '6 - 12 лет'
    },
    {
      title: 'ИЗО-студия',
      icon: Palette,
      color: 'bg-brand-lavender',
      desc: 'Раскрываем творческий потенциал через живопись и графику',
      features: ['Разные техники', 'Выставки работ', 'Профессиональные краски'],
      age: '4 - 10 лет'
    },
    {
      title: 'Рукоделочка',
      icon: Scissors,
      color: 'bg-brand-mint',
      desc: 'Создаем уникальные поделки своими руками из разных материалов',
      features: ['Мелкая моторика', 'Фантазия', 'Подарки близким'],
      age: '4 - 9 лет'
    },
    {
      title: 'Гончарное дело',
      icon: Shapes,
      color: 'bg-brand-yellow',
      desc: 'Работа с глиной: от лепки до гончарного круга',
      features: ['Сенсорное развитие', 'Свой декор', 'Медитативный процесс'],
      age: '5 - 12 лет'
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
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Дополнительные занятия</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Всестороннее развитие вашего ребенка в одном месте. Выбирайте направление по интересам!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {classes.map((item, i) => (
            <div key={i} className="glass-card p-10 flex flex-col gap-8 hover:shadow-2xl transition-all group">
              <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform", item.color)}>
                <item.icon className="w-10 h-10" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.age}</div>
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex flex-col gap-3">
                  {item.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-mint" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <a 
                href={`https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на занятие: ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full mt-auto flex items-center justify-center gap-2"
              >
                Записаться
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-[50px] p-12 md:p-20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Почему наши занятия эффективны?</h2>
              <div className="flex flex-col gap-8">
                {[
                  { title: 'Малые группы', desc: 'До 8 человек в группе, что позволяет уделить внимание каждому ребенку' },
                  { title: 'Игровая форма', desc: 'Сложные темы объясняем через интересные задания и квесты' },
                  { title: 'Результат', desc: 'Регулярные отчеты для родителей и открытые уроки' },
                ].map((point, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-brand-coral/10 rounded-2xl flex items-center justify-center text-brand-coral font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-1">{point.title}</h4>
                      <p className="text-slate-500">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/10uQh_0rjCMWHQvz8dO2oTcwLDiie1viM" 
                alt="Эффективные занятия в нашем центре" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
