import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppSidebar from './components/AppSidebar';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  
  // Parallax and opacity transforms for background blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const blob1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.1]);
  const blob2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.05]);

  return (
    <HelmetProvider>
      <Router>
        <Toaster 
          position="bottom-right" 
          toastOptions={{ 
            style: { background: '#0a0a0a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } 
          }} 
        />
      
      <ScrollProgress />
      
      <div className="flex bg-[#070913] min-h-screen relative text-foreground font-sans overflow-x-hidden">
        
        <AppSidebar />

        <div className="flex-1 pt-24 xl:pt-0 xl:ml-72 relative">
          {/* Main ambient background decoration - reactive to scroll */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
             <motion.div 
               style={{ y: blob1Y, opacity: blob1Opacity }}
               className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary blur-[140px]" 
             />
             <motion.div 
               style={{ y: blob2Y, opacity: blob2Opacity }}
               className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary blur-[140px]" 
             />
          </div>
          
          <AnimatedRoutes />
          
          {/* Global Floating Action Button */}
          <Link to="/contact">
            <motion.div 
              className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary to-secondary p-[2px] rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.4)] cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 400 }}
            >
              <div className="flex items-center gap-2 bg-[#070913] px-5 py-3 rounded-full h-full w-full group-hover:bg-transparent transition-colors duration-300">
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="font-bold text-white hidden sm:block">Let's Talk</span>
              </div>
            </motion.div>
          </Link>
          
        </div>
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;