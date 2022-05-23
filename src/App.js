import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News pageSize={6} apiKey="8a4d9dbab4504776b2c6f3ec0508c635"/>
      </>
    )
  }
}

