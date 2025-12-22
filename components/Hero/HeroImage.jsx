import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      alt="Hadil image"
      src="/imgs/me.png"
      width={288}
      height={288}
      layout="fixed"
      objectFit="cover"
      priority
      className="object-cover w-full h-full  ring-gray-300 dark:ring-gray-500"
      style={{ color: 'transparent' }}
    />
  );
}
