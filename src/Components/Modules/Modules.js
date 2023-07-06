import React, { Component } from "react";
import "./Modules.css";

export default class Modules extends Component {
  render() {
    return (
      <div className="modules">
        <section className="mdHeading">
          <div className="mdHDiv">
            <h1 className="mdHTitle">Equip Modules</h1>
            <p className="mdHMotto">
              Equipping this saints for the work of the ministry
            </p>
          </div>
        </section>
        <section className="mdMods">
          <div className="modCage">
            <p className="modNum">Module 1</p>
            <h4 className="modTitle">New Believers Guide</h4>
          </div>
        </section>
        <section className="mdList">
          <div className="">
            <ol></ol>
          </div>
        </section>
      </div>
    );
  }
}
