import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '../constants';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      (scrolled || location.pathname !== '/') ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 overflow-hidden rounded-xl group-hover:rotate-12 transition-transform">
            <img src="/logo.png" alt="Продлёнка Энка" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold leading-tight text-brand-blue">Продлёнка Энка</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Центр развития</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <button 
                  className="flex items-center gap-1 font-semibold text-slate-600 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link 
                  to={link.href}
                  className={cn(
                    "font-semibold transition-colors py-2",
                    location.pathname === link.href ? "text-brand-blue" : "text-slate-600 hover:text-brand-blue"
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-brand-cream hover:text-brand-blue transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 font-bold text-slate-700 hover:text-brand-blue transition-colors">
            <div className="w-8 h-8 bg-brand-mint/20 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-brand-mint" />
            </div>
            {CONTACT_INFO.phone}
          </a>
          <a 
            href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на занятие"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Записаться
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden flex items-center gap-2 px-4 py-2 rounded-2xl transition-all",
            scrolled 
              ? "text-slate-600 hover:bg-slate-100" 
              : "bg-white/80 backdrop-blur-md text-slate-800 shadow-lg border border-white/50"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xs font-bold uppercase tracking-widest">Меню</span>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t mt-3 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-slate-400 text-xs uppercase tracking-wider px-2">{link.name}</span>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="px-4 py-2 font-semibold text-slate-600 hover:text-brand-blue"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="px-2 py-2 block font-bold text-slate-700 hover:text-brand-blue"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 font-bold text-slate-700">
                  <Phone className="w-5 h-5 text-brand-mint" />
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  href="https://t.me/prodlenka_enka?text=Здравствуйте! Хочу записаться на занятие"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Записаться на занятие
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
