import React, { useEffect, useRef } from 'react';
import './about.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger);

const aboutContent = [
  {
    title: 'We’re reimagining how students connect with opportunities.',
    body: `Inspired by the simplicity of dating apps, we built a platform where you can
           browse nearby projects and jump in the moment curiosity strikes.`,
    lottie: 'https://lottie.host/f1787303-037f-478f-bd49-d1195623304e/8iFLwVqRX6.lottie',
  },
  {
    title: 'Built for schools, powered by community.',
    body: (
      <>
        Every post stays local, relevant, and meaningful. Share what you need help with,
        explore what others are creating, and respond with a simple{' '}
        <i className="ri-check-line" aria-hidden="true"></i> or{' '}
        <i className="ri-subtract-line" aria-hidden="true"></i>.
      </>
    ),
    lottie: 'https://lottie.host/a0614029-3b3d-46da-9ff6-a00a58d135ec/fO6V6T85F9.lottie',
  },
  {
    title: 'No noise. No barriers. Just students helping students.',
    body: `ProjectUp removes the friction so ideas move faster and teams form instantly—right
           when momentum matters most.`,
    lottie: 'https://lottie.host/724bdd0b-2e53-4aae-be0a-69220c4924f4/TVfy01QlNo.lottie',
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(sectionRef.current.querySelectorAll('.about-row'), {
        start: 'top 90%',
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
          }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-us" className="about-section" ref={sectionRef}>
      {aboutContent.map((block, index) => (
        <div
          className={`about-row ${index % 2 === 1 ? 'reverse' : ''}`}
          key={block.title}
        >
          <div className="about-text">
            <h2>{block.title}</h2>
            <p>{block.body}</p>
          </div>
          <div className="about-image">
            <DotLottieReact
              src={block.lottie}
              loop
              autoplay
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;