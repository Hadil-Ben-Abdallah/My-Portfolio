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
          content="I'm a Automation Test Engineer with 10 Years Experience of Self Learning and Projects Experience,"
        />
        <meta name="copyright" content="Hardik Chotaliya" />
        <meta
          name="keywords"
          content="Hardik, Hardik Chotaliya, Hardik Bharat Chotaliya, hardikchotaliya, Chotaliya, tester, QA, Automation Test engineer, Automation, Test engineer, SDET, Automation Engineer, frontend, Front-end, backend, Back-end, fullstack, Full-stack, engineer, Engineer, freelancer, uiux, designer, bussiness, web3, PWA, performance, Optimization"
        />
        <meta name="author" content="Hardik Chotaliya" />
        <meta property="og:title" content="Hardik Chotaliya Automation Test Engineer" />
        <meta
          property="og:description"
          content="Hello My Name is Hardik Chotaliya, I'm a Automation Test Engineer specalize in Automation Framework Development"
        />
        <meta property="og:url" content="https://hardikchotaliya.vercel.app/" />
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
