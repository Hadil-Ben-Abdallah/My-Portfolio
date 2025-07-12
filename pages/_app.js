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
          content="Hadil Ben Abdallah | Full-Stack Engineer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Hadil Ben Abdallah, a full-stack software engineer skilled in React, Next.js, and Django — building fast, scalable, and user-friendly web apps."
        />
        <meta
          property="og:image"
          content="https://hadilbenabdallah.vercel.app/imgs/preview.png"
        />
        <meta
          property="og:url"
          content="https://hadilbenabdallah.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hadilbenabdallah.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hadil Ben Abdallah | Full-Stack Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore Hadil's portfolio of high-performance web apps built with React, Next.js, and Django."
        />
        <meta
          name="twitter:image"
          content="https://hadilbenabdallah.vercel.app/imgs/preview.jpg"
        />
        <meta name="twitter:creator" content="@hadilbnabdallah" />
        <meta name="twitter:site" content="@hadilbnabdallah" />
        <meta
          name="twitter:url"
          content="https://hadilbenabdallah.vercel.app/"
        />
        <meta name="twitter:domain" content="hadilbenabdallah.vercel.app" />

        <meta name="robots" content="all" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hadil Ben Abdallah',
              url: 'https://hadilbenabdallah.vercel.app/',
              sameAs: [
                'https://github.com/Hadil-Ben-Abdallah',
                'https://www.linkedin.com/in/hadil-ben-abdallah/',
              ],
              jobTitle: 'Full-Stack Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
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
