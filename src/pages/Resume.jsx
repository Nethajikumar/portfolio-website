import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import {
  SiReact, SiJavascript, SiTailwindcss, SiSpringboot,
  SiMysql, SiGit, SiPostman, SiVite, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Resume() {
  const skills = [
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'Java', icon: FaJava, color: 'text-[#007396]' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss3, color: 'text-[#1572B6]' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-[#6DB33F]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
    { name: 'Vite', icon: SiVite, color: 'text-[#646CFF]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-transparent p-6 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Experience & Technical Ecosystem | Nethaji K</title>
        <meta name="description" content="Professional journey and technical expertise of Nethaji K. Specialized in React, Java, Spring Boot, and modern full-stack architectures." />
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center pt-8 xl:pt-0">
          <motion.h1
            className="text-3xl sm:text-5xl font-black mb-4 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-[#a855f7] to-secondary text-transparent bg-clip-text">Experience & Skills</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-muted-foreground/80 font-medium px-4">My professional journey and technical expertise</p>
        </div>

        {/* Technical Stack Bento Grid */}
        <section className="px-4 sm:px-0">
          <motion.div
            className="flex items-center gap-4 mb-8 sm:mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Ecosystem</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/40 to-transparent rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px] sm:auto-rows-[160px]">
            {/* Main Skill: React - Large Bento Item */}
            <motion.div 
              className="col-span-2 row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="h-full border-none bg-gradient-to-br from-[#61DAFB]/10 to-transparent flex flex-col items-center justify-center p-6 group">
                <SiReact className="w-16 h-16 sm:w-20 sm:h-20 mb-4 text-[#61DAFB] drop-shadow-[0_0_20px_rgba(97,218,251,0.4)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-xl sm:text-2xl font-black text-white italic tracking-tighter text-center">React Ecosystem</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mt-2">Frontend Core</p>
              </SpotlightCard>
            </motion.div>

            {/* Backend: Spring Boot - Tall Bento Item */}
            <motion.div 
              className="col-span-1 md:col-span-1 row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SpotlightCard className="h-full border-none bg-white/5 flex flex-col items-center justify-center p-4 sm:p-6 group">
                <SiSpringboot className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-[#6DB33F] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="text-center">
                  <span className="block text-base sm:text-lg font-bold text-white uppercase tracking-wider">Spring</span>
                  <span className="block text-[10px] sm:text-xs text-muted-foreground font-medium">Backend</span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Core JavaScript - Highlight Card */}
            <motion.div 
              className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SpotlightCard className="h-full border-none bg-[#F7DF1E]/5 flex items-center justify-center gap-4 p-4 group">
                <SiJavascript className="w-10 h-10 text-[#F7DF1E] drop-shadow-[0_0_10px_#F7DF1E33]" />
                <div className="hidden sm:block">
                  <h4 className="font-black text-white tracking-widest uppercase italic text-sm">ES6+ Logic</h4>
                  <p className="text-[10px] text-muted-foreground font-medium">Modern JavaScript</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Database - Java Duo */}
            <motion.div 
              className="col-span-1 lg:col-span-1 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <SpotlightCard className="h-full border-none bg-white/5 flex flex-col items-center justify-center p-4 group">
                <FaJava className="w-8 h-8 text-[#007396] transition-transform group-hover:rotate-12" />
                <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mt-1">Java</span>
              </SpotlightCard>
            </motion.div>

            {/* Small Tools Grid Integration */}
            {[
              { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
              { icon: SiPostman, name: "Postman", color: "text-[#FF6C37]" },
              { icon: SiGit, name: "Git", color: "text-[#F05032]" },
            ].map((skill, i) => (
              <motion.div 
                key={skill.name}
                className="col-span-1 row-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.05) }}
              >
                <SpotlightCard className="h-full border-none bg-white/5 flex flex-col items-center justify-center p-4 group">
                  <skill.icon className={`w-8 h-8 mb-2 ${skill.color} grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`} />
                  <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/60 group-hover:text-white transition-colors">{skill.name}</span>
                </SpotlightCard>
              </motion.div>
            ))}

            {/* Tailwind & Vite */}
            <motion.div 
              className="col-span-1 lg:col-span-1 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <SpotlightCard className="h-full border-none bg-white/5 flex flex-col items-center justify-center p-4 group">
                <SiTailwindcss className="w-8 h-8 text-[#06B6D4] group-hover:scale-110 transition-transform" />
                <span className="text-[8px] font-black text-muted-foreground/60 uppercase tracking-widest mt-1">Tailwind</span>
              </SpotlightCard>
            </motion.div>
            
            {/* HTML/CSS Duo - Wide Item */}
            <motion.div 
              className="col-span-2 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <SpotlightCard className="h-full border-none bg-gradient-to-r from-secondary/10 to-transparent flex items-center justify-center md:justify-start gap-6 px-10 group overflow-hidden">
                <div className="flex gap-4">
                  <SiHtml5 className="w-10 h-10 text-[#E34F26]" />
                  <SiCss3 className="w-10 h-10 text-[#1572B6]" />
                </div>
                <div className="hidden sm:block">
                  <h4 className="font-black text-white tracking-widest uppercase italic text-sm">Markup & Style</h4>
                  <p className="text-[10px] text-muted-foreground font-medium">Foundational Web</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Final Small Item to balance */}
            <motion.div 
              className="col-span-1 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <SpotlightCard className="h-full border-none bg-white/5 flex flex-col items-center justify-center p-4 group">
                <SiVite className="w-8 h-8 text-[#646CFF] transition-all group-hover:rotate-45" />
                <span className="text-[8px] font-black text-muted-foreground/60 uppercase tracking-widest mt-1">Vite</span>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-0">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SpotlightCard className="h-full border-none p-6 sm:p-8">
              <CardHeader className="p-0 mb-6 sm:mb-8">
                <CardTitle className="text-xl sm:text-2xl font-black text-white italic">Education</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8 sm:space-y-10">
                <div className="border-l-2 border-primary/20 pl-4 sm:pl-6 space-y-2 sm:space-y-3 relative group">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#070913] border-[3px] sm:border-4 border-primary rounded-full -left-[7px] sm:-left-[9px] top-1 group-hover:scale-125 transition-transform" />
                  <h3 className="font-bold text-lg sm:text-xl text-white">Master of Computer Science (MSc)</h3>
                  <p className="text-sm sm:text-base text-primary font-bold tracking-wide">SRM University • 2022 - 2024</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Focused on Software Engineering, specializing in Full Stack Architectures.
                    CGPA : 8.69
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4 sm:pl-6 space-y-2 sm:space-y-3 relative group">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#070913] border-[3px] sm:border-4 border-primary rounded-full -left-[7px] sm:-left-[9px] top-1 group-hover:scale-125 transition-transform" />
                  <h3 className="font-bold text-lg sm:text-xl text-white">Bachelor of Computer Science</h3>
                  <p className="text-sm sm:text-base text-primary font-bold tracking-wide">MGAC College (Vellore) • 2019 - 2022</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    CGPA : 7.49
                  </p>
                </div>
              </CardContent>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SpotlightCard className="h-full border-none p-6 sm:p-8">
              <CardHeader className="p-0 mb-6 sm:mb-8">
                <CardTitle className="text-xl sm:text-2xl font-black text-white italic">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8 sm:space-y-10">
                <div className="border-l-2 border-secondary/20 pl-4 sm:pl-6 space-y-2 sm:space-y-3 relative group">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#070913] border-[3px] sm:border-4 border-secondary rounded-full -left-[7px] sm:-left-[9px] top-1 group-hover:scale-125 transition-transform" />
                  <h3 className="font-bold text-lg sm:text-xl text-white">Portfolio Website</h3>
                  <p className="text-xs sm:text-sm text-secondary font-bold tracking-widest uppercase">Premium UI Experience</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Built with React, Framer Motion, and Tailwind. Features Spotlight effects and high-contrast dark theme.</p>
                </div>
                <div className="border-l-2 border-secondary/20 pl-4 sm:pl-6 space-y-2 sm:space-y-3 relative group opacity-80">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#070913] border-[3px] sm:border-4 border-secondary rounded-full -left-[7px] sm:-left-[9px] top-1 group-hover:scale-125 transition-transform" />
                  <h3 className="font-bold text-lg sm:text-xl text-white">Smart Weather Portal</h3>
                  <p className="text-xs sm:text-sm text-secondary font-bold tracking-widest uppercase">API Integration</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Advanced dashboard with 14-day forecasts and air quality monitoring.</p>
                </div>
              </CardContent>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
          className="flex justify-center pt-4 sm:pt-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/13Ud2CpqsKjl9WXYbN9ZwhLGLq9nAaPiu/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all hover:scale-105 sm:hover:scale-110 h-14 sm:h-16 px-6 sm:px-10 rounded-2xl text-base sm:text-lg font-black tracking-tighter w-full sm:w-auto">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              GET FULL RESUME (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
