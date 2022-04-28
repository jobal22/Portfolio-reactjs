import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context.js";
import { findList } from "../../address-helpers.js";
import config from "../../config";
import PropTypes from "prop-types";

export default class Addresses extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = Context;

  state = {
    id: "",
    team: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    name: "",
    email: "",
    gospepresentation: "",
    newsalvations: "",
    notes: "",
    teamId: "",
  };

  handleChangeTeam = (e) => {
    this.setState({ team: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addressId } = this.props.match.params;
    const { teamId } = this.state;
    const newAddress = { teamId };
    fetch(config.API_ENDPOINT + `/${addressId}`, {
      method: "PATCH",
      body: JSON.stringify(newAddress),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
      })
      .then(() => {
        this.resetFields(newAddress);
        this.context.updateAddress(newAddress);
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  parseTeams = () => {
    return this.context.teams.map((team) => (
      <option key={team.team_id} value={team.id}>
        {team.name}
      </option>
    ));
  };
  render() {
    const { addresses = [] } = this.context;
    const addressId = this.props.match.params.teamId;
    const address = addresses.filter(
      (address) =>
        address.team == addressId && address.gospelpresentation == "NA"
    );
    return (
      <div className="listsTeams">
        <section>
          <h3 className="listTitle">Team {addressId}</h3>
          <section>
            <div className="gbButton">
              <button
                type="button"
                className="GoBack__button"
                onClick={this.props.history.goBack}
              >
                Go Back
              </button>
            </div>
          </section>
          <section className="addrSec" onSubmit={this.handleSubmit}>
            <ol className="addrSecLinkorderList">
              {address.map((a) => (
                <li className="addrSecLinkList">
                  <Link
                    className="addrSecLink"
                    to={`/fabc/submit-address/${a.id}`}
                  >
                    <h3 className="addrSecLinkH3">
                      {a.number} {a.street} Apt {a.apt} {a.city} {a.state}{" "}
                      {a.zip}
                    </h3>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
          {/* <div className="AddAddress__button">
            <button type="submit" className="AddAddresses">
              <Link className="AddAddressesLink" to={`/add-address`}>
                Add Addresses
              </Link>
            </button>
          </div> */}
        </section>
      </div>
    );
  }
}
