import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context.js";
import { countAddressesForList } from "../../address-helpers";

export default class Team extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = Context;

  render() {
    const { addresses = [], lists = [] } = this.context;
    const ads = addresses.map((a) => a.team);
    let adSort = ads.sort((a, b) => ads[b]);
    let adOrder = adSort.filter((a, index) => adSort.indexOf(a) === index);
    // var uniq = ads
    //   .map((ad) => {
    //     return { count: 1, ad: ad };
    //   })
    //   .reduce((a, b) => {
    //     a[b.ad] = (a[b.ad] || 0) + b.count;
    //     return a;
    //   }, {});
    // var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b]);
    // console.log("jobal", adOrder);
    return (
      <div className="card">
        <div className="">
          <h1 className="title">Teams</h1>
        </div>
        <ul className="list">
          {adOrder.map((team) => (
            <Link className="listLink" key={team.id} to={`/fabc/team/${team}`}>
              <h2>Team {team}</h2>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
