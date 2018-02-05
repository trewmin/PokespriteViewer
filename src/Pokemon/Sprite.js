import React, { Component } from 'react';

class Sprite extends Component {

  render() {
    const {url, alt} = this.props
    return <img src={url} alt={alt} id="Sprite"/>
  }

}

export default Sprite;
