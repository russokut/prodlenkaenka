import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, Play, X, ChevronLeft, ChevronRight, Maximize2, Filter, Share2, Instagram, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../constants';
import { Link } from 'react-router-dom';
import { galleryMedia, MediaItem } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = React.useRef<HTMLDivElement>(null);

  const media = galleryMedia;

  // Логика для перемешивания или фильтрации
  const filteredMedia = media.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  const visibleMedia = filteredMedia.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMedia.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredMedia.length);
    }
  };

  const prevItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  };

  // Обработка клавиш
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex]);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow font-medium mb-6"
          >
            <ImageIcon className="w-4 h-4" />
            Галерея моментов
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Жизнь нашего центра
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Посмотрите, как проходят наши будни: творчество, игры, обучение и море улыбок.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'Все моменты', icon: ImageIcon },
            { id: 'photo', label: 'Фотографии', icon: ImageIcon },
            { id: 'video', label: 'Видео', icon: Video },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setFilter(item.id as any);
                setVisibleCount(12);
              }}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300",
                filter === item.id 
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25 scale-105" 
                  : "bg-white text-slate-600 hover:bg-slate-100"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleMedia.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-square rounded-[32px] overflow-hidden bg-white shadow-xl cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-brand-yellow text-sm font-medium mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      {item.type === 'video' ? <Play className="w-6 h-6 fill-current" /> : <Maximize2 className="w-6 h-6" />}
                    </div>
                  </div>
                </div>

                {/* Video Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-blue shadow-lg">
                    <Video className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleLoadMore}
              className="btn-primary px-12 py-4 rounded-2xl inline-flex items-center gap-3 group"
            >
              Показать еще
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 hidden md:flex"
              onClick={prevItem}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 hidden md:flex"
              onClick={nextItem}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto md:max-h-[80vh] rounded-[40px] overflow-hidden shadow-2xl bg-black"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={filteredMedia[selectedItemIndex].url} 
                alt={filteredMedia[selectedItemIndex].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <span className="text-brand-yellow font-medium mb-2 block">
                      {filteredMedia[selectedItemIndex].category}
                    </span>
                    <h2 className="text-white text-3xl font-display font-bold">
                      {filteredMedia[selectedItemIndex].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                      Поделиться
                    </button>
                    <a 
                      href="https://t.me/prodlenka_enka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#229ED9] flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Send className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}