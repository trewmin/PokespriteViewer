import React, { Component } from 'react';
import PokemonListContainer from './Pokemon/PokemonListContainer';
import Sprite from './Pokemon/Sprite'

class App extends Component {

  state= {
    spriteUrl: "",
    spriteName: ""
  }

  render() {
    return (
      <div id="App">
        <PokemonListContainer changeSprite={this.changeSprite}/>
        <Sprite url={this.state.spriteUrl} alt={this.state.spriteName}/>
      </div>
    );
  }

  changeSprite = (newSpriteUrl, newSpriteName) => {
    this.setState({
      spriteUrl: newSpriteUrl,
      spriteName: newSpriteName
    })
  }
}

export default App;
