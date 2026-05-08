import { useSchool } from '../../context/SchoolContext';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { name, location, contacts, logo } = useSchool();

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container-large">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm p-1 border border-slate-100">
                <img src={logo} alt={name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg leading-none uppercase tracking-tighter">Bethelstars</span>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] leading-none mt-1">Pre & Primary</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              Excellence in education since 2015. Nourishing the spirit, brain, and body of every child in Hai Weruweru.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
              <div>
                <span className="micro-label block mb-8">Navigation</span>
                <ul className="space-y-4">
                  {['About Us', 'Subjects', 'Gallery', 'News', 'Admission'].map((item) => (
                    <li key={item}>
                      <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                        <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <span className="micro-label block mb-8">Portals</span>
                <ul className="space-y-4">
                  {['Admin Portal', 'Students Corner', 'Fees Payment', 'Calendar', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link to={`/${item.toLowerCase().split(' ')[0]}`} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                         <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all" />
                         {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <span className="micro-label block mb-8">Contact</span>
                <ul className="space-y-6 text-sm">
                  <li className="flex items-start space-x-3">
                    <MapPin size={18} className="text-primary shrink-0" />
                    <span className="text-slate-600 font-medium">{location}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone size={18} className="text-primary shrink-0" />
                    <span className="text-slate-600 font-medium">{contacts.director.phone}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail size={18} className="text-primary shrink-0" />
                    <span className="text-slate-600 font-medium break-all">{contacts.email}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
             © {new Date().getFullYear()} Bethelstars School. All rights reserved.
           </p>
           <div className="flex gap-8">
              {['Privacy', 'Terms', 'Accessibility'].map((item) => (
                <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
}
