import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Scissors, Brush, Camera, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../constants';
import { works } from '../data/works';

export default function Creativity() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Show all works
  const galleryImages = works;

  const studios = [
    {
      title: 'Гончарная мастерская',
      icon: Palette,
      color: 'bg-brand-coral',
      age: '5 - 10 лет',
      desc: 'Работа с глиной, создание посуды и фигурок, обжиг и роспись изделий',
      img: 'https://lh3.googleusercontent.com/d/1sim8Ge-mdmRfSp4dJp2jkeZUDcZ_1P12'
    },
    {
      title: 'ИЗО-студия',
      icon: Brush,
      color: 'bg-brand-blue',
      age: '3 - 10 лет',
      desc: 'Рисование в различных техниках: акварель, гуашь, пастель, графика',
      img: 'https://lh3.googleusercontent.com/d/1UbkyJTqn2Q6MlX_ncixRuZfYkZMNon8z'
    },
    {
      title: 'Рукоделие',
      icon: Scissors,
      color: 'bg-brand-yellow',
      age: '4 - 10 лет',
      desc: 'Создание поделок из фетра, бумаги, природных материалов, бисероплетение',
      img: 'https://lh3.googleusercontent.com/d/1jqevk0zkB3j5X00XEiNbEPOYw2uD4bkg'
    }
  ];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handleClose = () => setSelectedImageIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

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
                    href={`https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться в студию: ${studio.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Записаться
                  </a>
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
            <Link to="/creativity/works" className="btn-outline flex items-center gap-2">
              Смотреть все
              <Camera className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((work, n) => (
              <motion.div 
                key={work.id} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImageIndex(n)}
                className="rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all cursor-pointer group relative"
              >
                <img 
                  src={`https://lh3.googleusercontent.com/d/${work.id}`} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 md:left-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110]"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-0 md:right-4 text-white/70 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110]"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-5xl max-h-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={`https://lh3.googleusercontent.com/d/${galleryImages[selectedImageIndex].id}`} 
                  alt={galleryImages[selectedImageIndex].title} 
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-6 text-center">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-2">
                    {galleryImages[selectedImageIndex].studio} • {galleryImages[selectedImageIndex].date}
                  </p>
                  <h4 className="text-white text-xl font-bold">{galleryImages[selectedImageIndex].title}</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
