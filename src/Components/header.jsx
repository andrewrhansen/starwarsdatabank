import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui menu">
        <div className="header item">Star Wars Databank</div>
        <a className="item">People</a>
        <a className="item">Planets</a>
      </div>
    );
  }
}

export default Header;
