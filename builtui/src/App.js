import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import './App.css';
import Signup from './Signup.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
      </div>
    );
  }
}

export default App;
