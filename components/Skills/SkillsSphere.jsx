import React, { useEffect, useRef } from 'react';

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
          // Destroy existing instance if it exists
          if (sphereInstance.current?.destroy) {
            try {
              sphereInstance.current.destroy();
            } catch (error) {
              console.log('Cleanup error:', error);
            }
          }

          // Create image elements as strings with unique z-index
          const texts = skills.map((skill, index) =>
            `<img src="${skill.imageSrc}" alt="${skill.name}" class="skill-icon" style="z-index: ${index + 1};" />`
          );

          sphereInstance.current = TagCloud('.tagcloud', texts, {
            radius: calculateRadius(),
            maxSpeed: 'fast',
            initSpeed: 'fast',
            keep: true,
            useHTML: true,
          });

          // Add event listeners to dynamically adjust z-index on interaction
          const skillIcons = document.querySelectorAll('.skill-icon');
          skillIcons.forEach((icon) => {
            icon.addEventListener('mouseenter', () => {
              icon.style.zIndex = 1000; // Bring hovered icon to the front
            });
            icon.addEventListener('mouseleave', () => {
              const index = Array.from(skillIcons).indexOf(icon);
              icon.style.zIndex = index + 1; // Reset z-index on mouse leave
            });
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