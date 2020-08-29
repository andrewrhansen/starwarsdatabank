import React, { Component } from "react";

class TableBody extends Component {
  state = {};

  renderRows = () => {
    console.log("prop data: ", this.props.data);
    if (this.props.data == undefined) {
      return null;
    } else {
      return this.props.data.map((r) => (
        <tr>
          <td>{r.name}</td>
          <td>{r.birth_year}</td>
          <td>{r.gender}</td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default TableBody;
