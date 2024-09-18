import Image from 'next/image';

const MyImage = () => {
  return (
    <Image
      height={853}
      width={1280}
      alt="Coding Image"
      src={'/imgs/coding.gif'}
      loading="lazy"
    />
  );
};
export default MyImage;
