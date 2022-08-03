import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../../Img/Jobal-photo.jpg";
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
        <div>
          <h1>Little Devotionals</h1>
          {files
            .slice(0)
            .reverse()
            .map((f) => (
              <div className="fileDiv" key={f.id}>
                <img className="fileImage" src={f.image} alt={f.verse} />
                <p className="fileDate">{f.date}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
