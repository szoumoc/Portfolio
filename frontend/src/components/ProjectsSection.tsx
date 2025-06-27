import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import React from "react";

interface Project {
  title: string;
  description: string;
  tech_stack: string;
  github_link: string;
  live_demo: string;
  created_at: string;
  image?: string; // Added image field
  image_alt?: string; // Added alt text for accessibility
}

interface ProjectsSectionProps {
  data?: Project[];
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const defaultProjects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.",
      tech_stack: "React, Node.js, PostgreSQL, Stripe",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-01-15",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      image_alt: "E-commerce platform interface"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech_stack: "Vue.js, Django, WebSocket, Redis",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-02-20",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      image_alt: "Task management dashboard"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and historical data with beautiful data visualizations.",
      tech_stack: "React, D3.js, Express, MongoDB",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-03-10",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center",
      image_alt: "Weather dashboard with charts"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with rooms and private messaging.",
      tech_stack: "Socket.io, React, Node.js",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-04-05",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop&crop=center",
      image_alt: "Chat application interface"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and responsive design.",
      tech_stack: "React, Tailwind, Framer Motion",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-05-12",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center",
      image_alt: "Modern portfolio website design"
    }
  ];

  const projects = data || defaultProjects;

  // Create project features with dynamic grid layout
  const projectFeatures = projects.map((project, index) => {
    // Define grid layouts similar to the original FeaturesSectionDemo
    const getClassName = (index: number) => {
      switch (index) {
        case 0:
          return "col-span-1 lg:col-span-4 border-b lg:border-r border-white/10";
        case 1:
          return "border-b col-span-1 lg:col-span-2 border-white/10";
        case 2:
          return "col-span-1 lg:col-span-3 lg:border-r border-white/10";
        case 3:
          return "col-span-1 lg:col-span-3 border-b lg:border-none border-white/10";
        default:
          return "col-span-1 lg:col-span-2 border-white/10";
      }
    };

    return {
      title: project.title,
      description: project.description,
      project: project,
      skeleton: <ProjectSkeleton project={project} index={index} />,
      className: getClassName(index),
    };
  });

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-[10rem] mb-6 text-white font-inter">
            Featured Projects
          </h2>
          <div className="py-[1rem]"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-white/10">
            {projectFeatures.map((feature) => (
              <ProjectCard key={feature.title} className={feature.className}>
                <ProjectTitle>{feature.title}</ProjectTitle>
                <ProjectDescription>{feature.description}</ProjectDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const ProjectTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-inter">
      {children}
    </p>
  );
};

const ProjectDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-gray-300 text-sm line-clamp-3 font-inter">
      {children}
    </p>
  );
};

const ProjectSkeleton = ({ project, index }: { project: Project; index: number }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="relative flex py-8 px-2 gap-4 h-full">
      <div className="w-full p-1 mx-auto">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          {/* Project Image */}
          <div className={`w-full bg-black flex items-center justify-center border border-white/10 relative overflow-hidden ${
            index === 0 ? 'h-48' : index === 2 ? 'h-64' : 'h-40'
          }`}>
            {project.image && !imageError ? (
              <>
                <img
                  src={project.image}
                  alt={project.image_alt || `${project.title} screenshot`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-gray-500 text-center">
                <div className="text-3xl mb-2">💻</div>
                <p className="text-sm font-inter">{project.title}</p>
              </div>
            )}
            
            {/* Hover overlay */}
            <div
              onClick={() => window.open(project.github_link, '_blank')}
              className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
            >

              <div className="text-center">
                <p className="text-white font-medium mb-2">View Project</p>
                <Github className="w-6 h-6 text-white mx-auto" />
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.split(',').slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 font-inter"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={() => window.open(project.github_link, '_blank')}
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 font-inter"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            {/* {project.live_demo && (
              <Button
                onClick={() => window.open(project.live_demo, '_blank')}
                variant="outline"
                size="sm"
                className="flex-1 bg-blue-500/20 border-blue-500/30 text-blue-300 hover:bg-blue-500/30 font-inter"
              >
                Demo
              </Button>
            )} */}
          </div>

          {/* Creation Date */}
          <p className="text-xs text-gray-400 mt-auto font-inter">
            Created: {new Date(project.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export default ProjectsSection;