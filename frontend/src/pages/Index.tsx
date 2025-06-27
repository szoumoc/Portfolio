
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

// API functions
const fetchAbout = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/about/');
  if (!response.ok) {
    throw new Error('Failed to fetch about data');
  }
  return response.json();
};

const fetchProjects = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/projects/');
  if (!response.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return response.json();
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const { data: aboutData } = useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: projectsData } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCVDownload = () => {
    // Replace with your actual CV download link
    window.open('/resume.pdf', '_blank');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onCVDownload={handleCVDownload}
        />
        
        <main className="relative">
          <HeroSection />
          <AboutSection data={aboutData} />
          <ProjectsSection data={projectsData} />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
