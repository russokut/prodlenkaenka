import React from 'react';
import { motion } from 'motion/react';
import { Palette, Scissors, Brush, Camera, ArrowRight } from 'lucide-react';
import { cn } from '../constants';

export default function Creativity() {
  const studios = [
    {
      title: 'Гончарная мастерская',
      icon: Palette,
      color: 'bg-brand-coral',
      age: '5 - 10 лет',
      desc: 'Работа с глиной, создание посуды и фигурок, обжиг и роспись изделий',
      img: 'https://picsum.photos/seed/pottery/600/400'
    },
    {
      title: 'ИЗО-студия',
      icon: Brush,
      color: 'bg-brand-blue',
      age: '3 - 10 лет',
      desc: 'Рисование в различных техниках: акварель, гуашь, пастель, графика',
      img: 'https://picsum.photos/seed/painting/600/400'
    },
    {
      title: 'Рукоделие',
      icon: Scissors,
      color: 'bg-brand-yellow',
      age: '4 - 10 лет',
      desc: 'Создание поделок из фетра, бумаги, природных материалов, бисероплетение',
      img: 'https://picsum.photos/seed/craft/600/400'
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
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Творческие студии</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Раскрываем таланты и развиваем фантазию через искусство и ручной труд
          </p>
        </motion.div>

        <div className="grid gap-12 mb-32">
          {studios.map((studio, i) => (
            <div key={i} className={cn("flex flex-col lg:flex-row gap-12 items-center glass-card p-8 md:p-12", i % 2 !== 0 && "lg:flex-row-reverse")}>
              <div className="lg:w-1/2 rounded-[30px] overflow-hidden shadow-xl aspect-video">
                <img 
                  src={studio.img} 
                  alt={studio.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg", studio.color)}>
                  <studio.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{studio.age}</div>
                  <h3 className="text-3xl font-display font-bold text-slate-800 mb-4">{studio.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{studio.desc}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`https://wa.me/79282468732?text=Здравствуйте! Хочу записаться в студию: ${studio.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Записаться
                  </a>
                  <button className="btn-outline">Расписание</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Галерея работ</h2>
              <p className="text-slate-500">Гордимся успехами наших маленьких художников</p>
            </div>
            <button className="btn-outline flex items-center gap-2">
              Смотреть все
              <Camera className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                <img 
                  src={`https://picsum.photos/seed/art-${n}/400/400`} 
                  alt="Работа ученика" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
