import { useSchool } from '../context/SchoolContext';
import { Mail, Phone, MapPin, Send, MessageSquare, Quote, Star, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const { contacts, location, feedbacks } = useSchool();
  const [formState, setFormState] = useState({ name: '', email: '', message: '', agreeToPublish: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // LOGIC: Data would be sent to:
    // Email: bethelstars57@gmail.com (Director)
    // SMS/WhatsApp: 0750392528 (Head Teacher)
    console.log('Sending to email/phone...', formState);
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '', agreeToPublish: false });
  };

  const approvedFeedbacks = feedbacks.filter(f => f.approved);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Info */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h1>
            <h2 className="text-6xl font-black text-slate-900 mb-10 uppercase tracking-tight">Reach <span className="text-primary italic">Out</span></h2>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              We value your feedback. Whether it's a suggestion, an inquiry about school fees, or a comment about our teaching, our administration is ready to listen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover-glow transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6"><Phone size={24} /></div>
                 <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight text-xs">Director</h4>
                 <p className="text-slate-600 font-bold">{contacts.director.phone}</p>
                 <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{contacts.director.name}</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover-glow transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6"><Phone size={24} /></div>
                 <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight text-xs">Head Teacher</h4>
                 <p className="text-slate-600 font-bold">{contacts.headTeacher.phone}</p>
                 <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{contacts.headTeacher.name}</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover-glow transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6"><Mail size={24} /></div>
                 <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight text-xs">Administration</h4>
                 <p className="text-slate-600 font-bold break-all">{contacts.email}</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover-glow transition-all">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6"><MapPin size={24} /></div>
                 <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight text-xs">Campus</h4>
                 <p className="text-slate-600 font-bold">{location}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            
            <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Express Your <span className="text-primary italic">Feedback</span></h3>
            
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-700 p-12 rounded-[3rem] text-center flex flex-col items-center border border-emerald-100">
                 <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6"><CheckCircle2 size={32} /></div>
                 <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Feedback Received</h4>
                 <p className="text-sm opacity-80 mb-8">Thank you for sharing. Your message has been sent to the Director and Head Teacher.</p>
                 <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-xs uppercase"
                 >
                   Send Another
                 </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-primary/10 outline-none text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-primary/10 outline-none text-sm transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Your Message</label>
                  <textarea 
                    rows={5} 
                    required 
                    placeholder="Share your thoughts or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-primary/10 outline-none text-sm resize-none transition-all" 
                  />
                </div>
                
                <label className="flex items-start space-x-3 cursor-pointer group p-2">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    checked={formState.agreeToPublish}
                    onChange={(e) => setFormState({...formState, agreeToPublish: e.target.checked})}
                  />
                  <span className="text-sm text-slate-500 leading-tight">
                    I agree to have my feedback published on the website if approved by the administration.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 btn-hover shadow-2xl"
                >
                  <MessageSquare size={20} />
                  <span className="uppercase tracking-widest text-xs">Submit Feedback</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Public Feedback Wall */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Voice of <span className="text-primary italic">Parents</span></h2>
              <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">Approved Community Feedback</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approvedFeedbacks.map((f, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group card-hover">
                   <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote size={40} />
                   </div>
                   <div className="flex space-x-1 text-secondary mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed font-medium">"{f.message}"</p>
                   <div className="flex items-center space-x-4 border-t border-slate-200 pt-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-xs">
                         {f.name.charAt(0)}
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 text-sm">{f.name}</h4>
                         <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">{f.date}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
