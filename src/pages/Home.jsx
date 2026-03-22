import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import WaveDivider from '../components/WaveDivider';
import SpotlightCard from '../components/SpotlightCard';

export default function Home() {
    // Mouse movement tracking for interactive glow
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the glow to follow the mouse
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Update relative mouse position
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div 
            className="min-h-screen bg-transparent p-6 flex items-center justify-center overflow-hidden w-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* 📍 Interactive Subtle Glow Follower */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-[-1]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
            <Helmet>
                <title>Nethaji - Developer</title>
                <meta name="description" content="Portfolio of Nethaji K, a premium web developer specializing in React, Spring Boot, and high-end UI/UX experiences." />
            </Helmet>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center w-full min-h-[calc(100vh-120px)]">
        
        {/* Hero Section Container */}
        <section className="flex flex-col items-center text-center w-full relative py-8 sm:py-12">
          
          {/* 1. Avatar Image */}
          <motion.div
            className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-primary via-[#a855f7] to-secondary p-1 shadow-[0_0_40px_hsl(var(--primary)/0.25)] mb-6 sm:mb-10 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <img 
              src="/avatar.png" 
              alt="3D Developer Avatar" 
              className="w-full h-full rounded-full object-cover bg-[#070913] pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* 2. Name */}
          <div className="relative overflow-hidden mb-4 sm:mb-6 text-center w-full">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-gradient-to-r from-primary via-[#a855f7] to-secondary text-transparent bg-clip-text inline-block px-2">
                NETHAJI K
              </span>
            </motion.h1>
          </div>

          {/* 3. Typewriter Animation */}
          <motion.div 
            className="flex justify-center mb-8 sm:mb-12 px-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground/80 lowercase tracking-widest italic text-center min-h-[1.5em] flex items-center justify-center">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-90">
                <Typewriter
                  words={['Full Stack Developer', 'Premium UI Architect', 'Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </motion.div>

          {/* 4. Buttons Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-sm px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all hover:scale-105 h-12 sm:h-14 px-8 rounded-xl group w-full sm:w-auto">
              <Link to="/projects" className="flex items-center justify-center gap-2 font-bold italic tracking-tight text-base">
                EXPLORE WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="border-white/10 text-foreground hover:bg-white/5 transition-all hover:scale-105 h-12 sm:h-14 px-8 rounded-xl font-bold bg-white/5 w-full sm:w-auto text-base tracking-tight italic">
              <Link to="/contact">LET'S CONNECT</Link>
            </Button>
          </motion.div>
        </section>

                <div className="w-full px-4 sm:px-0">
                    <WaveDivider className="opacity-40" />
                </div>

                {/* Feature Cards with Spotlight */}
                <motion.section
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pb-16 w-full px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {[
                        { icon: Code, title: "Clean Code", desc: "Crafting scalable, efficient, and well-documented architectures.", color: "text-primary" },
                        { icon: Palette, title: "Modern UI/UX", desc: "Design-driven development focused on premium aesthetics.", color: "text-secondary" },
                        { icon: Zap, title: "High Speed", desc: "Performance-optimized apps for the fastest user experiences.", color: "text-primary" }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                        >
                            <SpotlightCard className="text-center p-6 sm:p-8 border-none h-full bg-[#070913]/20 shadow-none hover:bg-white/5 transition-colors">
                                <feature.icon className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 ${feature.color} drop-shadow-[0_0_10px_currentColor]`} />
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white tracking-tight">{feature.title}</h3>
                                <p className="text-muted-foreground/80 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.section>
            </div>
        </motion.div>
    );
}
