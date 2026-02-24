import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { cn } from '../constants';

export default function Blog() {
  const posts = [
    {
      title: 'Как подготовить ребенка к детскому саду?',
      desc: 'Советы психолога по мягкой адаптации и созданию положительного настроя у малыша',
      date: '20 февраля 2024',
      author: 'Мария Иванова',
      category: 'Советы родителям',
      img: 'https://picsum.photos/seed/blog-1/600/400'
    },
    {
      title: 'Развитие мелкой моторики: почему это важно?',
      desc: 'Связь между ловкостью рук и развитием речи. Простые упражнения для дома',
      date: '15 февраля 2024',
      author: 'Анна Петрова',
      category: 'Развитие',
      img: 'https://picsum.photos/seed/blog-2/600/400'
    },
    {
      title: 'Итоги зимней смены нашего лагеря',
      desc: 'Как мы провели каникулы: фотоотчет, отзывы детей и самые яркие моменты',
      date: '10 февраля 2024',
      author: 'Сергей Волков',
      category: 'Новости центра',
      img: 'https://picsum.photos/seed/blog-3/600/400'
    },
    {
      title: '5 причин начать учить английский с 4 лет',
      desc: 'Преимущества раннего обучения иностранным языкам и наши методики',
      date: '5 февраля 2024',
      author: 'Елена Соколова',
      category: 'Обучение',
      img: 'https://picsum.photos/seed/blog-4/600/400'
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
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Блог и новости</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Полезные статьи о развитии детей, новости нашего центра и советы экспертов
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Все статьи', 'Советы родителям', 'Развитие', 'Новости центра', 'Обучение'].map((cat, i) => (
            <button 
              key={i}
              className={cn(
                "px-6 py-2 rounded-full font-bold text-sm transition-all",
                i === 0 ? "bg-brand-blue text-white shadow-md" : "bg-white text-slate-500 hover:bg-brand-cream"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-blue shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col gap-4 flex-grow">
                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {post.desc}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-2 text-brand-coral font-bold group-hover:gap-4 transition-all">
                  Читать далее
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, '...', 10].map((n, i) => (
            <button 
              key={i}
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all",
                n === 1 ? "bg-brand-blue text-white shadow-lg" : "bg-white text-slate-500 hover:bg-brand-cream"
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
