import React, { Component } from "react";
import STORE from "../../store";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  InstagramShareButton,
  InstagramIcon,
} from "react-share";
import "./Devotional.css";

export default class Devotional extends Component {
  render() {
    const { files } = STORE;
    const verseId = this.props.match.params.verseId;
    const devotional = files.find((f) => f.id == verseId);
    console.log("mom", devotional);
    return (
      <div className="devPage">
        <div className="devTitle">
          <h1>Devotional</h1>
        </div>
        <div className="devContent">
          <img
            className="fileImage"
            src={devotional.image}
            alt={devotional.verse}
          />
          <div className="fileContent">
            <FacebookShareButton
              url={devotional.url}
              className="fileBlock"
              quote={"A little devotional"}
            >
              <FacebookIcon size={20} round={true} />
            </FacebookShareButton>
            <p className="fileDate fileBlock">{devotional.date}</p>
          </div>
        </div>
      </div>
    );
  }
}
