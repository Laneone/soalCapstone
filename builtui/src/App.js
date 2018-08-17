import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginComponent/>
      </div>
    );
  }
}

export default App;
