import React from 'react';
import {
  AiOutlineCodepen,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";
import styles from './social.module.css';
import Anchor from '../link/Anchor';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      ariaLabel: 'linkedin',
      href: 'https://www.linkedin.com/in/hadil-ben-abdallah/',
      icon: AiFillLinkedin,
    },
    {
      id: 2,
      ariaLabel: 'github',
      href: 'https://github.com/Hadil-Ben-Abdallah',
      icon: AiFillGithub,
    },
    {
      id: 3,
      ariaLabel: 'dailydev',
      href: 'https://app.daily.dev/hadilbenabdallah',
      icon: SiDailydotdev,
    },
    {
      id: 4,
      ariaLabel: 'codepen',
      href: 'https://codepen.io/Hadil-Ben-Abdallah',
      icon: AiOutlineCodepen,
    },
    {
      id: 5,
      ariaLabel: 'leetcode',
      href: 'https://leetcode.com/u/hadilbenabdallah/',
      icon: TbBrandLeetcode,
    },
  ];

  return (
    <div className={`absolute bottom-1 right-0 lg:flex flex flex-col justify-between ${styles.mobile}`}>
      <div className={`social ${styles.wrapper}`}>
        {links.map((link) => {
          const Icon = link.icon;
          if (!Icon) {
            console.error(`Icon not found for ${link.ariaLabel}`);
            return null;
          }
          return (
            <div key={link.id}>
              <Anchor ariaLabel={link.ariaLabel} href={link.href}>
                <Icon size={40} />
              </Anchor>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;