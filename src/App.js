import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  apiKey = "8a4d9dbab4504776b2c6f3ec0508c635";
  // REACT_APP_API_KEY="8a4d9dbab4504776b2c6f3ec0508c635"
  render() {
    return (
      <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} heading="Top Stories" category="general"/>} />
          
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} heading="Business" category="business"/>} />

          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} heading="Entertainment" category="entertainment"/>} />

          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} heading="Health" category="health"/>} />
          <Route exact path='/science' element={<News pageSize={this.pageSize} apiKey={this.apiKey} heading="Science" category="science"/>} />

          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} heading="Sports" category="sports"/>} />

          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} heading="Technology" category="technology"/>} />

          <Route exact path='/about' element={<News key="about" pageSize={this.pageSize} apiKey={this.apiKey} />} />

        </Routes>
     
      </Router>
      </>
    )
  }
}

