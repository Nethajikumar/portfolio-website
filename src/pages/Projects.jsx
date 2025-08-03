import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Weather-App",
      image: "/weather.jpg",
      description: "A React-based responsive weather application using the OpenWeatherMap API. Displays real-time weather info with a modern UI, dark mode, and error handling.",
      technologies: ["React","Js", "API integration"],
      liveUrl: "https://nethajikumar.github.io/weatherapp/",
    },
    {
      id: 2,
      title: "Spotify-Clone",
      image: "/spotify.jpg",
      description: "Developed a responsive Spotify clone that mimics the core UI and functionality of the original music streaming platform. ",
      technologies: ["Html", "Css", "Javascript"],
      liveUrl: "https://nethajikumar.github.io/spotify-clone/",
      
    },
    {
      id: 3,
      title: "Springboot-API-Test",
      image: "/spring.jpg",
      description: "This is a simple Spring Boot RESTful API project that demonstrates basic CRUD (Create, Read, Update, Delete) operations using:",
      technologies: ["Spring Boot", "In-Memory H2 Database", "REST APIs (GET, POST, PUT, DELETE)"],
      liveUrl: "https://github.com/Nethajikumar/springboot-Api-test",
     
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "/portfolio.jpg",
      description: "Personal portfolio website, It showcases my profile, resume, projects, and contact information with a clean, responsive, and user-friendly design.",
      technologies: ["Html", "Css", "Javascript"],
      liveUrl: "https://nethajikumar.github.io/portfolio/",
    },
    {
      id: 5,
      title: "Todo-List",
      image: "/spring.jpg",
      description: "A Todo list, Designed and developed a To-Do List web application using Spring Boot. The app allows users to add, update, delete, and view tasks in a structured and user-friendly interface.",
      technologies: ["Springboot", "Java", "H2 Database","Postman "],
      liveUrl: "https://github.com/Nethajikumar/springboot-Api-test",
    }
    /*,
    {
      id: 6,
      title: "Chat Application",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4f0a1673e?w=500&h=300&fit=crop",
      description: "Real-time chat app with WebSocket and notifications.",
      technologies: ["React", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    } */
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-base text-muted-foreground">Explore some of my work</p>
        </div>

        {/* Main Project */}
        <div className="mb-8">
          <Card>
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{currentProject.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">{currentProject.description}</p>
              <div className="flex flex-wrap gap-1">
                {currentProject.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-accent/30 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <Button size="sm" asChild>
                  <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <Button size="icon" variant="outline" onClick={prevProject}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex gap-1">
            {projects.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <Button size="icon" variant="outline" onClick={nextProject}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      
        {/* Mini Cards */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
  {projects.map((project, index) => (
    <Card
      key={project.id}
      onClick={() => setCurrentIndex(index)}
      className={`cursor-pointer rounded-md transition shadow-sm ${
        index === currentIndex
          ? 'ring-2 ring-green-500'
          : 'ring-1 ring-gray-200'
      }`}
    >
      <div className="h-32 overflow-hidden rounded-t-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold">{project.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 underline mt-2 hover:text-blue-800"
          >
            Live Preview
          </a>
        )}
      </CardContent>
    </Card>
  ))}
</div>


      </div>
    </div>
  );
}
