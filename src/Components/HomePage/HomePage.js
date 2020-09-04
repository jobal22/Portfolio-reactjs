import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Img/Jobal-photo.jpg';
import sparkles from '../../Img/bulbs.jpg';
import './HomePage.css';

export default function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  
  return (
    <div className='HomePage'>
      <section className='HomePageMe'>
        <div className='HPMe__background' />
        <div className='me_content'>
          <div className='profilePic'>
            <img className='personPhoto' id='jobalProfile' src={profile} alt='jobal profile'/>
          </div>
          <div className='meInfo'>
            <h2>Summary</h2>
            <p className='jobalDesc suminfo'>
            I am a Full Stack Developer with a PhD in Evangelism. I am passionate about coding, especially in React.js. I find joy in transitioning concepts from abstract to concrete. I have over five years of leadership and coordinating experience in academic environments, and I have specialized in customer/client services for nearly two decades. Please view some of my projects, as well as, more details on my work experiences. 
            </p>
            <button className='meButtonTablet'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
          </div>
          <button className='meButton'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
        </div>
      </section>
      <section className='HomePageProjects'>
        <img className='HPProjects__background' src={sparkles} alt='sparkle' style={{transform: `translateY(-${offsetY * 0.2}px)` }} />
        <div className='HPProjects__content'>
          <h2>Projects</h2>
          <div className='mcbg' />
          <p className='jobalDesc'><b>Skills:</b> HTML5, CSS, JavaScript, React, JSX, Jest, Enzyme, Node, Express, PostgreSQL, C++</p>
          <button className='projectsButton'><Link className='homePageLink' to={`/projects`}>View Projects</Link></button>
        </div>
      </section>
      <section className='HomePageEducation'>
        <div className='HPEducation__background' />
        <div className='HPEducation__content'>
          <h2>Education</h2>
          <div className='HPEC'>
            <p className='jobalDesc'><b>Bachelor’s Degree:</b></p>
            <p className='jobalDesc'>Subject: Toxicology<br></br>College: University of Louisiana in Monroe<br></br>Graduated: 2010</p>
            <p className='jobalDesc'><b>Master’s Degree:</b></p>
            <p className='jobalDesc'>Subject: Divinity<br></br>Southwestern Baptist Theological Seminary<br></br>Graduated: 2015</p>
            <p className='jobalDesc'><b>Doctor of Philosophy:</b></p>
            <p className='jobalDesc'>Subject: Evangelism<br></br>Southwestern Baptist Theological Seminary<br></br>Graduated: 2020</p>
          </div>
        </div>
      </section>
      <section className='HomePageContact'>
        <div className='HPContact__background' />
        <div className='HPContact__content'>
          <h2>Reach Out</h2>
          <ol className='HPCLink'>
            <li><a className='HPCIcon far fa-envelope' href="mailto:jbaldwije@gmail.com" aria-hidden="true" rel="noopener noreferrer"></a></li>
            <li><a className='HPCIcon fab fa-linkedin-in' href="https://www.linkedin.com/in/jobal/" target="_blank" aria-hidden="true" rel="noopener noreferrer"></a></li>
            <li><a className='HPCIcon fab fa-github' href="https://github.com/jobal22" target='_blank' aria-hidden="true" rel="noopener noreferrer"></a></li>
          </ol>
        </div>
      </section>
    </div>
  )
}