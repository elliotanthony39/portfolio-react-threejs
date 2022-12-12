import React, { useEffect } from 'react';
import '../../stylesheets/Home.css';
// Import icons from React-Icons 
import { DiJsBadge, DiHtml5, DiCss3, DiGithubBadge, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { FaFacebookSquare, FaFreeCodeCamp, FaInstagram, FaLinkedin, FaAngleDown, FaArchive, FaFileDownload } from "react-icons/fa"; 
import { SiThreedotjs, SiGmail } from "react-icons/si";
import { moveOne } from '../Scene/Script';
//other opcions for download --> FaCloudDownloadAlt,FaDownload,FaEnvelope

function Home() {

  useEffect(() => {
    moveOne();
  }, [])
  
  return (
    <div className="conteiner">
      <section className="welcome">
          <h1 className='welcome-wrap glass'>Elliot Anthony <br/>Portafolio</h1>
          <div className="second-hero glass">
            <h1>Elliot Anthony Madariaga</h1>
            <h4>Full Stack Developer | 3D Student</h4>
          </div>
          <span className='welcome-scroll'>Scroll Down Slowly<br/><FaAngleDown className="icons"/></span>
      </section>
      <section className="about-me glass">
        <div className="description">
          <h1>About Me</h1>
          <p>I am a young developer of 23 years old,
            specialized in frontend but I also have basic knowledge about backend,
            I am self-taught but I have a certification if needed,
            I speak spanish and basic english,
            I live in peru and I am willing to relocate or work remotely,
            if you want to help me with my english or talk about anything, you can find me at:
          </p>
          <div className="social-links">
            <a href='https://www.instagram.com/ynohtna.dev/'>Instagram <FaInstagram className="icons"/></a>
            <a href='https://www.facebook.com/people/Anthony-Madariaga/100080874905011/'>Facebook <FaFacebookSquare className="icons"/></a>
            <a href='https://www.linkedin.com/in/elliotanthonymadariaga'>Linkedin <FaLinkedin className="icons"/></a>
            <a href='https://github.com/elliotanthony39'>Github <DiGithubBadge className="icons"/></a>
            <span>elliotanthonydev@gmail.com <SiGmail className="icons"/></span>
            <h4>You can also contact me, If you are a recruiter &#128521;</h4>
          </div>
        </div>
        <img src="./profile-photo/profile.jpeg" alt='profile'/>
      </section>
      <section className="skills">
        <div className="content-skills glass">
          <h1>Skills & Knowledge</h1>
          <h3>Hard Skills</h3>
          <div className="skills-hard">
            <span>HTML <DiHtml5 className="icons"/></span>
            <span>CSS <DiCss3 className="icons"/></span>
            <span>Javascript <DiJsBadge className='icons'/></span>
            <span>React JS <DiReact className="icons"/></span>
            <span>Three JS <SiThreedotjs className="icons"/></span>
            <span>Node JS <DiNodejsSmall className="icons"/></span>
            <span>Express JS</span>
            <span>Mongo DB <DiMongodb className="icons"/></span>
          </div>
          <h3>Soft Skills</h3>
          <ul className="skills-soft">
            <li>Adaptability</li>
            <li>Communication</li>
            <li>Flexibility</li>
            <li>Team Work</li>
            <li>Honesty</li>
          </ul>
          <h3>My Certification & Docs</h3>
          <div className="check">
            <a download='CV-es-Anthony-Madariaga-Frontend' href='./cv/cv-frontend-2022-es.pdf'>Download My CV <FaFileDownload className="icons"/></a>
            <a href='https://freecodecamp.org/certification/anthony_pendragon/front-end-development-libraries'>Freecodecamp Certification <FaFreeCodeCamp className='icons'/></a>
          </div>
        </div>
      </section>
      <section className="about-project glass">
        <h1>About This Project</h1>
        <div className="summary">
          <p>This portfolio was created using React JS and the 3D part was created with Three JS and Blender,
            you are free to use my 3D model,</p>
          <a href='https://github.com/elliotanthony39/portfolio-react-threejs'>Link to Repository <FaArchive className="icons"/></a>
        </div>
        {/*<div>
          <h1>Disclaimer</h1>
          <p>Music was provided by <a href='https://www.epidemicsound.com/'>epidemicsound</a><br/>
            The image of the portal was taken from <a href='https://www.creativeshrimp.com/midjourney-text-to-images.html'>Creativeshrimp</a></p>
        </div>*/}
      </section>
    </div>
  )
}

export default Home;