import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const SkillsSphere = ({ skills }) => {
  const containerRef = useRef(null);
  const sphereInstance = useRef(null);

  const calculateRadius = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      return 280;
    } else {
      return 180;
    }
  };

  useEffect(() => {
    const initSphere = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const TagCloud = (await import('TagCloud')).default;

        try {
          // Only destroy if it exists and has the destroy method
          if (sphereInstance.current?.destroy) {
            try {
              sphereInstance.current.destroy();
            } catch (error) {
              console.log('Cleanup error:', error);
            }
          }

          // Create image elements as strings
          const texts = skills.map(skill =>
            `<img src="${skill.imageSrc}" alt="${skill.name}" class="skill-icon" />`
          );

          sphereInstance.current = TagCloud('.tagcloud', texts, {
            radius: calculateRadius(),
            maxSpeed: 'fast',
            initSpeed: 'fast',
            keep: true,
            useHTML: true
          });
        } catch (error) {
          console.error('Error initializing TagCloud:', error);
        }
      }
    };

    initSphere();

    // Cleanup function
    return () => {
      if (sphereInstance.current?.destroy) {
        try {
          sphereInstance.current.destroy();
        } catch (error) {
          console.log('Cleanup error:', error);
        }
      }
    };
  }, [skills]);

  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <div ref={containerRef} className="tagcloud"></div>
    </div>
  );
};

export default SkillsSphere;