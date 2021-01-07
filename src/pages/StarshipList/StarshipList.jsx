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
          <h1>Starship List</h1>
        </header>
        <div className="ship-container">
          {this.state.results.map((name) => (
            <div
              id="shipDiv"
              key={name.name}
              style={{ width: "100px", height: "100px" }}
            >
              <Link to={{ pathname: "/starship", state: { name } }}>
                {name.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StarshipList;
