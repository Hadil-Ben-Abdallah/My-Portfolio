import Image from 'next/image';
import style from './skillsCard.module.css';
import { Suspense } from 'react';
import Fallback from '@/components/image/Fallback';
const SkillCard = ({ name, imageSrc }) => {
  return (
    <div
      className={`${style.card} cursor-pointer overflow-hidden w-w70p h-h70p flex justify-center items-center relative p-2 rounded-xl hover:p-3 hover:rounded-50 hover:border-primary bg-hblack transition-all duration-300 border-2 border-transparent`}
    >
      {' '}
      <Suspense fallback={<Fallback />}>
        <Image
          width={55}
          height={55}
          alt={name}
          src={imageSrc}
          loading="lazy"
        />
      </Suspense>
    </div>
  );
};

export default SkillCard;
