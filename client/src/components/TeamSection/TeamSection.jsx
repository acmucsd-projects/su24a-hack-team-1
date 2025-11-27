import React, { useEffect, useRef } from "react";
import './teamsection.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import shamitaImg from "../../assets/member-imgs/shamita.jpg";
import carlImg from "../../assets/member-imgs/carl.jpeg";
import jaredImg from "../../assets/member-imgs/jared.jpeg";
import osheenImg from "../../assets/member-imgs/osheen.jpg";
import jasonImg from "../../assets/member-imgs/jason.jpg";

gsap.registerPlugin(ScrollTrigger);

export const TeamSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.batch(sectionRef.current.querySelectorAll('.card'), {
                start: "top 90%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power3.out",
                    }),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about-us" ref={sectionRef}>
            <div id="about-page">
                <h1>Meet Our Team</h1>

                <div className="cards-container">

                    {/* Cards (ScrollTrigger applied) */}
                    <div className="card">
                        <img src={shamitaImg} className="person-image" />
                        <p className="caption"><span className="caption-name">Shamita Goyal</span><br />Frontend Developer</p>
                    </div>

                    <div className="card">
                        <img src={carlImg} className="person-image" />
                        <p className="caption"><span className="caption-name">Carl Casares</span><br />Frontend Developer</p>
                    </div>

                    <div className="card">
                        <img src={jaredImg} className="person-image" />
                        <p className="caption"><span className="caption-name">Jared Mendez</span><br />Frontend Developer</p>
                    </div>

                    <div className="card">
                        <img src={osheenImg} className="person-image" />
                        <p className="caption"><span className="caption-name">Osheen Tikku</span><br />Backend Developer</p>
                    </div>

                    <div className="card">
                        <img src={jasonImg} className="person-image" />
                        <p className="caption"><span className="caption-name">Jason Wang</span><br />Backend Developer</p>
                    </div>

                </div>
            </div>
        </section>
    );
};