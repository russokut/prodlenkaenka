import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, Play, X, ChevronLeft, ChevronRight, Maximize2, Filter, Share2, Instagram, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../constants';
import { Link } from 'react-router-dom';

type MediaType = 'photo' | 'video';

interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const media: MediaItem[] = [
    {
      id: '1',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/10z_ICrcaEQ4aGWin4UNOxTUkivA2B6A0',
      title: 'Творческое занятие',
      category: 'Творчество'
    },
    {
      id: '2',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/1mysF4dRuF-qDrfHvwN4m6o4kFHfYkRy2',
      title: 'Игры в мини-саду',
      category: 'Мини-сад'
    },
    {
      id: '3',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/1edCBkm6Gw6W18wcAD_gJSE9V2wy7tYRr',
      title: 'Урок рисования',
      category: 'ИЗО-студия'
    },
    {
      id: 'v1',
      type: 'video',
      url: 'https://drive.google.com/file/d/1emDft7xkTwMhF4yYxgJs0cLJ-Kj_X_GL/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1emDft7xkTwMhF4yYxgJs0cLJ-Kj_X_GL',
      title: 'Наши будни',
      category: 'Обзор'
    },
    {
      id: '5',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/1uAsb3U38ebeI5AuYQmZcPJvTuQwtRowG',
      title: 'Праздник осени',
      category: 'Мероприятия'
    },
    {
      id: '6',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/1-O63m9yvLQ2vd-JPuKxA0FOwG0hzgw9h',
      title: 'Занятия по английскому',
      category: 'Обучение'
    },
    {
      id: 'v2',
      type: 'video',
      url: 'https://drive.google.com/file/d/1h6EDTzyK-xocQS9Zu9u6HaS0Nwdclipx/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1h6EDTzyK-xocQS9Zu9u6HaS0Nwdclipx',
      title: 'Творческий процесс',
      category: 'Творчество'
    },
    {
      id: '8',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/13349oQ2sT3cIeTjcWGlfyFHvcYRnLRv3',
      title: 'Мастер-класс по лепке',
      category: 'Творчество'
    },
    {
      id: '9',
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/d/1jifQMTjYfPxwEsDChiw5tzDz-F-NFk0F',
      title: 'Прогулка на площадке',
      category: 'Мини-сад'
    },
    {
      id: 'v3',
      type: 'video',
      url: 'https://drive.google.com/file/d/1_Khf7SFDYISmPgeXS-vIx4mLj9H9iNr8/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1_Khf7SFDYISmPgeXS-vIx4mLj9H9iNr8',
      title: 'Веселые игры',
      category: 'Мини-сад'
    },
    {
      id: 'v4',
      type: 'video',
      url: 'https://drive.google.com/file/d/1awJL_BdN9t0-MsiV-OGPfuVg3cRkxqki/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1awJL_BdN9t0-MsiV-OGPfuVg3cRkxqki',
      title: 'Занятия в центре',
      category: 'Обучение'
    },
    {
      id: 'v5',
      type: 'video',
      url: 'https://drive.google.com/file/d/1JabthVgw7-BKhoFqcmzJDWTTwWE9icVN/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1JabthVgw7-BKhoFqcmzJDWTTwWE9icVN',
      title: 'Наши праздники',
      category: 'Мероприятия'
    },
    {
      id: 'v6',
      type: 'video',
      url: 'https://drive.google.com/file/d/1haZXcDaz64BrzhL5DhgegtUQ-FjFFPL6/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1haZXcDaz64BrzhL5DhgegtUQ-FjFFPL6',
      title: 'Моменты радости',
      category: 'Жизнь центра'
    },
    {
      id: 'v7',
      type: 'video',
      url: 'https://drive.google.com/file/d/12ZQLta04J73A2Ni4GyTdlvPtzEpFuZoO/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/12ZQLta04J73A2Ni4GyTdlvPtzEpFuZoO',
      title: 'Увлекательные уроки',
      category: 'Обучение'
    },
    {
      id: 'v8',
      type: 'video',
      url: 'https://drive.google.com/file/d/1-faJExS5Q5VFRQSHM091AFgSwTrOpK-u/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1-faJExS5Q5VFRQSHM091AFgSwTrOpK-u',
      title: 'Развивающие игры',
      category: 'Мини-сад'
    },
    {
      id: 'v9',
      type: 'video',
      url: 'https://drive.google.com/file/d/1rYXR6__QY2GWyb2kkM-21mSojMswpNsF/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1rYXR6__QY2GWyb2kkM-21mSojMswpNsF',
      title: 'Творческая мастерская',
      category: 'Творчество'
    },
    {
      id: 'v10',
      type: 'video',
      url: 'https://drive.google.com/file/d/1TGovSnZQbh-got6RoimdMQsmeSh5Sth1/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1TGovSnZQbh-got6RoimdMQsmeSh5Sth1',
      title: 'Наши успехи',
      category: 'Обучение'
    },
    {
      id: 'v11',
      type: 'video',
      url: 'https://drive.google.com/file/d/1L4jUQdGa6_8n5I1rGYQuu1WPzg4Z6c5T/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1L4jUQdGa6_8n5I1rGYQuu1WPzg4Z6c5T',
      title: 'Будни в саду',
      category: 'Мини-сад'
    },
    {
      id: 'v12',
      type: 'video',
      url: 'https://drive.google.com/file/d/19lTyIbhAuYGlFmsDPweKWojWmHxv-aY8/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/19lTyIbhAuYGlFmsDPweKWojWmHxv-aY8',
      title: 'Интересные занятия',
      category: 'Обучение'
    },
    {
      id: 'v13',
      type: 'video',
      url: 'https://drive.google.com/file/d/1sArk_9tmbO5PHRxNYxzyPqZ_-nBKYmh0/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1sArk_9tmbO5PHRxNYxzyPqZ_-nBKYmh0',
      title: 'Наши открытия',
      category: 'Жизнь центра'
    },
    {
      id: 'v14',
      type: 'video',
      url: 'https://drive.google.com/file/d/1BlR7wm2MSuc-3FgZJNspXZEj9q6jV6ut/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1BlR7wm2MSuc-3FgZJNspXZEj9q6jV6ut',
      title: 'Счастливые моменты',
      category: 'Жизнь центра'
    },
    {
      id: 'v15',
      type: 'video',
      url: 'https://drive.google.com/file/d/1r8jjrnlLXTM4UoJg_opzMCUAqpH-fTO3/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1r8jjrnlLXTM4UoJg_opzMCUAqpH-fTO3',
      title: 'Мастер-классы',
      category: 'Творчество'
    },
    {
      id: 'v16',
      type: 'video',
      url: 'https://drive.google.com/file/d/1QxRyFLge76xsIo_2TbYIqfWThZjdxgPy/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1QxRyFLge76xsIo_2TbYIqfWThZjdxgPy',
      title: 'Наши праздники',
      category: 'Мероприятия'
    },
    {
      id: 'v17',
      type: 'video',
      url: 'https://drive.google.com/file/d/1mvjidu3rzRiK2EMWW1mPksAxUjXFvFiv/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1mvjidu3rzRiK2EMWW1mPksAxUjXFvFiv',
      title: 'Веселые старты',
      category: 'Спорт'
    },
    {
      id: 'v18',
      type: 'video',
      url: 'https://drive.google.com/file/d/1pCRgjXOb_smEu4xEzlOwEahk0gfrEYP-/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1pCRgjXOb_smEu4xEzlOwEahk0gfrEYP-',
      title: 'Наши прогулки',
      category: 'Мини-сад'
    },
    {
      id: 'v19',
      type: 'video',
      url: 'https://drive.google.com/file/d/1HeRDPJsVG8mp9N3Jlurf-Fbr1xUaitfE/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1HeRDPJsVG8mp9N3Jlurf-Fbr1xUaitfE',
      title: 'Занятия музыкой',
      category: 'Творчество'
    },
    {
      id: 'v20',
      type: 'video',
      url: 'https://drive.google.com/file/d/1oCpcFO-c906uAeS17WX4D-dSQoAcm1NW/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1oCpcFO-c906uAeS17WX4D-dSQoAcm1NW',
      title: 'Наши танцы',
      category: 'Творчество'
    },
    {
      id: 'v21',
      type: 'video',
      url: 'https://drive.google.com/file/d/13g0-iiWfcyWN8sBMXlX6LLQ72fXHaoMj/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/13g0-iiWfcyWN8sBMXlX6LLQ72fXHaoMj',
      title: 'Уроки английского',
      category: 'Обучение'
    },
    {
      id: 'v22',
      type: 'video',
      url: 'https://drive.google.com/file/d/14Hm3tZxMl26s6hgIXpDQPmyHttIw25R7/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/14Hm3tZxMl26s6hgIXpDQPmyHttIw25R7',
      title: 'Наши игры',
      category: 'Мини-сад'
    },
    {
      id: 'v23',
      type: 'video',
      url: 'https://drive.google.com/file/d/10QcPlOD9sL2p9XJR59O_RCYS2W-KXXuD/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/10QcPlOD9sL2p9XJR59O_RCYS2W-KXXuD',
      title: 'Творческие успехи',
      category: 'Творчество'
    },
    {
      id: 'v24',
      type: 'video',
      url: 'https://drive.google.com/file/d/1QcgkPZTTclec5OwDZvg0JNNMhWeMUh1R/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1QcgkPZTTclec5OwDZvg0JNNMhWeMUh1R',
      title: 'Наши будни',
      category: 'Жизнь центра'
    },
    {
      id: 'v25',
      type: 'video',
      url: 'https://drive.google.com/file/d/1pQ8xU0wLHw1jj5Xo7fDVft-dUfD29rpe/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1pQ8xU0wLHw1jj5Xo7fDVft-dUfD29rpe',
      title: 'Веселые моменты',
      category: 'Жизнь центра'
    },
    {
      id: 'v26',
      type: 'video',
      url: 'https://drive.google.com/file/d/1xHcbwOXsbPDqgBtjtPj8YX9qtizcCd32/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1xHcbwOXsbPDqgBtjtPj8YX9qtizcCd32',
      title: 'Наши занятия',
      category: 'Обучение'
    },
    {
      id: 'v27',
      type: 'video',
      url: 'https://drive.google.com/file/d/1_vH6QvB9iG-vTksqlG-vo5FWJWw2kVwI/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1_vH6QvB9iG-vTksqlG-vo5FWJWw2kVwI',
      title: 'Творческие моменты',
      category: 'Творчество'
    },
    {
      id: 'v28',
      type: 'video',
      url: 'https://drive.google.com/file/d/1usWFj-DBAIGQTgKuQazPM2Aw6w_d0cIT/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1usWFj-DBAIGQTgKuQazPM2Aw6w_d0cIT',
      title: 'Наши игры',
      category: 'Мини-сад'
    },
    {
      id: 'v29',
      type: 'video',
      url: 'https://drive.google.com/file/d/1ggmyexf3CzxDUr1NwNs0i2b__32QfxuF/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1ggmyexf3CzxDUr1NwNs0i2b__32QfxuF',
      title: 'Веселые будни',
      category: 'Жизнь центра'
    },
    {
      id: 'v30',
      type: 'video',
      url: 'https://drive.google.com/file/d/1H_YOfDX30Rh74nK3Ir-XNqvnF_rqmgEr/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1H_YOfDX30Rh74nK3Ir-XNqvnF_rqmgEr',
      title: 'Наши занятия',
      category: 'Обучение'
    },
    {
      id: 'v31',
      type: 'video',
      url: 'https://drive.google.com/file/d/1oGwH6DdhJKLqtX_pkt4w1cst85igEDoj/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1oGwH6DdhJKLqtX_pkt4w1cst85igEDoj',
      title: 'Творческие успехи',
      category: 'Творчество'
    },
    {
      id: 'v32',
      type: 'video',
      url: 'https://drive.google.com/file/d/1GwoZgVc4Ch3R6AB29TCFZYdO58Skq9_6/preview',
      thumbnail: 'https://lh3.googleusercontent.com/d/1GwoZgVc4Ch3R6AB29TCFZYdO58Skq9_6',
      title: 'Наши моменты',
      category: 'Жизнь центра'
    }
  ];

  const filteredMedia = media.filter(item => filter === 'all' || item.type === filter);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredMedia.length);
    }
  };

  const handleClose = () => setSelectedItemIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredMedia]);

  return (
    <div className="py-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Галерея моментов</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Яркие будни, творческие успехи и веселые праздники в нашем центре
          </p>
        </motion.div>

        {/* Filters / Tabs */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="inline-flex p-2 bg-white rounded-[32px] shadow-xl border border-slate-100">
            {[
              { id: 'all', label: 'Все моменты', icon: Filter },
              { id: 'photo', label: 'Фотографии', icon: ImageIcon },
              { id: 'video', label: 'Видео-обзоры', icon: Video },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-[24px] font-bold transition-all duration-300",
                  filter === btn.id 
                    ? "bg-brand-blue text-white shadow-lg scale-105" 
                    : "bg-transparent text-slate-500 hover:text-brand-blue"
                )}
              >
                <btn.icon className="w-5 h-5" />
                <span className="hidden md:inline">{btn.label}</span>
                <span className="md:hidden">{btn.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              Яркие <span className="text-brand-blue">фото-отчеты</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full my-auto" />
            <div className="flex items-center gap-2">
              Живые <span className="text-brand-blue">видео-моменты</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItemIndex(index)}
                className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all break-inside-avoid bg-white"
              >
                {item.type === 'photo' ? (
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="relative aspect-video">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-transform border border-white/50">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-display font-bold">{item.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Ничего не найдено</h3>
            <p className="text-slate-500">Попробуйте изменить фильтр</p>
          </div>
        )}

        {/* Marketing CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-brand-coral rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Хотите увидеть своего ребенка здесь?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Запишитесь на бесплатную экскурсию в наш центр и посмотрите своими глазами, как мы создаем счастливое детство
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/79282468732?text=Здравствуйте! Посмотрел галерею, хочу записаться на экскурсию"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-coral px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-brand-yellow hover:text-slate-800 transition-all shadow-xl flex items-center gap-3"
              >
                Записаться на экскурсию
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link to="/contacts" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-white/20 transition-all">
                Наши контакты
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-[110] backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 md:left-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110] backdrop-blur-sm"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-0 md:right-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110] backdrop-blur-sm"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <motion.div
                key={selectedItemIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredMedia[selectedItemIndex].type === 'photo' ? (
                  <img 
                    src={filteredMedia[selectedItemIndex].url} 
                    alt={filteredMedia[selectedItemIndex].title} 
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full aspect-video max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <iframe 
                      src={filteredMedia[selectedItemIndex].url} 
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <div className="mt-8 text-center max-w-2xl">
                  <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-2 block">
                    {filteredMedia[selectedItemIndex].category}
                  </span>
                  <h4 className="text-white text-3xl font-display font-bold mb-6">
                    {filteredMedia[selectedItemIndex].title}
                  </h4>
                  
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex gap-4">
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <Instagram className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <Send className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="flex items-center gap-2 px-6 h-12 bg-brand-blue hover:bg-brand-blue/80 rounded-full text-white font-bold transition-all shadow-lg">
                        <Share2 className="w-4 h-4" />
                        Поделиться
                      </button>
                    </div>
                    <p className="text-white/40 text-sm">
                      Элемент {selectedItemIndex + 1} из {filteredMedia.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
