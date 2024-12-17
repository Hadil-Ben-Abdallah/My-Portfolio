import { Animation } from '@/components/Hero/Animation';
import HeroSection from '@/components/Hero/HeroSection';
import Skills from '@/components/Skills/Skills';
import About from '@/components/about/About';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';
import Offer from '@/components/offer/Offer';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Certificates from './../components/certificates/Certificates';
import Blog from '@/components/blog/Blog';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  Home.getInitialProps = async ({ res }) => {
    res?.setHeader('Cache-Control', 'public, max-age=3600');
    return {};
  };

  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1600) {
        setShowScroller(true);
      } else {
        setShowScroller(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollerStyle = {
    padding: '10px',
    position: 'fixed',
    bottom: '50px',
    right: '15px',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '24px',
    border: 'none',
    display: showScroller ? 'block' : 'none',
    background: 'primary',
  };

  return (
    <>
      <Head>
        <title>Hardik Chotaliya | SDET</title>
      </Head>

      <Animation />
      <HeroSection />

      <div className="relative container mx-auto sm:col-span-12 flex flex-col items-center justify-center align-middle">
        <div className="mt-16">
          <About />
        </div>
        <div className="mt-16">
          <Services />
        </div>
        <div className="mt-16">
          <Skills />
        </div>
        <div className="mt-16">
          <Projects />
        </div>
        <div className="mt-16">
          <Blog />
        </div>
        <div className="mt-16">
          <Certificates />
        </div>
        <Offer />
        <div className="mt-16">
          <ContactMe />
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>

      <button
        className="bg-primary rounded-full"
        style={scrollerStyle}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-white w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
}
