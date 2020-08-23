import React, { Component } from "react";

class Search extends Component {
  state = { searchTerm: "" };

  onUserInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onUserClick = () => {
    this.props.getSearchResults(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui action input">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.onUserInput}
        />
        <button className="ui button" onClick={this.onUserClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
