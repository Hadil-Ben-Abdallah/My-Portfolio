import HyperOne from '../customH1/HyperOne';
import SkillCard from './skillsCard/SkillsCard';
const Skills = () => {
  const skillsData = [
    { name: 'HTML5', imageSrc: '/svg/skills/html.svg' },
    { name: 'CSS', imageSrc: '/svg/skills/css.svg' },
    { name: 'Java Script', imageSrc: '/svg/skills/javascript.svg' },
    { name: 'Bootstrap', imageSrc: '/svg/skills/bootstrap.svg' },
    { name: 'Shadcn', imageSrc: '/svg/skills/shadcn.svg' },
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
  ];
  const skillstext = `These are the essential tools, libraries, and frameworks that
          constitute my current tech stack, enabling me to develop robust and
          innovative applications`;
  return (
    <div id="skills" className="container lg:my-24">
      <div className="flex flex-col items-center">
        <HyperOne value="My Skills" />
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {skillstext}
        </p>
      </div>
      <div className="skillCard mt-12 flex justify-center flex-wrap lg:mx-32 z-1 gap-8 ">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            imageSrc={skill.imageSrc}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
