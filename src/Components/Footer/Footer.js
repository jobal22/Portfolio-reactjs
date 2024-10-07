import React, { Component } from "react";
import Context from "../../Context/Context";
// import "./HomePage.css";
import "./Footer.css"

export default class Footer extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = Context;

  render() {
    return (
      <div className="Footer">
        <section className="FooterContact">
          <div className="FContact__content">
            <ol className="FLink">
              <li>
                <a
                  className="FIcon far fa-envelope"
                  href="mailto:jobaltheevangelist@gmail.com"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="FIcon fab fa-linkedin-in"
                  href="https://www.linkedin.com/in/jobal/"
                  target="_blank"
                  aria-hidden="true"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="FIcon fa-brands fa-instagram"
                        href="https://www.instagram.com/firefliesthecomic/reels/" 
                        target='_blank'
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
