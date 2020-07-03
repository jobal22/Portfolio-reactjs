import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <Container className='HomePage'>
        <Row>
            <h1 class="banner-intro i1">Hello!</h1>
            <h1 class="banner-intro i2">I'm Jonathan Baldwin,</h1>
            <h2 class="banner-intro introH2">but I prefer to go by Jobal.</h2>
            <h3 class="banner-intro introH3">(Pronounced: joe-ball)</h3>
            <hr></hr>
        </Row>
        <Row>
          <section>
            <div class="aboutMe">
              <h2>About Me:</h2>
            </div>
          </section>
        </Row>
        <Row>
          <section>
            <p class="jobalDesc">
              I am a web developer and recent graduate of the 
              Software Engineering bootcamp at Thinkful. My love 
              for coding developed from my passion for nonverbal 
              languages (ex. music, truth-functioning logic, and 
              predicate logic) and verbal languages. Also, my love 
              for coding flourishes within my enthusiasm for 
              problem-solving and devotion to research.
            </p>
          </section>
        </Row>

        <Row>
          <section>
            <p class="jobalDesc">
              Prior to my studies at Thinkful, I graduated with 
              a B.S. in Toxicology from the University of Louisiana in Monroe, 
              MDiv in International Church Planting and Ph.D. in Evangelism 
              from Southwestern Baptist Theological Seminary. During my B.S., 
              I learned the skills for picking up complex concepts through 
              courses such as Analytical Qualitative and Quantitative 
              Chemical Analysis. In my MDiv, I obtained the confidence to work 
              cross-culturally as the degree required for me to live in remote 
              and nonremote foreign countries. But it was during my Ph.D. that 
              I acquired the skills for leadership, teaching, and coordinating. 
              I believe the abilities to quickly understand complex concepts, 
              reach across cultural barriers, lead, and train are the key strengths 
              that I will add to any team.
            </p> 
          </section>
        </Row>
      </Container>
    )
  }
}
