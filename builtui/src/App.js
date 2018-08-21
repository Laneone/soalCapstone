import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import './App.css';
import LoginComponent from './LoginComponent.js';
import Signup from './Signup.js';
import BookSearch from './BookSearch';
import BookPost from './BookPost.js';
import BookDetails from './BookDetails';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <Route path  = "/LoginComponent" component={LoginComponent}/>
            <Route Exact path  = "/Signup" component={Signup}/> 
            <Route Exact path  = "/BookSearch" component={BookSearch}/> 
            <Route Exact path  = "/BookPost" component={BookPost}/> 
            <Route Exact path  = "/DetailsOfBook" component={BookDetails}/>               
        </div>
      </Router>
    );
  }
}

export default App;
