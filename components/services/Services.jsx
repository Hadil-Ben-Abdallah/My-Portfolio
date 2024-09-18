import ServicesCard from './ServiceCard';
import HyperOne from '../customH1/HyperOne';

const cards = [
  {
    src: '/svg/frontend.svg',
    alt: 'Front-end Development',
    title: 'Front-end Development',
    description: 'Build user interfaces for websites and applications, ensuring a seamless user experience.',
  },
  {
    src: '/svg/backend.svg',
    alt: 'Back-end Development',
    title: 'Back-end Development',
    description:
      'Develop server-side logic to power applications, ensuring scalability and smooth data processing.',
  },
  {
    src: '/svg/api.svg',
    alt: 'API',
    title: 'API',
    description:
      "Create APIs to enable efficient communication between systems, ensuring smooth data exchange.",
  },
  {
    src: '/svg/performance.svg',
    alt: 'Performance Optimization',
    title: 'Performance Optimize',
    description:
      'Optimize websites and applications to deliver fast and efficient performance.',
  },
];

const Services = () => {
  const breif = `As a full-stack software engineer, I specialize in building robust, responsive web applications from front-end interfaces to back-end systems and APIs. With expertise in modern web frameworks, clean code practices, and a focus on performance and scalability, I deliver seamless user experiences while ensuring reliable, high-quality functionality on both the client and server side.`;
  return (
    <div id="services">
      <HyperOne value={'Services'} />
      <div className="my-5">
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {breif}
        </p>
      </div>
      <div className="my-12 grid lg:grid-cols-4 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            className={`logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
