import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAV_LINKS = [
  { name: 'Главная', href: '/' },
  { name: 'О нас', href: '/about' },
  { 
    name: 'Направления', 
    href: '#',
    submenu: [
      { name: 'Мини-сад', href: '/mini-garden' },
      { name: 'Продленка', href: '/after-school' },
      { name: 'Доп. занятия', href: '/extra-classes' },
      { name: 'Творчество', href: '/creativity' },
      { name: 'Летний клуб', href: '/summer-camp' },
    ]
  },
  { name: 'Цены', href: '/pricing' },
  { name: 'Галерея', href: '/gallery' },
  { name: 'Контакты', href: '/contacts' },
];

export const CONTACT_INFO = {
  phone: '+7 928 246 87 32',
  email: 'hdecor21@mail.ru',
  addresses: [
    'г. Краснодар, ул. Кореновская, 21',
    'г. Краснодар, ул. Хабибуллина, 4'
  ],
  workingHours: 'Пн-Пт: 7:30 - 19:00',
  socials: {
    vk: 'https://vk.com/prodlenka_enka',
    telegram: 'https://t.me/prodlenka_enka',
    whatsapp: 'https://wa.me/79282468732',
  }
};
