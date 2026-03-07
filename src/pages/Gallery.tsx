import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, Play, X, ChevronLeft, ChevronRight, Maximize2, Filter, Share2, Instagram, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../constants';
import { Link } from 'react-router-dom';
import { galleryMedia, MediaItem } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(40);
  const loadMoreRef = React.useRef<HTMLDivElement>(null);

  const media = galleryMedia;

  // Logic for "All Moments" - we want a good mix but ensure everything is included
  const allMoments = React.useMemo(() => {
    const photos = media.filter(m => m.type === 'photo');
    const videos = media.filter(m => m.type === 'video');
    const mixed: MediaItem[] = [];
    const maxLen = Math.max(photos.length, videos.length);
    
    for (let i = 0; i < maxLen; i++) {
      if (photos[i]) mixed.push(photos[i]);
      if (videos[i]) mixed.push(videos[i]);
    }
    return mixed;
  }, [media]);

  const filteredMedia = React.useMemo(() => {
    if (filter === 'all') return allMoments;
    return media.filter(item => item.type === filter);
  }, [filter, allMoments]);

  const displayedMedia = filteredMedia.slice(0, visibleCount);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(24);
  }, [filter]);

  // Infinite scroll / Lazy load logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredMedia.length) {
          setVisibleCount(prev => prev + 24);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredMedia.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + displayedMedia.length) % displayedMedia.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % displayedMedia.length);
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
  }, [selectedItemIndex, displayedMedia]);

  return (
    <div className="py-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Лучшие моменты</h1>
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
            {displayedMedia.map((item, index) => (
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
                    alt="Продлёнка Энка" 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="relative aspect-video">
                    <img 
                      src={item.thumbnail} 
                      alt="Продлёнка Энка" 
                      loading="lazy"
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
                
                {/* Overlay - now just a simple hover effect without text */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Trigger */}
        {visibleCount < filteredMedia.length && (
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center mt-12">
            <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Empty State */}
        {displayedMedia.length === 0 && (
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
                href="https://t.me/prodlenka_enka?text=Здравствуйте! Посмотрел галерею, хочу записаться на экскурсию"
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
                {displayedMedia[selectedItemIndex].type === 'photo' ? (
                  <img 
                    src={displayedMedia[selectedItemIndex].url} 
                    alt="Продлёнка Энка" 
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full aspect-video max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <iframe 
                      src={displayedMedia[selectedItemIndex].url} 
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <div className="mt-8 text-center max-w-2xl">
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
                      Элемент {selectedItemIndex + 1} из {displayedMedia.length}
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
