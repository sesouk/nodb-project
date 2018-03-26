import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <select onChange={e => this.props.filterComics(e.target.value)}>
          <option value='Select'>Select</option>
          <option value='DP'>Deadpool</option>
          <option value='SM'>Spider-Man</option>
          <option value='IM'>Iron Man</option>
          <option value='W'>Wolverine</option>
          <option value='CA'>Captain America</option>
        </select>
      </div>
    );
  }
}

export default Filter;