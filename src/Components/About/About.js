import React, { Component } from "react";
import { ReactDOM } from "react";
import Gospel from "../Gospel/Gospel";
import Degree from "../Degree/Degree";
import profile from "../../Img/Jobal-photo1.png";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
    };
  }

  render() {
    return (
      <div className="HomePage">
        <section className="HomePageMe">
          <div className="HPMe__background" />
          <div className="me_content">
            <div className="profilePic">
              <img
                className="personPhoto"
                id="jobalProfile"
                src={profile}
                alt="jobal profile"
              />
            </div>
            <div className="meInfo">
              <h2>Summary</h2>
              <p className="jobalDesc suminfo">
              Thank you for visiting my website. My name is Jobal. I am a Louisiana native, but currently reside on the east coast. This site includes three of my favorite things: Discipleship, Web Design, and Comics. The discipleship modules help guide new Christians in their walk with Christ. The Web Design link demonstrates a few of my favorite designs that I use. The Comic link displays my comic strip, Fireflies Comics. I hope that you enjoy!
              </p>
            </div>
          </div>
        </section>
        <section className="degSect">
          <Degree/>
        </section>
      </div>
    );
  }
}
