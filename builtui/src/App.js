import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import './App.css';
import LoginComponent from './LoginComponent.js';
import Signup from './Signup.js';
import BookSearch from './BookSearch';
import BookPost from './BookPost.js';
import BookDetails from './BookDetails';
import Tickmark from './tickmark.js'
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Chat from './chat.js'
import {GistOutCome, Review, DetailsOfBook } from './BookDetails'

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path  = "/Login" component={LoginComponent}/>
            <Route exact path  = "/Signup" component={Signup}/> 
            <Route path  = "/BookSearch" component={BookSearch}/> 
            <Route path  = "/BookPost" component={BookPost}/>
            <Route  exact path ="/Tickmark" component={Tickmark}/>
            <Route  path  = "/" component={BookDetails}/>
            {/* <Route  path ="/GistOutCome" component={GistOutCome}/>
            <Route  exact path ="/Chat" component={Chat}/> 
            <Route  path ="/Review" component={Review}/>                               */}
        </div>
      </Router>
    );
  }
}

export default App;
