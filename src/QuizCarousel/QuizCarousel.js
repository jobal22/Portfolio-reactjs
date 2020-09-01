import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "../bootstrap-component";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import QuizAppStart from '../Img/QuizAppStart.png';
import QuizzAppQuest from '../Img/QuizzAppQuest.png';


const styles = { height: 400, width: "100%" };
const icon_glass = <span className="glyphicon glyphicon-glass" />;
const icon_music = <span className="glyphicon glyphicon-music" />;

export default class QuizCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              // autoplay={this.state.autoplay}
              slideshowSpeed={5000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
            >
              <div style={{ height: 600 }}>
                <img
                  style={{ width: "100%", height: "100%"}}
                  src={QuizAppStart}
                  className='quizImg'
                />
              </div>
              <div style={{ height: 600 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={QuizzAppQuest}
                  className='quizImg'
                />
              </div>
            </RBCarousel>
          </Col>
          {/* <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              autoplay={this.state.autoplay}
              pauseOnVisibility={true}
              onSelect={this._visiableOnSelect}
              slideshowSpeed={2000}
            >
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-center"> </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col> */}
        </Row>
      </div>
    );
  }
}

// ReactDOM.render(<DemoV3 />, document.getElementById("Demo"));

// import React, { Component } from 'react';
// // import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel'  
// import QuizAppStart from '../Img/QuizAppStart.png';
// import QuizzAppQuest from '../Img/QuizzAppQuest.png';

// export default class QuizCarousel extends Component {
//   render() {
//     return (
//       <div className='container-fluid'>
//         <Carousel className='QuizCarousel'>
//           <Carousel.Item style={{'height':"600px"}}>
//             <img
//               className="d-block w-100"
//               src={QuizAppStart}
//               alt="First slide"
//               style={{'height':"600px"}}
//             />
//           </Carousel.Item>
//           <Carousel.Item style={{'height':"600px"}}>
//             <img
//               className="d-block w-100"
//               src={QuizzAppQuest}
//               alt="Third slide"
//               style={{'height':"600px"}}
//             />
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     )
//   }
// }
