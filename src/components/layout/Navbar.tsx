import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, logo } = useSchool();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.subjects'), path: '/subjects' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.admission'), path: '/admission' },
    { name: t('nav.fees'), path: '/fees' },
    { name: t('nav.calendar'), path: '/calendar' },
    { name: t('nav.admin'), path: '/admin' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden p-1 border border-slate-100">
                <img src={logo} alt={name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg leading-none uppercase tracking-tighter">Bethelstars</span>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] leading-none mt-1">Pre & Primary</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              className="ml-4 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group"
            >
              <Globe size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                {language === 'en' ? 'SW' : 'EN'}
              </span>
            </button>

            <Link
              to="/contact"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-primary transition-colors bg-slate-50 rounded-xl"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-slate-100 bg-white p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {/* Mobile Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-2xl group"
              >
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                    {language === 'en' ? 'Switch to Kiswahili' : 'Badili kwenda Kiingereza'}
                  </span>
                </div>
                <div className="text-[10px] font-black text-primary uppercase">{language === 'en' ? 'SW' : 'EN'}</div>
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white py-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
