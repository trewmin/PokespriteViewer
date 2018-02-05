import React, { Component } from 'react';

class SearchFilter extends Component {

  render() {
    return <input type="text" name="search" id="Search" onKeyUp={this.props.setPokemonToList} autoComplete="off"/>
  }

}

export default SearchFilter;
