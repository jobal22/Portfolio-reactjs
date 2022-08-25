// import React, { useState, useEffect } from "react";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   InstagramShareButton,
//   InstagramIcon,
// } from "react-share";
// import STORE from "../../store";
// // import sparkles from "../../Img/bulbs.jpg";
// import Context from "../../Context/Context";
// import "./HomePage.css";

// export default function HomePage() {
//   // const doug = HometoHomeContext;
//   console.log("hey", this.context);
//   const { files } = STORE;
//   const [offsetY, setOffsetY] = useState(0);
//   const handleScroll = () => setOffsetY(window.pageYOffset);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="HomePage">
//       <section className="HomePageVerses">
//         <div className="HPTitle">
//           <h1>Little Devotionals</h1>
//           {files
//             .slice(0)
//             .reverse()
//             .map((f) => (
//               <div className="fileDiv" key={f.id}>
//                 <img className="fileImage" src={f.image} alt={f.verse} />
//                 <div className="fileContent">
//                   {/* <FacebookShareButton
//                     url={f.url}
//                     className="fileBlock"
//                     quote={"A little devotional"}
//                   >
//                     <FacebookIcon size={20} round={true} />
//                   </FacebookShareButton> */}
//                   <p className="fileDate fileBlock">{f.date}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// }

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
    console.log("look", devotions);
    const { files } = STORE;
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
