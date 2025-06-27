import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onCVDownload: () => void;
}

const Navigation = ({ activeSection, onNavigate, onCVDownload }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="w-full px-[4rem] mx-auto flex items-center justify-between">
          <div></div>

          <div className="flex items-center space-x-4">
            {/* Resume Button */}
            <Button
              onClick={onCVDownload}
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              CV
            </Button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleSidebar}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 text-white hover:text-white/80 transition-colors"
            >
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-screen bg-black backdrop-blur-lg border-l border-white/20 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Navigation Items */}
          <div className="px-10 py-20 flex flex-col justify-center items-center h-full">
            <div className="space-y-12">
              {navItems.map((item, index) => (
                <div key={item.id} className="text-center">
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`text-4xl sm:text-5xl font-light transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-white/70 hover:text-white hover:translate-x-2'
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Separator dash */}
                  {index < navItems.length - 1 && (
                    <div className="mt-8 w-16 h-px mx-auto bg-white/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
