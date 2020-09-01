import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Card } from 'react-bootstrap';
// import QuizCarousel from '../../QuizCarousel/QuizCarousel.js';
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <Container className='Projects'>
        <Row>
          <h2 className='projectTitle'>Projects:</h2>
        </Row>
        <Card className='projectCards' style={{ width: '13rem', marginTop: 40 }}>
          {/* <QuizCarousel /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
