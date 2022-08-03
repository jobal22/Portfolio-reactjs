import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  InstagramShareButton,
  InstagramIcon,
} from "react-share";
import STORE from "../../store";
// import sparkles from "../../Img/bulbs.jpg";
import "./HomePage.css";

export default function HomePage() {
  const { files } = STORE;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="HomePage">
      <section className="HomePageVerses">
        <div className="HPTitle">
          <h1>Little Devotionals</h1>
          {files
            .slice(0)
            .reverse()
            .map((f) => (
              <div className="fileDiv" key={f.id}>
                <img className="fileImage" src={f.image} alt={f.verse} />
                <div className="fileContent">
                  <FacebookShareButton
                    url={f.url}
                    className="fileBlock"
                    quote={"A little devotional"}
                  >
                    <FacebookIcon size={20} round={true} />
                  </FacebookShareButton>
                  <p className="fileDate fileBlock">{f.date}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
