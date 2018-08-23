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


class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <Route  path  = "/DetailsOfBook" component={BookDetails}/>
            <Route exact path  = "/Login" component={LoginComponent}/>
            <Route exact path  = "/Signup" component={Signup}/> 
            <Route exact path  = "/BookSearch" component={BookSearch}/> 
            <Route path  = "/BookPost" component={BookPost}/>
            <Route  exact path ="/Tickmark" component={Tickmark}/>
                                    
        </div>
      </Router>
    );
  }
}

export default App;
