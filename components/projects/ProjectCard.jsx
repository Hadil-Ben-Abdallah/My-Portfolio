// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from '@/hooks/useInView';
// import { FaGithub } from 'react-icons/fa';
// import { BiLinkExternal } from 'react-icons/bi';

// const ProjectCard = ({ projectImage, headline, techStack, description, liveTestLink, gitLink, index }) => {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef);
//   const isEven = index % 2 === 0;

//   const variants = {
//     hidden: {
//       opacity: 0,
//       x: isEven ? 300 : -300
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeInOut'
//       }
//     }
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       variants={variants}
//       className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} w-full mb-24 items-center justify-center gap-8 lg:gap-16 px-4`}
//     >
//       <div className="w-full lg:w-1/2 max-w-[500px] z-10">
//         <img
//           src={projectImage}
//           alt={headline}
//         />
//       </div>

//       <div className="w-full lg:w-1/2 max-w-[500px] z-10">
//         <h3 className="text-3xl font-bold text-sky-600 mb-2">{headline}</h3>
//         <div className="flex gap-4 mb-4">
//           {techStack.map((tech, index) => {
//             const Icon = tech.icon;
//             return (
//               <Icon
//                 key={index}
//                 className="text-2xl"
//                 style={{ color: tech.color }}
//               />
//             );
//           })}
//         </div>
//         <p className="text-gray-600 dark:text-gray-300 text-base mb-8">{description}</p>

//         <div className="flex gap-4">
//           {liveTestLink && (
//             <a
//               href={liveTestLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-[100px] py-4 bg-primary text-white rounded-lg text-lg"
//             >
//               <BiLinkExternal className="mr-2" /> Demo
//             </a>
//           )}
//           {gitLink && (
//             <a
//               href={gitLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-[130px] py-4 border border-primary dark:text-white text-gray-800 rounded-lg text-lg"
//             >
//               <FaGithub className="mr-2" /> GitHub
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;




import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import Image from "next/image";

const ProjectCard = ({ projectImage, headline, techStack, description, liveTestLink, gitLink, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} w-full mb-24 items-center justify-center gap-8 lg:gap-16 px-4`}
    >
      <div className="w-full lg:w-1/2 max-w-[500px] z-10">
        <Image
          src={projectImage}
          alt={headline}
          width={500}
          height={300}
        />
      </div>

      <div className="w-full lg:w-1/2 max-w-[500px] z-10">
        <h3 className="text-3xl font-bold text-sky-600 mb-2">{headline}</h3>
        <div className="flex gap-4 mb-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Icon
                key={index}
                className="text-2xl"
                style={{ color: tech.color }}
              />
            );
          })}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-8">{description}</p>

        <div className="flex gap-4">
          {liveTestLink && (
            <a
              href={liveTestLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[100px] py-4 bg-primary text-white rounded-lg text-lg"
            >
              <BiLinkExternal className="mr-2" /> Demo
            </a>
          )}
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[130px] py-4 border border-primary dark:text-white text-gray-800 rounded-lg text-lg"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;