import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.about': { en: 'About Us', sw: 'Kuhusu Sisi' },
  'nav.subjects': { en: 'Subjects', sw: 'Masomo' },
  'nav.gallery': { en: 'Gallery', sw: 'Picha' },
  'nav.news': { en: 'News', sw: 'Habari' },
  'nav.admission': { en: 'Admission', sw: 'Udahili' },
  'nav.students': { en: 'Students', sw: 'Wanafunzi' },
  'nav.fees': { en: 'Fees', sw: 'Ada' },
  'nav.calendar': { en: 'Calendar', sw: 'Kalenda' },
  'nav.contact': { en: 'Contact Us', sw: 'Wasiliana Nasi' },
  
  // Home
  'hero.est': { en: 'Est. 2015 — Hai Weruweru', sw: 'Imara tangu 2015 — Hai Weruweru' },
  'hero.title': { en: 'Nourishing Spirit, Brain & Body.', sw: 'Kustawisha Roho, Akili na Mwili.' },
  'hero.cta.enroll': { en: 'Enroll for 2024', sw: 'Jiunge kwa 2024' },
  'hero.cta.story': { en: 'Our Story', sw: 'Historia Yetu' },
  
  // Common
  'common.learnMore': { en: 'Learn More', sw: 'Jifunze Zaidi' },
  'common.applyNow': { en: 'Apply Now', sw: 'Omba Sasa' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
