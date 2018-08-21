import React, { Component } from 'react';
import './App.css';
import BookSearch from './BookSearch.js'
import 'antd/dist/antd.css';     

class App extends Component {
  render() {
    return (
      <div className="App">
       <BookSearch/>
      </div>
    );
  }
}

export default App;
