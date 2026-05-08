import { useState, useMemo, ChangeEvent } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Clock, 
  MapPin,
  ChevronDown,
  ArrowRight,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Calendar() {
  const { events } = useSchool();
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Holiday', 'Academic', 'Extracurricular'];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calendar logic
  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const startDay = firstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());
    const days = [];
    
    // Empty slots before first day
    for (let i = 0; i < startDay; i++) {
      days.push({ day: null, hasEvent: false });
    }
    
    // Days of the month
    for (let i = 1; i <= totalDays; i++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayEvents = events.filter(e => e.date === dateStr && (selectedCategory === 'All' || e.category === selectedCategory));
      days.push({ day: i, dateStr, events: dayEvents });
    }
    
    return days;
  }, [currentDate, events, selectedCategory]);

  const filteredEventsForList = useMemo(() => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const isCorrectMonth = eventDate.getMonth() === currentDate.getMonth();
      const isCorrectYear = eventDate.getFullYear() === currentDate.getFullYear();
      const isCorrectCategory = selectedCategory === 'All' || event.category === selectedCategory;
      
      return isCorrectMonth && isCorrectYear && isCorrectCategory;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, currentDate, selectedCategory]);

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Holiday': return 'bg-rose-500';
      case 'Academic': return 'bg-primary';
      case 'Extracurricular': return 'bg-emerald-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Editorial Header Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-baseline justify-between gap-8 mb-12">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-[12vw] lg:text-[140px] font-black text-slate-900 leading-none tracking-tighter opacity-5 absolute -top-10 -left-10 pointer-events-none select-none">
              {currentDate.getFullYear()}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center">
                <span className="w-8 h-[1px] bg-primary mr-3" />
                School Calendar
              </h2>
              <button 
                onClick={() => setCurrentDate(new Date())}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm"
              >
                Go to Today
              </button>
            </div>
            <div className="relative">
              <h3 className="text-7xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter">
                {monthNames[currentDate.getMonth()]}
                <span className="text-primary italic">.</span>
              </h3>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
             <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <button onClick={prevMonth} className="p-4 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all rounded-xl active:scale-95">
                  <ChevronLeft size={24} />
                </button>
                <span className="font-black text-lg px-4 uppercase tracking-widest">{currentDate.getFullYear()}</span>
                <button onClick={nextMonth} className="p-4 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all rounded-xl active:scale-95">
                  <ChevronRight size={24} />
                </button>
             </div>
             
             <div className="flex flex-wrap justify-end gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                      selectedCategory === cat 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Grid View */}
          <div className="lg:col-span-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="grid grid-cols-7 gap-4 mb-8">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 border-b border-slate-100">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-4">
                {calendarDays.map((dayObj, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all group ${
                      dayObj.day ? 'hover:bg-slate-50 cursor-pointer hover:shadow-inner' : 'border border-dashed border-slate-100 opacity-20'
                    }`}
                  >
                    {dayObj.day && (
                      <>
                        <span className={`text-lg font-bold ${dayObj.events && dayObj.events.length > 0 ? 'text-slate-900' : 'text-slate-400 opacity-50'}`}>
                          {dayObj.day}
                        </span>
                        {dayObj.events && dayObj.events.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            {dayObj.events.map((e, idx) => (
                              <div key={idx} className={`w-1.5 h-1.5 rounded-full shadow-sm ${getCategoryColor(e.category)} animate-in zoom-in duration-300`} />
                            ))}
                          </div>
                        )}
                        {dayObj.day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear() && (
                          <div className="absolute top-2 right-2 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-sm ring-4 ring-secondary/10" />
                        )}
                        {dayObj.events && dayObj.events.length > 0 && (
                          <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none" />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* List View - Recipe 9 Style */}
          <div className="lg:col-span-4 flex flex-col gap-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-400">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Events Summary</h4>
            <div className="space-y-12">
               <AnimatePresence mode="popLayout">
                  {filteredEventsForList.length > 0 ? (
                    filteredEventsForList.map((event, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        key={event.id} 
                        className="relative pl-12 group"
                      >
                         <span className="absolute -left-4 top-0 text-7xl font-serif font-black italic text-slate-900/10 group-hover:text-primary transition-colors leading-none pointer-events-none">
                            {new Date(event.date).getDate()}
                         </span>
                         <div className="relative z-10 pt-4">
                            <div className="flex items-center space-x-2 mb-2">
                               <div className={`w-2 h-2 rounded-full ${getCategoryColor(event.category)}`} />
                               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{event.category}</span>
                            </div>
                            <h5 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">
                               {event.title}
                            </h5>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                               {event.description}
                            </p>
                            <div className="flex items-center text-[10px] font-black text-primary uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                               <span>Learn More</span>
                               <ArrowRight size={12} className="ml-2" />
                            </div>
                         </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-20 text-center border-t border-slate-200">
                       <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Quiet Month</p>
                       <p className="text-slate-500 text-sm italic">No special activities planned yet for this selection.</p>
                    </div>
                  )}
               </AnimatePresence>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-8 pt-8 border-t border-slate-200">
               <button className="w-full bg-slate-900 text-white rounded-2xl py-5 px-8 font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-primary transition-all active:scale-95 shadow-2xl shadow-slate-900/20">
                  <Plus size={16} />
                  Suggest Event
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Footer Stripe */}
      <div className="h-24 bg-slate-900 flex items-center justify-between px-8 text-white/20 select-none">
         <span className="font-serif italic text-2xl">Spirit.</span>
         <span className="font-black uppercase tracking-[1em] text-xs">BethelStars Excellence</span>
         <span className="font-serif italic text-2xl">Body.</span>
      </div>
    </div>
  );
}
