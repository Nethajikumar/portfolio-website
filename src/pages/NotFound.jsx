import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import SpotlightCard from '../components/SpotlightCard';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SpotlightCard className="max-w-md w-full p-8 sm:p-12 text-center border-none bg-white/5 backdrop-blur-xl rounded-[2.5rem]">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <AlertCircle className="w-24 h-24 text-primary relative z-10 mx-auto" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl font-black mb-4 text-white italic tracking-tighter"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lost in Space?
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground mb-10 leading-relaxed font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you're looking for has drifted into another dimension. Let's get you back to safety.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all hover:scale-105 h-14 px-8 rounded-2xl font-black tracking-tighter">
              <Home className="w-5 h-5 mr-3" />
              BACK TO MISSION CONTROL
            </Button>
          </Link>
        </motion.div>
      </SpotlightCard>
    </div>
  );
}
