import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('locale', locale);
    localStorage.setItem('theme', theme);
  }, [locale, theme]);

  const value = useMemo(() => ({
    locale,
    theme,
    setLocale,
    setTheme,
    t: (key) => translations[locale][key] ?? key,
  }), [locale, theme]);

  return (
    <UIContext.Provider value={value}>{children}</UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
};

const translations = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_about: 'About',
    nav_contact: 'Contact',
    cta_get_started: 'Get Started',
    badge: 'Innovative Software & AI Solutions',
    hero_title_1: 'Transforming Ideas',
    hero_title_2: 'Into Digital Reality',
    hero_sub: 'We specialize in cutting-edge software development and AI solutions that drive innovation, streamline operations, and accelerate your business growth.',
    hero_btn_primary: 'Start Your Project',
    hero_btn_secondary: 'View Our Work',
    services_title: 'Comprehensive Tech Solutions',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_portfolio: 'الأعمال',
    nav_about: 'من نحن',
    nav_contact: 'تواصل',
    cta_get_started: 'ابدأ الآن',
    badge: 'حلول برمجية وذكاء اصطناعي مبتكرة',
    hero_title_1: 'نحوّل الأفكار',
    hero_title_2: 'إلى واقع رقمي',
    hero_sub: 'متخصصون في تطوير البرمجيات وحلول الذكاء الاصطناعي لقيادة الابتكار وتبسيط العمليات وتسريع نمو أعمالك.',
    hero_btn_primary: 'ابدأ مشروعك',
    hero_btn_secondary: 'اعرف أعمالنا',
    services_title: 'حلول تقنية متكاملة',
  }
};


