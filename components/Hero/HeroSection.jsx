import SocialLinks from '../socialLinks/SocialLinks';
import NavBar from '../nav/NavBar';
import { Suspense, lazy } from 'react';
import { HeroFallback } from '../image/Fallback';
const LazyHeroImage = lazy(() => import('./HeroImage'));
const HeroSection = () => {
  return (
    <div
      id="home"
      className={`w-full flex justify-center items-center text-white`}
    >
      <header className={`select-none absolute inset-x-0 top-0 `}>
        <NavBar />
      </header>
      <div>
        <SocialLinks />
      </div>
      <div className="px-6 lg:px-8">
        <div className="flex justify-center items-center max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="select-none flex flex-col justify-center items-center align-middle">
            <p className={`text-4xl text-center font-bold mb-2 sm:text-5xl `}>
              Hello world! 👋 <br/> I&apos;m a Software Engineer 💻
            </p>
            <div>
              <div className="relative w-72 h-72">
                <div className="absolute inset-0">
                  <Suspense fallback={<HeroFallback />}>
                    <LazyHeroImage />
                  </Suspense>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xl text-justify leading-8 ">
              I&apos;m Hadil Ben Abdallah. A passionate Software Engineer from Tunisia.📍 Specializing in full-stack web development. {' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
