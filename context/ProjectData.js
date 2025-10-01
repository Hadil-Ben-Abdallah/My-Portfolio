import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs } from 'react-icons/fa';

export const PROJECTS = [
  {
    projectImage: '/imgs/project3.png',
    headline: 'Intranet Dashboard for Axero',
    techStack: [
      { icon: FaHtml5, color: '#E34F26' },
      { icon: FaCss3Alt, color: '#1572B6' },
      { icon: FaJs, color: '#F7DF1E' },
      { icon: FaBootstrap, color: '#7952B3' },
      { icon: FaSass, color: '#CD6799' },
    ],
    description: `A modern, responsive intranet dashboard designed for Axero’s Dev.to challenge, built to streamline internal communication, boost productivity, and unify team resources in one sleek interface.`,
    liveTestLink: 'https://axero-dashboard.onrender.com/',
    gitLink: 'https://github.com/Hadil-Ben-Abdallah/Axero-Dashboard',
  },
  {
    projectImage: '/imgs/project2.png',
    headline: 'Original Fitness Club',
    techStack: [
      { icon: FaHtml5, color: '#E34F26' },
      { icon: FaCss3Alt, color: '#1572B6' },
      { icon: FaJs, color: '#F7DF1E' },
    ],
    description: `A dynamic web page for Original Fitness Club gym marking the start of my journey with JavaScript development.
      Designed an engaging, user-friendly interface and implemented interactive features.`,
    liveTestLink: 'https://originalfit.onrender.com/',
    gitLink: 'https://github.com/Hadil-Ben-Abdallah/Gym',
  },
  {
    projectImage: '/imgs/project1.png',
    headline: 'Communications & Systems',
    techStack: [
      { icon: FaHtml5, color: '#E34F26' },
      { icon: FaCss3Alt, color: '#1572B6' },
      { icon: FaJs, color: '#F7DF1E' },
    ],
    description: `A dynamic web page for the company Communications & Systems, marking the start of my journey with JavaScript development.
      Designed an engaging, user-friendly interface and implemented interactive features.`,
    liveTestLink: 'https://communications-and-systems.onrender.com/',
    gitLink: 'https://github.com/Hadil-Ben-Abdallah/Communications-and-systems',
  },
];
