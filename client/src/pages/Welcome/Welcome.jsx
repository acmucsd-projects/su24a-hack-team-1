import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { AnimatedSVG } from './AnimatedSVG';
import { TeamSection } from '../../components/TeamSection/TeamSection';
import About from '../../components/About/About';

// Register GSAP plugins
gsap.registerPlugin(SplitText);

function Welcome() {
  const navigate = useNavigate();

  // refs for headings
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    // -------------------------
    // SplitText Animation
    // -------------------------
    const split1 = new SplitText(line1Ref.current, {
      type: "lines",
      linesClass: "split-child"
    });

    const split2 = new SplitText(line2Ref.current, {
      type: "lines",
      linesClass: "split-child"
    });

    new SplitText(line1Ref.current, { linesClass: "split-parent" });
    new SplitText(line2Ref.current, { linesClass: "split-parent" });

    gsap.from([...split1.lines, ...split2.lines], {
      duration: 1.5,
      yPercent: 100,
      ease: "power4.out",
      stagger: 0.1
    });

  }, []);

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <section>
        <div id="main">
          <div id="hero">
            <div className="left">
              <div id="header">

                {/* SplitText Animated Headings */}
                <h1 ref={line1Ref}>Discover A Community</h1>

                <div id="blocktext">
                  <h1 ref={line2Ref} id="header2">
                    Through <span className="text-purple">Projects</span>.
                  </h1>
                </div>

                {/* Buttons */}
                <div className="buttons">
                  <button id="btn-sign-up" onClick={() => handleClick('/Signup')}>Sign up</button>
                  <button id="btn-log-in" onClick={() => handleClick('/Login')}>Log in</button>
                </div>

              </div>
            </div>

            {/* Scroll button */}
            <div id="hero-footer">
              <motion.div whileHover={{ scale: 1.1 }}>
                <a href="#about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <i className="ri-arrow-down-s-line"></i>
                </a>
              </motion.div>
            </div>

          </div>
          <AnimatedSVG/>
        </div>
      </section>

      {/* About Us Section */}
      <About/>
      <TeamSection/>
    </>
  );
}

export default Welcome;
