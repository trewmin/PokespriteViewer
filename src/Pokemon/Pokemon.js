import React, { Component } from 'react';

class Pokemon extends Component {

  state = {
    name: this.props.name,
    spriteUrl: "",
  }

  getSinglePokemon = () => {
    const initRequestUrl = this.props.url
    return fetch( initRequestUrl )
        .then(resp => resp.json())
  }

  render() {
    const {name, spriteUrl} = this.state
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    return (
      <button className='pokeButton' onClick={this.onPokemonCapture}>{nameCapitalized}</button>
    )
  }

  onPokemonCapture = () => {
    this.getSinglePokemon()
        .then( p => this.setState({
          spriteUrl: p.sprites.front_default,
        })).then( res => this.props.changeSprite(this.state.spriteUrl, this.state.name))

  }

}

export default Pokemon;
