import React, { Component } from "react";
import Context from "../../Context/Context";
import "./HomePage.css";
import STORE from "../../store";
import Dial from "../../Img/pwg.png";

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
        <section className="HomePageVerses">
          <div className="HPTitle">
            <h1 className="HPTT">Little Devotionals</h1>
            {devotions
              .slice(0)
              .reverse()
              .map((f) => (
                <div>
                  <div className="fileDiv" key={f.id}>
                    <div className="fileDiv2">
                      <h1 className="titleF">{f.title}</h1>
                      <p className="verF">{f.verse}</p>
                      <p className="refF">{f.ref}</p>
                    </div>
                    <div className="knot" />
                    <div className="devoOver">
                      <div className="devoF">
                        <p>{f.devo}</p>
                        <p>
                          <b>{f.appl}</b>
                        </p>
                      </div>
                      <div className="dial">
                        <img
                          className="dialPhoto"
                          src={Dial}
                          alt="plant, water, grow"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fileContent">
                    <p className="fileDate fileBlock">{f.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    );
  }
}
