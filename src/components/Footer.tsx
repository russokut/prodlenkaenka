import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { Send, Phone, Mail, MapPin, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 px-4 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 overflow-hidden rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <img src="/logo.png" alt="Продлёнка Энка" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-brand-blue leading-none">Продлёнка Энка</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Центр развития</span>
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed text-sm max-w-xs">
              Создаем пространство для гармоничного развития детей, где каждый ребенок чувствует себя особенным и талантливым.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: CONTACT_INFO.socials.vk, color: 'hover:bg-blue-600', label: 'VK' },
                { icon: Send, href: CONTACT_INFO.socials.telegram, color: 'hover:bg-blue-500', label: 'Telegram' },
                { icon: MessageCircle, href: CONTACT_INFO.socials.telegram, color: 'hover:bg-blue-400', label: 'Написать нам' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${social.color} border border-slate-100`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Навигация</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.filter(l => !l.submenu).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-500 hover:text-brand-blue transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directions */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Направления</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/mini-garden" className="text-slate-500 hover:text-brand-blue transition-colors font-medium">Мини-сад</Link>
              </li>
              <li>
                <Link to="/after-school" className="text-slate-500 hover:text-brand-blue transition-colors font-medium">Продленка</Link>
              </li>
              <li>
                <Link to="/extra-classes" className="text-slate-500 hover:text-brand-blue transition-colors font-medium">Доп. занятия</Link>
              </li>
              <li>
                <Link to="/creativity" className="text-slate-500 hover:text-brand-blue transition-colors font-medium">Творчество</Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Trust */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Контакты</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-slate-500">
                <MapPin className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.addresses.map((addr, idx) => (
                    <span key={idx} className="text-sm font-medium leading-tight">{addr}</span>
                  ))}
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-slate-500">
                <Phone className="w-5 h-5 text-brand-mint shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-sm font-bold hover:text-brand-blue transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-slate-500">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-medium hover:text-brand-blue transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <iframe 
                src="https://yandex.ru/sprav/widget/rating-badge/18606550128?type=award" 
                width="150" 
                height="50" 
                frameBorder="0"
                className="rounded-xl shadow-sm"
                title="Яндекс Хорошее место"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <p>© 2026 Продлёнка Энка. Все права защищены.</p>
          <div className="flex gap-8">
            <span className="text-slate-300">Детский центр развития в Краснодаре</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
