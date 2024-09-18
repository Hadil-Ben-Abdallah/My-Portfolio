import Image from 'next/image';
import { Suspense } from 'react';
import Fallback from '../image/Fallback';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Anchor from '../link/Anchor';
const TestimonialCard = ({
  id,
  imageSrc,
  name,
  title,
  url,
  width,
  height,
  testimonial,
}) => {
  return (
    <div className="box bg-white shadow-md rounded-lg p-8 relative ">
      <Suspense fallback={<Fallback />}>
        <Image
          id="testiimg"
          key={id}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          src={imageSrc}
          alt={name}
          className="absolute -right-3 -top-12 w-24 h-24 rounded-full border-8 border-mainBg"
        />
      </Suspense>
      <Anchor
        href={url}
        className="text-primary text-xl font-bold mt-2"
        ariaLabel={name}
      >
        {name}
      </Anchor>
      <span className="title text-gray-900 block mt-4">{title}</span>
      <div className="rate flex text-yellow-400 mt-2">
        <BsStarFill size={30} className="mr-1" />
        <BsStarFill size={30} className="mr-1" />
        <BsStarFill size={30} className="mr-1" />
        <BsStarFill size={30} className="mr-1" />
        <BsStarHalf size={30} className="mr-1" />
      </div>
      <p className="text-gray-700 text-lg leading-relaxed text-justify mt-2">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
