import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-md z-[60]"
        >
          <div className="bg-white rounded-[30px] shadow-2xl p-6 border border-slate-100 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-800">Мы используем куки 🍪</h4>
              <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {!showDetails ? (
              <>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Мы используем файлы cookie, чтобы обеспечить вам наилучший опыт на нашем сайте. Продолжая использовать сайт, вы соглашаетесь с нашей политикой.
                </p>
                <div className="flex gap-3">
                  <button onClick={handleAccept} className="btn-primary py-2 px-6 text-sm flex-1">
                    Принять
                  </button>
                  <button onClick={() => setShowDetails(true)} className="btn-outline py-2 px-6 text-sm flex-1">
                    Подробнее
                  </button>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-sm text-slate-500 flex flex-col gap-3"
              >
                <p className="font-bold text-slate-700">Что такое куки?</p>
                <p>Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайтов. Они помогают нам:</p>
                <ul className="list-disc pl-4 flex flex-col gap-1">
                  <li>Запоминать ваши предпочтения</li>
                  <li>Анализировать посещаемость сайта</li>
                  <li>Показывать вам актуальную информацию</li>
                </ul>
                <p>Вы можете отключить куки в настройках вашего браузера, но это может повлиять на работу некоторых функций сайта.</p>
                <div className="flex gap-3 mt-2">
                  <button onClick={handleAccept} className="btn-primary py-2 px-6 text-sm flex-1">
                    Понятно
                  </button>
                  <button onClick={() => setShowDetails(false)} className="btn-outline py-2 px-6 text-sm flex-1">
                    Назад
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
