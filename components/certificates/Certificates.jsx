import React from 'react';
import Image from 'next/image';
import HyperOne from '../customH1/HyperOne';

const Certificates = () => {
  const certificates = [
    { id: 1, name: 'Certificate 1', image: '/imgs/nateg.jpeg' },
    { id: 2, name: 'Certificate 2', image: '/imgs/enactus.jpeg' },
    { id: 3, name: 'Certificate 3', image: '/imgs/stress_management.jpeg' },
  ];

  return (
    <div id="certificates" className="py-16 w-full overflow-hidden">
      <HyperOne value="Certificates" />
      <div className="relative mt-8">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...certificates, ...certificates, ...certificates].map((cert, index) => (
            <div key={`${cert.id}-${index}`} className="inline-flex flex-col items-center mx-4 w-64 flex-shrink-0">
              <div className="relative w-full h-60">
                <Image 
                  src={cert.image} 
                  alt={cert.name} 
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;