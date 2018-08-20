import React, { Component } from 'react';
import 'antd/dist/antd.css';     
import './App.css';
import Signup from './Signup.js';
import LoginComponent from './LoginComponent.js';

class App extends Component {
  constructor(){
    super()
    this.state={
      isregister:false
    }
  }

  onRegisterClick=()=>{
    this.setState({isregister: !this.state.isregister})
  }

  render() {
    return (
      <div className="App">
        {this.state.isregister===true ? <Signup/>:<LoginComponent onRegisterClick={this.onRegisterClick}/>} 
      </div>
    );
  }
}

export default App;
