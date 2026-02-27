import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { Instagram, Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-14 h-14 overflow-hidden rounded-2xl">
              <img src="/logo.png" alt="Продлёнка Энка" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-brand-blue">Продлёнка Энка</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Центр развития</span>
            </div>
          </Link>
          <p className="text-slate-500 leading-relaxed">
            Создаем пространство для гармоничного развития детей, где каждый ребенок чувствует себя особенным и талантливым.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: CONTACT_INFO.socials.vk, color: 'hover:bg-blue-600', label: 'VK' }, // Using Instagram icon as fallback or I should check icons
              { icon: Send, href: CONTACT_INFO.socials.telegram, color: 'hover:bg-blue-500', label: 'Telegram' },
              { icon: Phone, href: CONTACT_INFO.socials.whatsapp, color: 'hover:bg-green-500', label: 'WhatsApp' },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-white transition-all ${social.color}`}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="mt-2">
            <iframe 
              src="https://yandex.ru/sprav/widget/rating-badge/18606550128?type=award" 
              width="150" 
              height="50" 
              frameBorder="0"
              title="Яндекс Хорошее место"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-display font-bold text-slate-800">Навигация</h4>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.filter(l => !l.submenu).map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-slate-500 hover:text-brand-blue transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/mini-garden" className="text-slate-500 hover:text-brand-blue transition-colors">Мини-сад</Link>
            </li>
            <li>
              <Link to="/after-school" className="text-slate-500 hover:text-brand-blue transition-colors">Продленка</Link>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-display font-bold text-slate-800">Контакты</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-slate-500">
              <MapPin className="w-5 h-5 text-brand-coral shrink-0" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.addresses.map((addr, idx) => (
                  <span key={idx}>{addr}</span>
                ))}
              </div>
            </li>
            <li className="flex gap-3 text-slate-500">
              <Phone className="w-5 h-5 text-brand-mint shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-brand-blue">{CONTACT_INFO.phone}</a>
            </li>
            <li className="flex gap-3 text-slate-500">
              <Mail className="w-5 h-5 text-brand-blue shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-blue">{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>© 2026 Продлёнка Энка. Все права защищены.</p>
      </div>
    </footer>
  );
}
