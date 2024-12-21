import Image from 'next/image';

const MyImage = () => {
  return (
    <Image
      height={853}
      width={1280}
      alt="Coding Image"
      src={'/imgs/aboutMe.png'}
      loading="lazy"
    />
  );
};
export default MyImage;
