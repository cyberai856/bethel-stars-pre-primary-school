import { useState, FormEvent } from 'react';
import { Lock, FileText, Plus, Trash2, CheckCircle, AlertCircle, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Record {
  id: string;
  date: string;
  class: string;
  subject: string;
  topic: string;
  activities: string;
}

export default function Admin() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  // App state
  const [records, setRecords] = useState<Record[]>([]);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    class: '',
    subject: '',
    topic: '',
    activities: '',
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (pin === '2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect Security PIN');
    }
  };

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    const newRecord = { ...formData, id: Math.random().toString(36).substr(2, 9) };
    setRecords([newRecord, ...records]);
    setFormData({ ...formData, topic: '', activities: '' });
  };

  const deleteRecord = (id: string) => {
    setRecords(records.filter(r => r.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md text-center"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Portal Access</h1>
          <p className="text-slate-500 mb-8 text-sm uppercase tracking-widest font-bold">Teachers & Administration Only</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                placeholder="Enter PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-slate-100 border-none focus:ring-4 focus:ring-primary/20 text-center text-2xl tracking-[0.5em] font-bold"
                required
              />
            </div>
            {error && (
              <div className="text-primary text-xs font-bold flex items-center justify-center space-x-1 animate-pulse">
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
            >
              Sign In
            </button>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest pt-4">Unauthorized access is strictly prohibited</p>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Admin Portal</h1>
            <p className="text-slate-400 text-sm tracking-widest uppercase">Teacher Daily Activity Log</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-bold uppercase tracking-widest transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl sticky top-24 border border-slate-100">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Plus size={20} className="text-primary" />
                <span>Log Activity</span>
              </h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Class</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Standard 1">Standard 1</option>
                    <option value="Standard 2">Standard 2</option>
                    <option value="Standard 3">Standard 3</option>
                    <option value="Standard 4">Standard 4</option>
                    <option value="Standard 5">Standard 5</option>
                    <option value="Standard 6">Standard 6</option>
                    <option value="Standard 7">Standard 7</option>
                    <option value="Nursery">Nursery</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mathematics"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Curriculum Topic</label>
                  <input
                    type="text"
                    required
                    placeholder="Topic taught"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Extra Activities</label>
                  <textarea
                    rows={3}
                    placeholder="Other activities done..."
                    value={formData.activities}
                    onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all"
                >
                  <Save size={18} />
                  <span>Pin to Record @2024</span>
                </button>
              </form>
            </div>
          </div>

          {/* Activity Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold">Activity Logs</h3>
                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Total Records: {records.length}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Date</th>
                      <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Class/Sub</th>
                      <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Curriculum Topic</th>
                      <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <AnimatePresence initial={false}>
                      {records.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-8 py-12 text-center text-slate-400 italic">No records pinned yet.</td>
                        </tr>
                      ) : (
                        records.map((record) => (
                          <motion.tr
                            key={record.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <td className="px-8 py-6 text-sm font-medium text-slate-900">{record.date}</td>
                            <td className="px-4 py-6">
                              <div className="text-sm font-bold text-slate-900">{record.class}</div>
                              <div className="text-xs text-slate-500">{record.subject}</div>
                            </td>
                            <td className="px-4 py-6">
                              <div className="text-sm text-slate-700">{record.topic}</div>
                              {record.activities && (
                                <div className="text-[10px] text-primary font-bold mt-1 uppercase tracking-widest">+ Extra Activities</div>
                              )}
                            </td>
                            <td className="px-4 py-6 text-right">
                              <button
                                onClick={() => deleteRecord(record.id)}
                                className="p-2 text-slate-400 hover:text-primary transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
