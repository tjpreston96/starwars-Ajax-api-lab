import React, { Component } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

class StarshipList extends Component {
  state = { results: [] };

  async componentDidMount() {
    const shipData = await getAllStarships();
    this.setState({ results: shipData.results });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Star Wars Starships</h1>
        </header>
        <div className="ship-container">
          {this.state.results.map((ship) => (
            <div
              
              id="shipDiv"
              key={ship.name}
              style={{ width: "175px", height: "100px" }}
            >
              <Link to={{ pathname: "/starship", state: { ship } }}>
                {ship.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StarshipList;
