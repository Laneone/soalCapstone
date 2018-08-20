import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import './App.css';
import LoginComponent from './LoginComponent.js';
import Signup from './Signup.js';
import HomePage from './home.js';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <Route path  = "/LoginComponent" component={LoginComponent}/>
            <Route Exact path  = "/Signup" component={Signup}/> 
            <Route Exact path  = "/HomePage" component={HomePage}/>        
        </div>
      </Router>
    );
  }
}

export default App;
