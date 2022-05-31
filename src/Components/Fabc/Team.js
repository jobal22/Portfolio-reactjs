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
    return (
      <div className="card">
        <div className="">
          <h1 className="title">Teams</h1>
        </div>
        <ol className="listCage">
          {adOrder.map((team) => (
            <li className="list">
              <Link
                className="listLink"
                key={team.id}
                to={`/fabc/team/${team}`}
              >
                <h2 class="listLinkTx">Team {team}</h2>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
