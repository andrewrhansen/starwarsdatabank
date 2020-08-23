import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import "fomantic-ui-css/semantic.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
