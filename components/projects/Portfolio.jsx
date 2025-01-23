// import HyperOne from '../customH1/HyperOne';
// import Image from 'next/image';
// import ProjectCard from './ProjectCard';

// const Portfolio = ({ projects }) => {
//   return (
//     <div id="projects" className="flex flex-col my-16">
//       <HyperOne value={'Projects'} />
//       <div className="flex justify-center items-center mt-2">
//         <div className="w-full max-w-7xl">
//           {projects?.map((project, index) => (
//             <ProjectCard
//               key={index}
//               {...project}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Portfolio;




import React, { useState, useEffect } from 'react';
import HyperOne from '../customH1/HyperOne';
import ProjectCard from './ProjectCard';

const Portfolio = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 3;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const handlePageChange = (newPage, event) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Scroll to projects section if URL contains "#projects"
    if (window.location.hash === '#projects') {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentPage]);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  return (
    <section id="projects" className="container lg:my-24">
      <div className="flex flex-col items-center">
        <HyperOne value="Projects" />
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="w-full max-w-7xl">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded ${currentPage === page
                ? 'bg-[#0EA5E9] text-white'
                : 'border border-gray-300 dark:border-gray-600'
                }`}
              onClick={(e) => handlePageChange(page, e)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage + 1, e)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;