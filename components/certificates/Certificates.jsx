import React from 'react';
import Image from 'next/image';
import HyperOne from '../customH1/HyperOne';

const Certificates = () => {
  const certificates = [
    { id: 1, name: 'Certificate 1', image: '/imgs/nateg.jpeg' },
    { id: 2, name: 'Certificate 2', image: '/imgs/enactus.jpeg' },
    { id: 3, name: 'Certificate 3', image: '/imgs/stress_management.jpeg' },
    { id: 4, name: 'Certificate 4', image: '/imgs/SixSigmaYellowBelt.jpg' },
    { id: 5, name: 'Certificate 5', image: '/imgs/50_days_badge.png' },
    { id: 6, name: 'Certificate 6', image: '/imgs/ScrumforOpsandDevOpsFundamentals.jpg' },
    { id: 7, name: 'Certificate 7', image: '/imgs/NegotiationAssociate.jpg' },
    { id: 8, name: 'Certificate 8', image: '/imgs/topreaderbadge.png' },
    { id: 9, name: 'Certificate 9', image: '/imgs/100_days_badge.png' },
    { id: 10, name: 'Certificate 10', image: '/imgs/novembertopreader.png' },
  ];

  return (
    <div id="certificates" className="py-16 w-full overflow-hidden">
      <HyperOne value="Certificates" />
      <div className="relative mt-8 overflow-hidden">
        {/* Applying different animation speeds based on screen size */}
        <ul className="flex gap-8 whitespace-nowrap scroll-sm-lg md:scroll-sm-md sm:scroll-sm-sm">
  {[...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates, ...certificates].map((cert, index) => (
    <li key={`${cert.id}-${index}`} className="inline-flex flex-col items-center mx-4 w-48 sm:w-56 md:w-64 flex-shrink-0">
      <div className="relative w-full h-32 sm:h-36 md:h-60">
        <Image
          src={cert.image}
          alt={cert.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default Certificates;