import Image from 'next/image';
import styles from './service.module.css';
import VanillaTilt from 'vanilla-tilt';
import { Suspense, useEffect } from 'react';
import Fallback from '../image/Fallback';
const ServicesCard = ({ src, alt, title, description, className }) => {
  useEffect(() => {
    const element = document.querySelectorAll('.card');
    VanillaTilt.init(element, {
      max: 20,
      speed: 200,
      glare: false,
    });
  });
  return (
    <div
      className={`${styles.parent} card flex justify-center items-center flex-col p-4 `}
    >
      <div className={`${styles.logo} ${styles[className]}`}>
        <Suspense fallback={<Fallback />}>
          <Image width={70} height={70} alt={alt} src={src} loading="lazy" />
        </Suspense>
      </div>
      <h1 className="text-2xl text-center font-bold p-2">{title}</h1>
      <p className=" text-center text-lg p-2">{description}</p>
    </div>
  );
};

export default ServicesCard;
