import React, { Component } from "react";
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

class StarshipDetails extends Component {
  state = {
    url: this.props.location.state.ship.url,
    shipDetails: {},
  };

  async componentDidMount() {
    console.log(`URL == ${this.state.url}`);
    const shipDetails = await getStarshipDetails(this.state.url);
    this.setState({ shipDetails });
  }

  render() {
    const { shipDetails } = this.state;
    return (
      <div>
        <header>
          <h1>Star Wars Starships</h1>
        </header>
        <div className="details-container" style={{ padding: "35px" }}>
          <div
            className="shipDetails"
            style={{ width: "500px", height: "250px" }}
          >
            <h2>Name: {shipDetails.name} </h2>
            <h2>Model: {shipDetails.model} </h2>
            <br />
            <Link to={{ pathname: "/" }}>RETURN</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StarshipDetails;
