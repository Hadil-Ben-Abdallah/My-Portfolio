import React, { Suspense, useEffect, useMemo, useState, useRef } from 'react';
import styles from './about.module.css';
import HyperOne from '../customH1/HyperOne';

import CustomButton from '../button/CustomButton';
import Link from 'next/link';
import { AboutFallback } from '../image/Fallback';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer1 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer2 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer3 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const observer4 = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
      if (ref4.current) observer4.unobserve(ref4.current);
    };
  }, []);
  const MyAboutImage = React.lazy(() => import('../image/MyImage'));

  const memoizedImage = useMemo(
    () => (
      <Suspense fallback={<AboutFallback />}>
        <MyAboutImage />
      </Suspense>
    ),
    []
  );
  const aboutText = 
      `As a full-stack software engineer, I specialize in creating high-performance web applications that are both visually engaging and scalable. With expertise in modern frameworks like React, Next.js, and Django, I build intuitive, responsive front-end interfaces, while ensuring robust and secure back-end systems. I focus on writing clean, maintainable code and prioritize performance, reliability, and scalability in every project. Collaboration and communication are key to my process, and I’m dedicated to delivering solutions that exceed expectations and drive long-term value.`;
  return useMemo(
    () => (
      <div id="about" className={`${styles['about-container']}`}>
        <div className={`${styles['about-content']}`}>
          <section className={styles.imageSection}>{memoizedImage}</section>
          <section className={`${styles.infosection}`}>
            <HyperOne value={'About Me'} />
            <h2 className="text-2xl">
              {' '}
              Junior Full-stack software Engineer 
            </h2>
            <p className="text-xl text-justify">{aboutText}</p>
            <div className={`${styles.personalInfo}`}>
              <div>
                <span className="font-bold">Full Name:</span>
                <span>Hadil Ben Abdallah</span>
              </div>
              <div>
                <span className="font-bold">Email:</span>
                <span>hadilbenabdallah111@gmail.com</span>
              </div>
              <div>
                <span className="font-bold">Field:</span>
                <span>Software Engineering</span>
              </div>
              <div>
                <span className="font-bold">Availability:</span>
                <span>Available for work</span>
              </div>
            </div>
            {/* <Link
              aria-label="download cv"
              download
              target="_blank"
              href={'#'}
            >
              <CustomButton text={'Download CV'} />
            </Link> */}
          </section>
          <section className={styles.skillSection}>
            <div className={styles.subject}>
              <div className={'subject'}>Hard Work</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref1}
                  className={`${
                    isVisible ? styles['fade-in1'] : styles['progress-line']
                  }`}
                  value="95%"
                  style={{
                    width: '95%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Web Development</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref2}
                  className={`${
                    isVisible ? styles['fade-in2'] : styles['progress-line']
                  }`}
                  value="85%"
                  style={{
                    width: '85%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Creativity</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref3}
                  className={`${
                    isVisible ? styles['fade-in3'] : styles['progress-line']
                  }`}
                  value="80%"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.subject}>Leadership</div>
              <div className={styles['progress-bar']}>
                <div
                  ref={ref4}
                  className={`${
                    isVisible ? styles['fade-in4'] : styles['progress-line']
                  }`}
                  value="80%"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    ),
    [isVisible, memoizedImage, aboutText]
  );
};

export default About;
