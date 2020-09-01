import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../Projects/node_modules/bootstrap/dist/css/bootstrap.css';
// import { Container, Row } from 'react-bootstrap';
import profile from '../../Img/Jobal-photo.jpg';
import blue from '../../Img/mountains.jpg';
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
        {/* <img className='me_background' src={blue} alt='blue sky' style={{transform: `translateY(-${offsetY * 0.2}px)` }} /> */}
        <div className='me_content'>
          <div className='profilePic'>
            <img className='personPhoto' id='jobalProfile' src={profile} alt='jobal profile'/>
          </div>
          <div className='meInfo'>
            <h2>Summary</h2>
            <p className='jobalDesc suminfo'>
            I am a Full Stack Developer with a PhD in Evangelism. My main goal is to love others 
            through example-leadership and verbal encouragement. I love research within many fields 
            of study as well as learning from others’ experiences and knowledge, which led to my 
            love for coding.
            </p>
            <button className='meButtonTablet'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
          </div>
          <button className='meButton'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
        </div>
      </section>
      <section className='HomePageProjects'>
        {/* <div className='HPProjects__background' /> */}
        <img className='HPProjects__background' src={sparkles} alt='sparkle photo' style={{transform: `translateY(-${offsetY * 0.2}px)` }} />
        {/* style={{transform: `translateY(-${offsetY * 0.2}px)` }} */}
        <div className='HPProjects__content'>
          <h2>Projects</h2>
          <div className='mcbg' />
          <p className='jobalDesc'><b>Skills:</b> HTML5, CSS, JavaScript, React, JSX, Jest, Enzyme, Node, Express, PostgreSQL, C++</p>
          {/* <div className='buttonBG' /> */}
          <button className='projectsButton'><Link className='homePageLink' to={`/projects`}>View Projects</Link></button>
        </div>
      </section>
      <section className='HomePageEducation'>
        {/* <img className='HPEducation__background' src={sparkles} alt='sparkle photo' style={{transform: `translateY(-${offsetY * 0.2}px)` }} /> */}
        <div className='HPEducation__background' />
        {/* style={{transform: `translateY(-${offsetY * 0.2}px)` }} */}
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
            <li><a className='HPCIcon far fa-envelope' ></a></li>
            <li><a className='HPCIcon fab fa-linkedin-in'></a></li>
            <li><a className='HPCIcon fab fa-instagram' href='https://www.instagram.com/sparrowscoffeega/' target='_blank'></a></li>
          </ol>
        </div>
      </section>
    </div>
  )
}


// export default class HomePage extends Component {
//   render() {
//     return (
//       <div className='HomePage'>
//         <section className='HomePageMe'>
//           <img className='me_background' src={blue} alt='blue sky'/>
//           <div className='me_content'>
//             <div className='profilePic'>
//               <img className='personPhoto' id='jobalProfile' src={profile} alt='jobal profile'/>
//             </div>
//             <div className='meInfo'>
//               <h2>Summary</h2>
//               <p className='jobalDesc suminfo'>
//               I am a Full Stack Developer with a PhD in Evangelism. My main goal is to love others 
//               through example-leadership and verbal encouragement. I love research within many fields 
//               of study as well as learning from others’ experiences and knowledge, which led to my 
//               love for coding.
//               </p>
//               <button className='meButtonTablet'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
//             </div>
//             <button className='meButton'><Link className='homePageLink' to={`/experience`}>More About Me</Link></button>
//           </div>
//         </section>
//         <section className='HomePageProjects'>
//           <img className='HPProjects__background' />
//           {/* style={{transform: `translateY(-${offsetY * 0.2}px)` }} */}
//           <div className='HPProjects__content'>
//             <h2>Projects</h2>
//             <p className='jobalDesc'><b>Skills:</b> HTML5, CSS, JavaScript, React, JSX, Jest, Enzyme, Node, Express, PostgreSQL, C++</p>
//             <button><Link className='homePageLink' to={`/projects`}>View Projects</Link></button>
//           </div>
//         </section>
//         <section className='HomePageEducation'>
//           <img className='HPEducation__background' />
//           {/* style={{transform: `translateY(-${offsetY * 0.2}px)` }} */}
//           <div className='HPEducation__content'>
//             <h2>Education</h2>
//             <div className='HPEC'>
//               <p className='jobalDesc'><b>Bachelor’s Degree:</b></p>
//               <p className='jobalDesc'>Subject: Toxicology<br></br>College: University of Louisiana in Monroe<br></br>Graduated: 2010</p>
//               <p className='jobalDesc'><b>Master’s Degree:</b></p>
//               <p className='jobalDesc'>Subject: Divinity<br></br>Southwestern Baptist Theological Seminary<br></br>Graduated: 2015</p>
//               <p className='jobalDesc'><b>Doctor of Philosophy:</b></p>
//               <p className='jobalDesc'>Subject: Evangelism<br></br>Southwestern Baptist Theological Seminary<br></br>Graduated: 2020</p>
//             </div>
//           </div>
//         </section>
//         <section className='HomePageContact'>
//           <div className='HPContact__content'>
//             <h2>Reach Out</h2>
//             <ol className='HPCLink'>
//               <li><a className='HPCIcon far fa-envelope' ></a></li>
//               <li><a className='HPCIcon fab fa-linkedin-in'></a></li>
//               <li><a className='HPCIcon fab fa-instagram' href='https://www.instagram.com/sparrowscoffeega/' target='_blank'></a></li>
//             </ol>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }
