import React, { Component } from 'react';
import code from '../../Img/codelogo.png';
import direction from '../../Img/directionlogo.png';
import strategy from '../../Img/strategylogo1.png';
import communication from '../../Img/communicationlogo1.png';
import care from '../../Img/carelogo3.png';



import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <h1>Experience</h1>
        <div className='experience__content'>
          <div className='developer'>
            <div className='devImgHolder'>
              <img className='devImg' src={code} alt='code'/>
            </div>
            <h2>Full-Stack Developer</h2>
            <p>As a Full-Stack Developer, I build UI/UX from design assets for the web. I work in React.js while utilizing tools such as Webpack, Enzyme, Redux, Flux, and modern authorization mechanisms, such as JSON Web Token. I have experience with Node.js, TypeScript, PostgreSQL and knowledge of JavaScript, CSS, HTML.</p>
          </div>
          <div className='leadership'>
            <div className='leadImgHolder'>
              <img className='devImg' src={direction} alt='direction'/>
            </div>
            <h2>Leadership</h2>
            <p>Through evangelism training, I lead training sessions on clear communication with a purpose. In these training sessions, leaders are trained to train others. I manage and coordinate events that involve groups of people connecting with their communities.</p>
          </div>
          <div className='coordinating'>
            <div className='coordImgHolder'>
              <img className='devImg' src={strategy} alt='direction'/>
            </div>
            <h2>Coordinating</h2>
            <p>For nearly five years, I worked as a Housing Coordinator for a Seminary and College. This position required managing and organizing databases, as well as, communicating clearly and effectively with tenants after listening to their needs. Whether projects, meetings, or communication, the best outcome of any event develops through great planning and communication. Every minute counts.</p>
          </div>
          <div className='crossCultural'>
            <div className='crcuImgHolder'>
              <img className='devImg' src={communication} alt='direction'/>
            </div>
            <h2>Cross Cultural Development</h2>
            <p>Achieving goals acquires more than great leadership and clear communication.  Cross-cultural communication extends across the borders of language and culture to accomplish broader goals with lasting success. During my time in cross-cultural communication, I assisted in developing community-focused strategies and training programs.</p>
          </div>
          <div className='pharm'>
            <div className='pharmImgHolder'>
              <img className='devImg' src={care} alt='direction'/>
            </div>
            <h2>Client Relationships</h2>
            <p>In any business endeavor, the client and customer must feel heard. I worked as a Pharmacy Technician for nearly a decade. I was able to listen, serve, and speak with customers at their most vulnerable time, which is when they are sick. This skill continues to develop more and more through each season of life.</p>
          </div>
        </div>
      </div>
    )
  }
}
