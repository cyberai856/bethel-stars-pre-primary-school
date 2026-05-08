import { useSchool } from '../context/SchoolContext';
import { CheckCircle, Info, FileText, CreditCard, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Fees() {
  const { fees, images } = useSchool();
  const [selectedFee, setSelectedFee] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaid(true);
    }, 2500);
  };

  const currentFee = selectedFee === 'nursery' ? fees.nursery :
                    selectedFee === 'primary' ? fees.primary :
                    fees.daycare.find(d => d.id === selectedFee)?.price || '0';

  return (
    <div className="bg-paper min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container-large">
          <div className="flex flex-col lg:flex-row items-baseline justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                 <span className="w-12 h-[1px] bg-primary" />
                 <span className="micro-label text-primary">Investing in Excellence</span>
              </div>
              <h1 className="editorial-title text-slate-900">
                Tuition <span className="text-primary italic">Structure.</span>
              </h1>
            </motion.div>
            <p className="text-slate-500 font-medium max-w-sm italic">
              "Transparent and sustainable funding models to ensure your child receives the highest caliber of global education."
            </p>
          </div>
        </div>
        
        {/* Large Watermark */}
        <div className="absolute top-20 -right-10 pointer-events-none select-none">
          <span className="text-[200px] font-black text-slate-900 opacity-[0.03] leading-none tracking-tighter uppercase">
            Funding
          </span>
        </div>
      </section>

      <div className="container-large">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Daycare */}
          <div className="card-premium flex flex-col overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img src={images.daycare} alt="Daycare" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div className="p-12 relative flex-1">
              <span className="micro-label mb-2 block">Monthly Foundation</span>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">Daycare</h3>
              
              <div className="space-y-8 mb-12">
                {fees.daycare.map((item) => (
                  <div key={item.id} className="flex justify-between items-end border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-1">{item.age}</span>
                      <div className="text-3xl font-black text-slate-900">{item.price}/-</div>
                    </div>
                    <button 
                      onClick={() => setSelectedFee(item.id)}
                      className="text-primary font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>

              <ul className="space-y-4">
                {['Nutrition Guidance', 'Play-based Learning', 'Social Milestones'].map((f, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-slate-500 font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nursery */}
          <div className="card-premium flex flex-col overflow-hidden group relative bg-slate-900 border-primary/20">
            <div className="absolute top-6 right-6 z-20">
               <span className="bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-2xl">
                 Prime Program
               </span>
            </div>
            <div className="h-64 overflow-hidden relative">
              <img src={images.nursery} alt="Nursery" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/40" />
            </div>
            <div className="p-12 relative flex-1">
              <span className="micro-label mb-2 block text-slate-400">Annual Excellence</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Nursery</h3>
              
              <div className="mb-12">
                 <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-1">Ages 2yr - 5yr</span>
                 <div className="text-5xl font-black text-white">{fees.nursery}/-</div>
                 <button 
                   onClick={() => setSelectedFee('nursery')}
                   className="mt-8 bg-primary text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-full"
                 >
                   Enrol Now
                 </button>
              </div>

              <ul className="space-y-4">
                {['Moral Foundations', 'Numeracy Basics', 'Character Building'].map((f, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-slate-400 font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_vars(--color-primary)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Primary */}
          <div className="card-premium flex flex-col overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img src={images.primary} alt="Primary" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/40" />
            </div>
            <div className="p-12 relative flex-1">
              <span className="micro-label mb-2 block">Standard Path</span>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">Primary</h3>
              
              <div className="mb-12 flex justify-between items-end">
                 <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-1">Standard 1 - 7</span>
                    <div className="text-4xl font-black text-slate-900">{fees.primary}/-</div>
                 </div>
                 <button 
                   onClick={() => setSelectedFee('primary')}
                   className="text-primary font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform"
                 >
                   Select
                 </button>
              </div>

              <ul className="space-y-4">
                {['NECTA Curriculum', 'Uniform Package', 'Qualified Mentors'].map((f, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-slate-500 font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Gateway Experience */}
        <AnimatePresence>
          {selectedFee && (
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xl" onClick={() => setSelectedFee(null)} />
              
              <div className="bg-white w-full max-w-5xl rounded-[4rem] overflow-hidden shadow-2xl relative z-10 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]">
                 {/* Left Static Panel */}
                 <div className="lg:col-span-5 bg-slate-900 p-16 text-white flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    
                    <div className="relative z-10">
                       <span className="micro-label text-primary mb-6 block">Secure Checkout</span>
                       <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
                         Finalising Your <span className="text-primary italic">Investment.</span>
                       </h3>
                       <p className="text-slate-400 text-sm leading-relaxed mb-12">
                          All tuition fees are processed via our encrypted gateway. 
                          Your payment directly supports high-quality resources and campus maintenance.
                       </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative z-10">
                       <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Tuition Total</span>
                       <div className="text-5xl font-black tracking-tighter">{currentFee}/- <span className="text-xs text-slate-500">Tsh</span></div>
                    </div>
                 </div>

                 {/* Right Interaction Panel */}
                 <div className="lg:col-span-7 p-16 overflow-y-auto">
                    {paid ? (
                      <div className="text-center h-full flex flex-col items-center justify-center">
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8"
                         >
                            <CheckCircle size={48} />
                         </motion.div>
                         <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Payment Success</h4>
                         <p className="text-slate-500 text-sm mb-12">Your transaction has been securely processed. A receipt has been issued automatically.</p>
                         <button 
                           onClick={() => { setPaid(false); setSelectedFee(null); }}
                           className="bg-slate-900 text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all"
                         >
                           Return to Site
                         </button>
                      </div>
                    ) : (
                      <form onSubmit={handlePayment} className="space-y-10">
                        <div className="space-y-8">
                           <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Card Information</h4>
                              <div className="flex gap-2">
                                 <div className="w-8 h-5 bg-slate-100 rounded" />
                                 <div className="w-8 h-5 bg-slate-100 rounded" />
                              </div>
                           </div>
                           
                           <div className="space-y-4">
                              <div className="relative">
                                 <input 
                                   type="text" 
                                   placeholder="CARD NUMBER" 
                                   className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase placeholder:opacity-30 focus:ring-2 focus:ring-primary/20 transition-all"
                                   required
                                 />
                                 <CreditCard className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 <input type="text" placeholder="EXPIRY (MM/YY)" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase placeholder:opacity-30" required />
                                 <input type="text" placeholder="CVC" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase placeholder:opacity-30" required />
                              </div>
                              <input type="text" placeholder="CARDHOLDER NAME" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase placeholder:opacity-30" required />
                           </div>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isProcessing}
                          className="w-full bg-primary text-white py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              <span>Analysing...</span>
                            </>
                          ) : (
                            <>
                              <span>Authorise Payment</span>
                              <ArrowRight size={20} />
                            </>
                          )}
                        </button>
                        
                        <div className="flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-widest text-slate-300">
                           <ShieldCheck size={14} />
                           <span>Secure 256-bit SSL Data Encryption Protocol</span>
                        </div>
                      </form>
                    )}
                 </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Admission Note */}
        <div className="mt-32 border border-slate-100 rounded-[3rem] p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-12 group hover:shadow-2xl transition-all">
          <div className="flex items-center gap-8">
             <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <FileText size={32} />
             </div>
             <div>
                <span className="micro-label text-slate-400 block mb-1">Registration Policy</span>
                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                   Non-refundable Admission Fee: {fees.admission} Tsh
                </h4>
             </div>
          </div>
          <div className="flex items-center gap-3 text-slate-400 italic text-sm">
             <Info size={16} />
             <span>Strictly one-time processing.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
