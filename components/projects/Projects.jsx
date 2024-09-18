import HyperOne from '../customH1/HyperOne';

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col my-16">
      <HyperOne value={'Projects'} />
      <p className="text-center mt-2 lg:mx-32 lg:text-2xl sm:text-2xl">
        Loading...
      </p>
    </div>
  );
}
