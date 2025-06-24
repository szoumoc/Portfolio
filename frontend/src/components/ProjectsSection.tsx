
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech_stack: string;
  github_link: string;
  live_demo: string;
  created_at: string;
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
      created_at: "2024-01-15"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech_stack: "Vue.js, Django, WebSocket, Redis",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-02-20"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and historical data with beautiful data visualizations.",
      tech_stack: "React, D3.js, Express, MongoDB",
      github_link: "https://github.com",
      live_demo: "https://demo.com",
      created_at: "2024-03-10"
    }
  ];

  const projects = data || defaultProjects;

  return (
    <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.split(',').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(project.github_link, '_blank')}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  onClick={() => window.open(project.live_demo, '_blank')}
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
