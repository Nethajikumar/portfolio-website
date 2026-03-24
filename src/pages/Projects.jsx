import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X as FiX
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../components/SpotlightCard";
import { Helmet } from 'react-helmet-async';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      title: "Smart Weather Dashboard",
      image: "/weather-dashboard.png",
      description: "An advanced, real-time weather intelligence platform featuring 7-day forecasts, air quality monitoring, and dynamic celestial visualizations.",
      detailedDescription: "A comprehensive weather intelligence suite designed for precision and visual clarity. It leverages high-performance API integrations to deliver hyper-local data with a focus on premium dashboard aesthetics.",
      technologies: ["React", "API Integration", "Framer Motion", "Tailwind CSS"],
      features: [
        "Real-time Air Quality & UV Index monitoring",
        "Dynamic Sunrise/Sunset visualizations",
        "14-day extended outlook with interactive charts",
        "Location-aware weather intelligence"
      ],
      liveUrl: "https://smart-weather-dashboard-lovat.vercel.app/"
    },
    {
      id: 1,
      title: "Make-Deal",
      image: "/deal.jpg",
      description: "A modern role-based onboarding system inspired by platforms like Upwork and LinkedIn.",
      detailedDescription: "A full-scale onboarding and marketplace platform facilitating seamless interaction between buyers and sellers. Features robust role-based access control and modern UI patterns for high-conversion user flows.",
      technologies: ["React js", "Vite", "Javascript"],
      features: [
        "Custom role-based dashboard system",
        "Secure onboarding workflow",
        "Interactive profile management",
        "Real-time form validation"
      ],
      liveUrl: "https://make-deal.vercel.app/",
    },
    {
      id: 3,
      title: "Interview-Prep",
      image: "/Interview.png",
      description: "PrepDash is a structured frontend interview preparation platform designed to help developers revise and master key concepts through active recall.",
      detailedDescription: "PrepDash is a structured frontend interview preparation platform designed to help developers revise and master key concepts through active recall. It includes categorized questions, progress tracking, and an intuitive UI for efficient learning and revision.",

      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS"
      ],

      features: [
        "📚 140+ curated frontend interview questions",
        "🧩 Category-based modules (HTML, CSS, JavaScript, React, Browser APIs, HR)",
        "🔍 Real-time search functionality",
        "📊 Progress tracking (Mastered questions)",
        "⭐ Highlighted most frequently asked questions"
      ],

      liveUrl: "https://interview-prep-ten-nu.vercel.app/",
    },
    {
      id: 3,
      title: "Modern Todo List",
      image: "/todo-new.png",
      description: "A high-performance Todo application with persistent state and fluid micro-interactions.",
      detailedDescription: "Engineered for speed and simplicity, this Todo application utilizes advanced DOM manipulation and localStorage persistence to provide a seamless productivity experience.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      features: [
        "LocalStorage data persistence",
        "Drag-and-drop task prioritization",
        "Instant search and filtering",
        "Automatic light/dark mode syncing"
      ],
      liveUrl: "https://nethajikumar.github.io/todo-app/"
    },
    {
      id: 4,
      title: "Spotify-Clone",
      image: "/spotify.jpg",
      description: "A pixel-perfect UI recreation of the Spotify web player with interactive audio controls.",
      detailedDescription: "A deep dive into complex UI components and state management, recreating the sophisticated layout and user experience of the world's leading music streaming platform.",
      technologies: ["Html", "Css", "Javascript"],
      features: [
        "Dynamic playlist rendering",
        "Interactive media playback controls",
        "Sidebar navigation system",
        "Responsive album art displays"
      ],
      liveUrl: "https://nethajikumar.github.io/spotify-clone/",
    },
    {
      id: 5,
      title: "Springboot-API-Test",
      image: "/spring.jpg",
      description: "A robust Java-based RESTful API demonstrating industrial-standard CRUD patterns.",
      detailedDescription: "A backend-focused project showcasing the power of Spring Boot for scalable API development. Includes comprehensive endpoint testing and clean architecture principles.",
      technologies: ["Spring Boot", "H2 Database", "REST APIs", "Maven"],
      features: [
        "Full CRUD lifecycle implementation",
        "Automated API documentation",
        "In-memory database integration",
        "Strict type-safe data handling"
      ],
      liveUrl: "https://github.com/Nethajikumar/springboot-Api-test",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-transparent px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Nethaji - Developer</title>
        <meta name="description" content="Discover my latest projects, from real-time weather dashboards to scalable full-stack applications. See the technology behind the craft." />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 pt-8 xl:pt-0">
          <motion.h1
            className="text-4xl font-extrabold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Portfolio Showreel</span>
          </motion.h1>
          <motion.p
            className="text-base text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A curated selection of my most impactful digital creations
          </motion.p>
        </div>

        {/* Main Featured Project */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <SpotlightCard className="border-none overflow-hidden rounded-3xl group/card">
                <div className="flex flex-col md:grid md:grid-cols-2">
                  <div
                    className="aspect-video md:aspect-auto md:h-[500px] lg:h-[450px] w-full overflow-hidden relative cursor-pointer"
                    onClick={() => setSelectedProject(currentProject)}
                  >
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <Button variant="outline" className="rounded-full border-white/20 bg-white/10 text-white backdrop-blur-md">View Case Study</Button>
                    </div>
                  </div>

                  <CardContent className="space-y-4 sm:space-y-6 p-6 sm:p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedProject(currentProject)}
                    >
                      <CardTitle className="text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-primary via-[#a855f7] to-secondary text-transparent bg-clip-text mb-2 tracking-tighter">
                        {currentProject.title}
                      </CardTitle>
                    </motion.div>

                    <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {currentProject.detailedDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 text-primary border border-white/10 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-6 mt-auto">
                      <Button onClick={() => setSelectedProject(currentProject)} className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all flex-1 h-12 rounded-xl">
                        Learn More
                      </Button>
                      {currentProject.liveUrl && (
                        <Button variant="outline" asChild className="border-white/10 hover:bg-white/5 px-6 h-12 rounded-xl">
                          <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <Button size="icon" variant="outline" onClick={prevProject} className="w-12 h-12 rounded-full border-white/10 hover:bg-primary/20 hover:text-primary transition-all">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex gap-3">
            {projects.map((project) => (
              <motion.span
                key={project.id}
                onClick={() => setCurrentIndex(projects.indexOf(project))}
                className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${projects.indexOf(project) === currentIndex ? "bg-primary w-12" : "bg-white/10 w-2 hover:bg-white/30"
                  }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
          <Button size="icon" variant="outline" onClick={nextProject} className="w-12 h-12 rounded-full border-white/10 hover:bg-primary/20 hover:text-primary transition-all">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Mini Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
            >
              <SpotlightCard
                className={`rounded-3xl overflow-hidden h-full flex flex-col group cursor-pointer transition-all duration-500 ${projects.indexOf(project) === currentIndex
                  ? "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                  : "border-white/5 hover:border-white/20"
                  }`}
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] to-transparent opacity-40" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                    <span className="text-[10px] text-white font-bold">{project.technologies[0]}</span>
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                    <span className="text-xs font-black uppercase text-primary tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#070913] border border-white/10 rounded-[2.5rem] shadow-2xl sidebar-hide"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white z-10 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-[300px] md:h-full relative overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent" />
                </div>
                <div className="p-8 sm:p-12 space-y-8 flex flex-col">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text tracking-tighter mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Key Highights</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map(feature => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-auto flex flex-col sm:flex-row gap-4">
                    {selectedProject.liveUrl && (
                      <Button asChild className="bg-primary hover:bg-primary/90 text-white h-14 rounded-2xl flex-1 text-lg font-black tracking-tighter">
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          VISIT LIVE PROJECT <ExternalLink className="w-5 h-5 ml-2" />
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button variant="outline" asChild className="border-white/10 h-14 rounded-2xl flex-1 text-lg font-black tracking-tighter">
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          SOURCE CODE
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
