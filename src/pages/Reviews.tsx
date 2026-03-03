import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ExternalLink, MapPin, Quote, ArrowRight, Heart } from 'lucide-react';
import { cn } from '../constants';

const BRANCHES = [
  {
    id: 'korenovskaya',
    name: 'ул. Кореновская, 21',
    yandexId: '18606550128',
    yandexUrl: 'https://yandex.ru/maps/org/prodlyonka_enka/18606550128/reviews/',
    dgUrl: 'https://2gis.ru/krasnodar/firm/70000001038076137/tab/reviews',
    color: 'bg-brand-yellow'
  },
  {
    id: 'khabibullina',
    name: 'ул. Хабибуллина, 4',
    yandexId: '180951391583',
    yandexUrl: 'https://yandex.ru/maps/org/prodlyonka_enka/180951391583/reviews/',
    dgUrl: 'https://2gis.ru/krasnodar/firm/70000001103453262/tab/reviews',
    color: 'bg-brand-blue'
  }
];

const TESTIMONIALS = [
  {
    author: 'Анна М.',
    text: 'Замечательный центр! Ребенок ходит в мини-сад с огромным удовольствием. Педагоги очень внимательные, программа насыщенная. Видим реальный прогресс в развитии.',
    rating: 5,
    branch: 'Кореновская'
  },
  {
    author: 'Сергей В.',
    text: 'Продленка — наше спасение. Забирают из школы, делают уроки, кормят. Ребенок всегда под присмотром и занят делом. Очень рекомендую!',
    rating: 5,
    branch: 'Хабибуллина'
  },
  {
    author: 'Елена К.',
    text: 'Ходим на творческие занятия. Дочка в восторге от мастер-классов. Атмосфера в центре очень теплая и дружелюбная.',
    rating: 5,
    branch: 'Кореновская'
  }
];

export default function Reviews() {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-full font-bold text-sm mb-6">
            <Star className="w-4 h-4 fill-brand-yellow" />
            <span>Нам доверяют сотни родителей</span>
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Отзывы о нашем центре</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ваши слова благодарности — лучшая награда для нашей команды. Мы работаем, чтобы каждый ребенок был счастлив!
          </p>
        </motion.div>

        {/* Branch Selection Tabs */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="inline-flex p-2 bg-white rounded-[32px] shadow-xl border border-slate-100">
            {BRANCHES.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-[24px] font-bold transition-all duration-300",
                  activeBranch.id === branch.id 
                    ? "bg-brand-blue text-white shadow-lg scale-105" 
                    : "bg-transparent text-slate-500 hover:text-brand-blue"
                )}
              >
                <MapPin className="w-5 h-5" />
                <span>{branch.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Handpicked Reviews */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-display font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Quote className="w-6 h-6 text-brand-coral" />
              Мнения родителей
            </h2>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-md border border-slate-100 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{t.author}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">филиал {t.branch}</span>
                </div>
              </motion.div>
            ))}

            {/* CTA to leave review */}
            <div className="bg-brand-coral rounded-[32px] p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Ваш отзыв важен для нас!</h3>
              <p className="text-white/80 mb-6 text-sm">Поделитесь своими впечатлениями о нашем центре. Это поможет другим родителям сделать правильный выбор</p>
              <div className="flex flex-col gap-3">
                <a 
                  href={activeBranch.yandexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/20"
                >
                  <span className="font-bold">Написать в Яндекс</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href={activeBranch.dgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/20"
                >
                  <span className="font-bold">Написать в 2ГИС</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Official Widgets */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 min-h-[600px] flex flex-col">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-bold text-slate-800">Отзывы на Яндекс.Картах</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Филиал: {activeBranch.name}</p>
                  </div>
                </div>
                <a 
                  href={activeBranch.yandexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline text-sm font-bold flex items-center gap-1"
                >
                  Открыть в Картах <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex-grow relative">
                <iframe 
                  key={activeBranch.yandexId}
                  style={{ width: '100%', height: '100%', border: 'none', minHeight: '600px' }}
                  src={`https://yandex.ru/maps-reviews-widget/${activeBranch.yandexId}?comments`}
                ></iframe>
              </div>
            </div>

            {/* 2GIS Link Card */}
            <div className="bg-white rounded-[40px] shadow-xl p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">2Г</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Смотрите нас в 2ГИС</h3>
                  <p className="text-slate-500">Читайте подробные отзывы и смотрите фото от наших клиентов</p>
                </div>
              </div>
              <a 
                href={activeBranch.dgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                Читать в 2ГИС
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-32 grid md:grid-cols-4 gap-8">
          {[
            { label: 'Средняя оценка', value: '5.0', icon: Star, color: 'text-brand-yellow' },
            { label: 'Отзывы в сети', value: 'Честные', icon: MessageSquare, color: 'text-brand-blue' },
            { label: 'Довольных семей', value: '100+', icon: Heart, color: 'text-brand-coral' },
            { label: 'Лет работы', value: '10+', icon: Star, color: 'text-brand-mint' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 text-center">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-slate-50", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-display font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
