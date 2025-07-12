import '@/styles/globals.css';
import { Montserrat, Rubik } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Rubik({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
});
import { ThemeProvider } from '@/context/ContextProvider';
import { useEffect } from 'react';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log(
              'Service Worker registered with scope:',
              registration.scope
            );
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/imgs/logo.png" />
        <meta name="theme-color" content="#f0f0ff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Full-Stack Software Engineer skilled in React, Next.js & Django. I build fast, scalable, user-friendly web apps with clean code and strong backend systems."
        />
        <meta name="copyright" content="Hadil Ben Abdallah" />
        <meta
          name="keywords"
          content="Hadil, Hadil Ben Abdallah, hadilbenabdallah, Ben Abdallah, Abdallah, full-stack developer, full stack engineer, junior software engineer, front-end developer, back-end developer, React, React.js, Next.js, Django, JavaScript, TypeScript, web development, web developer, UI/UX, UI design, UX design, responsive design, clean code, scalable web apps, SEO optimization, performance optimization, PWA, web3 developer, freelance web developer, remote developer, software engineer portfolio"
        />
        <meta name="author" content="Hadil Ben Abdallah" />
        <meta
          property="og:title"
          content="Hadil Ben Abdallah Software Engineer"
        />
        <meta
          property="og:description"
          content="Hello My Name is Hadil Ben Abdallah, I'm a Software Engineer specalize in Full Stack development"
        />
        <meta
          property="og:url"
          content="https://hadilbenabdallah.vercel.app/"
        />
        <meta name="robots" content="all" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics mode="production" />
      </ThemeProvider>
    </>
  );
}
