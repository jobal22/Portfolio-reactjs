import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import "./HomePage.css";
import comic from "../../Img/1-FF-Dandelion.jpg";
import heart from "../../Img/heart.PNG";
import sad from "../../Img/sad.PNG";
import cross from "../../Img/cross.PNG";
import turn from "../../Img/turn.PNG";
import saved from "../../Img/saved.PNG";
import pwg from "../../Img/PWG.jpg";
import STORE from "../../store";
import Dial from "../../Img/pwg.png";
import FontAwesome from "react-fontawesome";
import Degree from "../Degree/Degree"

export default class HomePage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = Context;

  render() {
    const { devotions = [] } = this.context;
    return (
      <div className="HomePage">
         {/* <section className="HPMission">
          <div className="HPTitle">
            <img className="HPMimg" src={pwg} alt="Plant Water Grow"/>
          </div>
        </section> */}
        <section className="HPWelcome">
          <div className="HPTitle">
            <h2 className="HPTT">Welcome</h2>
          </div>
          <img className="HPMimg" src={pwg} alt="Plant Water Grow"/>
          {/* <div className="line"/> */}
          <div className="HPWP">Thank you for visiting Dr.Jobal! This site provides insight into my work. You will find my work on Discipleship, Software Engineering, and Comic Strips. I hope that you enjoy!</div>
        </section>
        <section className="HPAccess">
          <div className="HPTitle">
            {/* <h1 className="HPTT">Quick Access</h1> */}
          </div>
          <div className="ECc">
            <div className="ECcP">
            <a className="EPa" href="/disciple">
            DISCIPLE
            </a>
            </div>
            <div className="ECcProfile ep2">
            <h3 className="ECcPTitle">Web Design</h3>
            </div>
            {/* <div className="ECcProfile ep3">
            <h3 className="ECcPTitle">Comics</h3>
            </div> */}
            <div className="ECcP">
            <a className="EPb" href="/comics">
            Comics
            </a>
            </div>
          </div>
        </section>
        <section className="HPGospel">
          <div className="HPTitleg">
            <h2 className="HPTT">THE GOSPEL</h2>
          </div>
          <div className="HPG">
            <div className="HPGsec">
            <img className="HPGimg dng" src={heart} alt="Heart" />
            <h4 className="HPGit">God <span className="bigger">LOVES</span> you! (John 3:16)</h4>
            </div>
            <div className="HPGsec">
            <img className="HPGimg" src={sad} alt="Sad" />
            <h4 className="HPGit">We have <span className="bigger">SINNED</span> (Romans 3:23)</h4>
            </div>
            <div className="HPGsec">
            <img className="HPGimg" src={cross} alt="Cross" />
            <h4 className="HPGit">Jesus <span className="bigger">DIED</span> and <span className="bigger">ROSE</span> <br/> (1 Corinthians 15:3-4)</h4>
            </div>
            <div className="HPGsec">
            <img className="HPGimg" src={turn} alt="Turn" />
            <h4 className="HPGit"><span className="bigger">REPENT</span> and <span className="bigger">BELIEVE</span> (Mark 1:15)</h4>
            </div>
            <div className="HPGsec">
            <img className="HPGimg" src={saved} alt="Saved" />
            <h4 className="HPGit"> <span className="bigger">RECEIVE</span> Forever Life (Romans 10:13)</h4>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
