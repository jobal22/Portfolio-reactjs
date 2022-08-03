import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import STORE from "../../store";
import "./Verse.css";

export default function Verse() {
  const { files } = STORE;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="versePage">
      <div className="vPTitle">
        <h1>Verses</h1>
        <p>Click on a verse to see the devotional</p>
      </div>
      <div className="vPSelect">
        {files.map((f) => (
          <Link key={f.id} to={`/verse/${f.id}`} className="vPLink">
            <p>{f.verse}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
