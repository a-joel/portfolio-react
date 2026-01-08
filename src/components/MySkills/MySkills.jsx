import React from 'react';
import { motion } from 'framer-motion';
import "./MySkills.css";

// Imported assets
import react from '../../assets/react.png';
import node from '../../assets/nodejs.png';
import javascript from '../../assets/javascript.png';
import mongodb from '../../assets/mongodb.png';
import redux from '../../assets/redux.png';
import firebase from '../../assets/firebase.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import express from '../../assets/express.png';
import github from '../../assets/github.png';
import tailwind from '../../assets/tailwind.png';
import { Code, GitGraph } from 'lucide-react';

const MySkills = () => {
        // Define unique sets per column
        const col1Icons = [html, css, express, firebase];
        const col2Icons = [javascript, mongodb, node, react];
        const col3Icons = [redux, tailwind, github, javascript];
        const col4Icons = [html, node, react, firebase];

        const Certifications = "5+";
        const Projects = "20+";
        const Experience = "0 Years";
        const knownTechnologies = "15+";

        // Duplicate each for seamless loop
        const double = (arr) => [...arr, ...arr, ...arr]; // triple for extra buffer

        const reveal = {
                hidden: {
                        opacity: 0,
                        y: 30,
                },
                visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                                duration: 0.8,
                                ease: "easeOut",
                        },
                }
        };

        const upReveal = {
                hidden: {
                        opacity: 0,
                        y: -50,
                },
                visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                                duration: 0.8,
                                ease: "easeOut",
                        },
                }
        };

        return (
                <>
                        <motion.h3
                                variants={reveal}
                                initial="hidden"
                                animate="visible"
                                className='myskills'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.3 }}
                        >
                                <Code size={40} />
                                My Skills & Contributions
                        </motion.h3>
                        <div className="skills-main-container" id='my-skills'>
                                <div className="my-experience-section">
                                        <motion.div
                                                variants={upReveal}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                className="experience-container"
                                        >
                                                <div className="experience-item">
                                                        <div>
                                                                <h4>{Certifications}</h4> <span>Certifications</span>
                                                        </div>
                                                </div>
                                                <div className="experience-item">
                                                        <div>
                                                                <h4>{Projects}</h4> <span>Projects</span>
                                                        </div>
                                                </div>
                                                <div className="experience-item">
                                                        <div>
                                                                <h4>{Experience}</h4> <span>Experience</span>
                                                        </div>
                                                </div>
                                                <div className="experience-item">
                                                        <div>
                                                                <h4>{knownTechnologies}</h4> <span>Technologies Known</span>
                                                        </div>
                                                </div>
                                        </motion.div>
                                </div>

                                <div className="second-main-container">

                                        <motion.div
                                                variants={reveal}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                className="my-skills-section"
                                        >
                                                <p>My Leetcode Stats</p>
                                                <img
                                                        src="https://leetcard.jacoblin.cool/a-joel?theme=light&font=inter&ext=activity"
                                                        alt="LeetCode Stats"
                                                        className="rounded-lg"
                                                />
                                        </motion.div>

                                        <motion.div
                                                variants={reveal}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                className="my-skills-section">
                                                <div>
                                                        <motion.p
                                                                variants={reveal}
                                                                initial="hidden"
                                                                whileInView="visible"
                                                                viewport={{ once: true, amount: 0.3 }}
                                                        >Technologies I known and I code in</motion.p>
                                                </div>
                                                <div className="tech-stack-container">
                                                        <div className="tech-stack-slider">
                                                                <ul className="tech-column tech-column--1">
                                                                        {double(col1Icons).map((icon, i) => (
                                                                                <li key={i} className="tech-item"><img src={icon} alt="" /></li>
                                                                        ))}
                                                                </ul>
                                                                <ul className="tech-column tech-column--2">
                                                                        {double(col2Icons).map((icon, i) => (
                                                                                <li key={i} className="tech-item"><img src={icon} alt="" /></li>
                                                                        ))}
                                                                </ul>
                                                                <ul className="tech-column tech-column--3">
                                                                        {double(col3Icons).map((icon, i) => (
                                                                                <li key={i} className="tech-item"><img src={icon} alt="" /></li>
                                                                        ))}
                                                                </ul>
                                                                <ul className="tech-column tech-column--4">
                                                                        {double(col4Icons).map((icon, i) => (
                                                                                <li key={i} className="tech-item"><img src={icon} alt="" /></li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                </div>
                                        </motion.div>

                                </div>
                        </div>
                                <motion.div
                                        variants={reveal}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="github-contribution-section">
                                        <p align="center"> <GitGraph /> GitHub Contributions </p>
                                        <div align="center">
                                                <img src="https://github-readme-activity-graph.vercel.app/graph?username=a-joel&bg_color=220a28&color=ffffff&line=c56a90&point=ffeb95&area=false&hide_border=false" />
                                        </div>
                                </motion.div>

                </>
        );
};

export default MySkills;