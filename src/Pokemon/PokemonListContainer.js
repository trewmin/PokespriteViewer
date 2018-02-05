import React, { Component } from 'react';
import PokemonList from './PokemonList';
import SearchFilter from './SearchFilter';

class PokemonListContainer extends Component {

  state = { allPokemon: [], pokemonToList: []}

  getPokemon = () => {
    const initRequestUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=802'
    return fetch( initRequestUrl )
        .then(resp => resp.json())
        .then(json => json.results )
  }

  render() {
    return (
      <div id="PokemonListContainer">
        <SearchFilter setPokemonToList={this.setPokemonToList}/>
        <PokemonList pokemon={this.state.pokemonToList} changeSprite={this.props.changeSprite}/>
      </div>
    );
  }

  setPokemonToList = (e) => {
    e.target.value.length > 0 ?
      this.setState({
        pokemonToList: this.state.allPokemon.filter( p => p.name.includes(e.target.value.toLowerCase()))
      })
      : this.setState({
        pokemonToList: this.state.allPokemon
      })
  }

  componentDidMount() {
      this.getPokemon()
      .then(results => this.setState({allPokemon: results, pokemonToList: results}))
  }

}

export default PokemonListContainer;
