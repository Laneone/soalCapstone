import React, { Component } from 'react';
import './App.css';
import BookPost from './BookPost.js'
import 'antd/dist/antd.css';     

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookPost/>
      </div>
    );
  }
}

export default App;
