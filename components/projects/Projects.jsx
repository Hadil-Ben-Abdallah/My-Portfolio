import HyperOne from '../customH1/HyperOne';
import Image from 'next/image';

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col my-16">
      <HyperOne value={'Projects'} />
      <div className="flex justify-center items-center mt-2">
        <img 
          src="imgs/underconstruction.png"
          alt="Under Construction"
          className="w-60 h-60 object-contain"
        />
      </div>
    </div>
  );
}
