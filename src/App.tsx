import { GraduationCap, BookOpen, UserCheck, Image as ImageIcon, Newspaper, Phone, ClipboardList, Wallet, Clock, Settings } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useSchool } from './context/SchoolContext';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Subjects from './pages/Subjects';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Fees from './pages/Fees';
import Timetable from './pages/Timetable';
import Calendar from './pages/Calendar';
import Admin from './pages/Admin';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
