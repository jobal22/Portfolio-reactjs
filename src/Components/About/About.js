import React, { Component } from "react";
import profile from "../../Img/Jobal-photo.jpg";

export default class About extends Component {
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
                My name is Jonathan Baldwin (Jobal). God saved me at the end of
                2009 by His grace through faith. I am married and have three
                children. My ministry currently revolves around my Associate
                Pastor of Evangelism and Discipleship position at Friendly
                Avenue Baptist Church in Greensboro, NC. My desire is that every
                member is walking in the daily disciplines of prayer, Bible,
                evangelism, and fellowship.
              </p>
            </div>
          </div>
        </section>
        <section className="HPF1"></section>
        <section className="HPF2"></section>
        <section className="HPF3"></section>
        <section className="HomePageEducation">
          {/* <div className="HPEducation__background" /> */}
          <div className="HPEducation__content">
            <h2>Education</h2>
            <div className="HPEC">
              <p className="jobalDesc">
                <b>Doctor of Philosophy:</b>
              </p>
              <p className="jobalDesc">
                Concentration: Evangelism/Church Revitalization<br></br>
                Southwestern Baptist Theological Seminary<br></br>Graduated:
                2020
              </p>
              <p className="jobalDesc">
                <b>M.Div Degree:</b>
              </p>
              <p className="jobalDesc">
                Concentration: International Church Planting<br></br>
                Southwestern Baptist Theological Seminary<br></br>Graduated:
                2015
              </p>
              <p className="jobalDesc">
                <b>Bachelor’s Degree:</b>
              </p>
              <p className="jobalDesc">
                Concentration: Toxicology<br></br>College: University of
                Louisiana in Monroe<br></br>Graduated: 2010
              </p>

              <p className="jobalDesc">
                <b>Certificate:</b>
              </p>
              <p className="jobalDesc">
                Subject: Full Stack Developer<br></br>Thinkful<br></br>
                Graduated: 2020
              </p>
            </div>
          </div>
        </section>
        <section className="HomePageContact">
          <div className="HPContact__background" />
          <div className="HPContact__content">
            <h2>Reach Out</h2>
            <ol className="HPCLink">
              <li>
                <a
                  className="HPCIcon far fa-envelope"
                  href="mailto:jbaldwije@gmail.com"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="HPCIcon fab fa-linkedin-in"
                  href="https://www.linkedin.com/in/jobal/"
                  target="_blank"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="HPCIcon fab fa-github"
                  href="https://github.com/jobal22"
                  target="_blank"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ol>
          </div>
        </section>
      </div>
    );
  }
}
