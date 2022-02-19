import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
const apiKey = "b2b418c85d1d4be3b811c7c917ead628";
export default class App extends Component {
  pageSize = 6;
  render() {
    return <div>
      <BrowserRouter>
        <Navbar/>
        <Routes path>
          <Route  path="/" element={<News key = "general" pageSize={this.pageSize} country="in" category="general" apiKey = {apiKey}/>}/>
          <Route  path="/business" element={<News key = "business" pageSize={this.pageSize} country="in" category="business" apiKey = {apiKey}/>}/>
          <Route  path="/entertainment" element={<News key = "entertainment" pageSize={this.pageSize} country="in" category="entertainment" apiKey = {apiKey}/>}/>
          <Route  path="/general" element={<News key = "general" pageSize={this.pageSize} country="in" category="general" apiKey = {apiKey}/>}/>
          <Route  path="/health" element={<News key = "health" pageSize={this.pageSize} country="in" category="health" apiKey = {apiKey}/>}/>
          <Route  path="/science" element={<News key = "science" pageSize={this.pageSize} country="in" category="science" apiKey = {apiKey}/>}/>
          <Route  path="/sports" element={<News key = "sports" pageSize={this.pageSize} country="in" category="sports" apiKey = {apiKey}/>}/>
          <Route  path="/technology" element={<News key = "technology" pageSize={this.pageSize} country="in" category="technology" apiKey = {apiKey}/>}/>
        </Routes>
      </BrowserRouter>
    </div>;
  }
}
