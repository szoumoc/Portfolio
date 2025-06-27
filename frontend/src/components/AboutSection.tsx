import React, { useState, useEffect } from 'react';
import { AppleCardsCarouselDemo } from './Card';
import { AboutCardSkeleton } from './AboutCardSkeleton';

interface AboutData {
  heading: string;
  body: string;
  image: string | null;
}

interface AboutSectionProps {
  apiUrl?: string;
}

const AboutSection = ({ apiUrl = 'http://localhost:8000/api/about/' }: AboutSectionProps) => {
  const [aboutData, setAboutData] = useState<AboutData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch about data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && Array.isArray(data) && data.length > 0) {
          setAboutData(data);
        } else {
          setError('No about data available');
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch about data');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, [apiUrl]);

  if (loading) {
    return (
      <section id="about" className="py-20 px-4 bg-black">
        <div className="w-full mx-auto">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-white text-center font-sans mb-10">
            About Me
          </h2>
          <AboutCardSkeleton />
        </div>
      </section>
    );
  }

  if (error || aboutData.length === 0) {
    return (
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <span className="text-white">Unable to load about section</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="w-full mx-auto">
        <AppleCardsCarouselDemo aboutData={aboutData} />
      </div>
    </section>
  );
};

export default AboutSection;