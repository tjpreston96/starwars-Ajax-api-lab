import React, { Component } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

class StarshipList extends Component {
  state = { results: [] };
  render() {
    return (
      <div>
        <h3>Starship List</h3>
        <div className="ship-container">
          <Link>
          

          </Link>
        </div>
      </div>
    );
  }
}

export default StarshipList;
