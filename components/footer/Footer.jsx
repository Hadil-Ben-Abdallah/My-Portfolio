import { AiFillGithub, AiFillLinkedin, AiOutlineCodepen } from 'react-icons/ai';
import { TbBrandLeetcode } from 'react-icons/tb';
import { SiDailydotdev } from 'react-icons/si';
import Anchor from '../link/Anchor';

export default function Footer() {
  const links = [
    {
      id: 1,
      ariaLabel: 'linkedin',
      href: 'https://www.linkedin.com/in/hardikchotaliya/',
      icon: <AiFillLinkedin size={40} />,
    },
    {
      id: 2,
      ariaLabel: 'github',
      href: 'https://github.com/hardikchotaliya',
      icon: <AiFillGithub size={40} />,
    },
    {
      id: 3,
      ariaLabel: 'dailydev',
      href: 'https://app.daily.dev/hardikchotaliya',
      icon: <SiDailydotdev size={40} />,
    },
    {
      id: 4,
      ariaLabel: 'codepen',
      href: 'https://codepen.io/Hardik-Chotaliya',
      icon: <AiOutlineCodepen size={40} />,
    },
    {
      id: 5,
      ariaLabel: 'leetcode',
      href: 'https://leetcode.com/u/hardikchotaliya/',
      icon: <TbBrandLeetcode size={40} />,
    },
  ];
  return (
    <footer className="py-4 z-40">
      <div className="container mx-auto flex justify-center">
        {links.map((link) => (
          <Anchor
            key={link.id}
            className="mx-4"
            ariaLabel={link.ariaLabel}
            href={link.href}
          >
            {link.icon}
          </Anchor>
        ))}
      </div>
      {/* <p className="text-center mt-4 text-lg font-bold">
        © {new Date().getFullYear()} Hardik Chotaliya. @Credit:- Created byHadil Ben Abdallah. All rights reserved.
      </p> */}
      <p className="text-center mt-4 text-lg font-bold">
        © {new Date().getFullYear()} Hardik Chotaliya. All rights reserved.
        Created by&nbsp;
        <a
          href="https://www.linkedin.com/in/hadil-ben-abdallah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Hadil Ben Abdallah
        </a>
        .
      </p>
    </footer>
  );
}
