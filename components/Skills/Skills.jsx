import { useState } from 'react';
import dynamic from 'next/dynamic';
import HyperOne from '../customH1/HyperOne';
import SkillCard from './skillsCard/SkillsCard';

// Import SkillsSphere dynamically with no SSR
const SkillsSphere = dynamic(() => import('./SkillsSphere'), {
  ssr: false
});

const Skills = () => {
  const [showSphere, setShowSphere] = useState(false);

  const skillsData = [
    { name: 'HTML5', imageSrc: '/svg/skills/html.svg' },
    { name: 'CSS', imageSrc: '/svg/skills/css.svg' },
    { name: 'Java Script', imageSrc: '/svg/skills/javascript.svg' },
    { name: 'Bootstrap', imageSrc: '/svg/skills/bootstrap.svg' },
    { name: 'Bootstrap', imageSrc: '/svg/skills/tailwind.svg' },
    { name: 'React', imageSrc: '/svg/skills/react.svg' },
    { name: 'Next.js', imageSrc: '/svg/skills/nextjs.svg' },
    { name: 'Python', imageSrc: '/svg/skills/python.svg' },
    { name: 'Django', imageSrc: '/svg/skills/django.svg' },
    { name: 'Graphql', imageSrc: '/svg/skills/graphql.svg' },
    { name: 'Express', imageSrc: '/svg/skills/express.svg' },
    { name: 'Node', imageSrc: '/svg/skills/nodejs.svg' },
    { name: 'MuSQL', imageSrc: '/svg/skills/mysql.svg' },
    { name: 'Postgresql', imageSrc: '/svg/skills/postgresql.svg' },
    { name: 'Mongodb', imageSrc: '/svg/skills/mongo.svg' },
    { name: 'Git', imageSrc: '/svg/skills/git.svg' },
    { name: 'GitHub', imageSrc: '/svg/skills/github.svg' },
    { name: 'GitLab', imageSrc: '/svg/skills/gitlab.svg' },
    { name: 'GitLab', imageSrc: '/svg/skills/markdown.svg' },
    { name: 'VSCode', imageSrc: '/svg/skills/vscode.svg' },
    { name: 'Notion', imageSrc: '/svg/skills/notion.svg' },
    { name: 'Notion', imageSrc: '/svg/skills/slack.svg' }
  ];

  const skillstext = `These are the essential tools, libraries, and frameworks that
          constitute my current tech stack, enabling me to develop robust and
          innovative applications.`;

  return (
    <div id="skills" className="container lg:my-24">
      <div className="flex flex-col items-center">
        <HyperOne value="My Skills" />
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {skillstext}
        </p>
        <button
          onClick={() => setShowSphere(!showSphere)}
          className="bg-primary text-white font-bold py-2 px-4 mt-4 mb-8"
        >
          {showSphere ? 'Show Grid View' : 'Show 3D View'}
        </button>
      </div>

      {showSphere ? (
        <SkillsSphere skills={skillsData} />
      ) : (
        <div className="skillCard mt-12 flex justify-center flex-wrap lg:mx-32 z-1 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              name={skill.name}
              imageSrc={skill.imageSrc}
              delay={index * 100}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;