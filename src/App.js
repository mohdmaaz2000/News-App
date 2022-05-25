import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App()  {
  const pageSize = 12;
  const apiKey = "8a4d9dbab4504776b2c6f3ec0508c635";
  // REACT_APP_API_KEY="8a4d9dbab4504776b2c6f3ec0508c635"
    return (
      <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} heading="Top Stories" category="general"/>} />
          
          <Route exact path='/business' element={<News key="business" pageSize={pageSize} apiKey={apiKey} heading="Business" category="business"/>} />

          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} heading="Entertainment" category="entertainment"/>} />

          <Route exact path='/health' element={<News key="health" pageSize={pageSize} apiKey={apiKey} heading="Health" category="health"/>} />
          <Route exact path='/science' element={<News pageSize={pageSize} apiKey={apiKey} heading="Science" category="science"/>} />

          <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={apiKey} heading="Sports" category="sports"/>} />

          <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} heading="Technology" category="technology"/>} />

          <Route exact path='/about' element={<News key="about" pageSize={pageSize} apiKey={apiKey} />} />

        </Routes>
     
      </Router>
      </>
    )
  
}

