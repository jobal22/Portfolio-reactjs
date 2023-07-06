import React, { Component } from "react";
import HM from "./Menu/HM";
import "./Lessons.css";

export default class Overview extends Component {
  render() {
    return (
      <div className="lessonsCage">
        <HM />
        <div className="lesTitl lc">
          <p>Lesson 1.1</p>
          <h1>Getting Started</h1>
        </div>
        <div className="lesSect lc">
          <div className="lesSectIntro">
            <div className="lsi1 lc">
              <h4 className="lsiv">
                "Therefore, if anyone is in Christ, he is a new creation."
              </h4>
              <h5 className="lsir">2 Corinthians 5:17</h5>
            </div>
            <div className="lsi2 lc">
              <h2 className="lsist">Greeting</h2>
              <p className="lsisti">
                Welcome to the New Believers module! Chances are you are here
                because you recently were saved, have been saved and wanting to
                grow in your knowledge of God, or just interested in learning
                about Christianity. I hope that you find these lessons helpful
                and as a tool to grow deeper with God.
              </p>
            </div>
            <div className="lsi3 lc">
              <h2 className="lsist">Module Overview</h2>
              <p className="lsisti">
                The New Believers module is made up of eight essential lessons.
                Each lesson is designed to give you a better understanding of
                your new life with Christ and your responsibility as a believer
                in bringing glory to God. The first three lessons focus on the
                Gospel, Believer’s Testimony, and Assurance of Salvation. These
                lessons are designed to help you better understand the Good News
                about Jesus, how it has personally affected your life, and how
                it will continuously transform you each day. The fourth lesson
                is on Baptism which is one of the first steps of obedience for
                every new believer. The last four lessons focus on the four
                disciplines a believer should be walking in daily: Evangelism,
                Bible, Prayer, and Fellowship.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
