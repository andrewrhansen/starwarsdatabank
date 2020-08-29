import React, { Component } from "react";
import TableBody from "./tableBody";
import Search from "./search";
import Axios from "axios";

class Body extends Component {
  state = { results: undefined };

  getSearchResults = (input) => {
    Axios.get(`https://swapi.dev/api/people/?search=${input}`).then(
      (response) => {
        this.setState({ results: response.data.results });
        console.log("saved response: ", this.state.results);
      }
    );
  };

  render() {
    return (
      <div className="ui container">
        <Search getSearchResults={this.getSearchResults} />
        <TableBody data={this.state.results} />
      </div>
    );
  }
}

export default Body;
