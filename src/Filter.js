import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <select onChange={e => this.props.changes(e.target.value)}>
          <option>Select</option>
          <option>Deadpool</option>
          <option>Spider-Man</option>
          <option>Iron Man</option>
          <option>Wolverine</option>
          <option>Captain America</option>
        </select>
      </div>
    );
  }
}

export default Filter;