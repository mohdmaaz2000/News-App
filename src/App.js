import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = 'Maaz';
  render() {
    return (
      <div>
        Hello Everyone from {this.name}
      </div>
    )
  }
}

