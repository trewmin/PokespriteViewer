import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {

  render() {
    return (
      <div id="PokemonList">
        { this.props.pokemon.map( p => <Pokemon name={p.name} url={p.url} key={p.name} changeSprite={this.props.changeSprite}/>)}
      </div>
    );
  }

}

export default PokemonList;
