import React, { Component } from 'react';
import './BookDetails.css';
import { BrowserRouter as Router, Route,Link ,Redirect } from 'react-router-dom';
import { Button,Input,Icon,Rate } from 'antd';
import fortest from './images/login-back.jpg'
import Chat from './chat.js'
import Tickmark from './tickmark.js'

const ButtonGroup = Button.Group;

class BookDetails extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
  render() {
    return (
        // <Router>
        <div>
            <div className="BookDetails">
                <Icon type="left-circle" className="opensideIcon"/>
                <Input placeholder="Search"/>
                <ButtonGroup>
                <button className="btnBookdetails"><Link to="/DetailsOfBook">
                    Details
                    </Link>
                </button>
                <button className="btnBookdetails"><Link to="/GistOutcome">
                    Gist
                    </Link>
                </button>
                <button className="btnBookdetails"><Link to="/Review">
                    Review
                    </Link> 
                </button>
                </ButtonGroup>
            
            <div className="contentBookdetails">

            </div>
                <Route exact path ="/Chat" component={Chat}/>
                <Route  path ="/DetailsOfBook/:bookid" component={DetailsOfBook}/>
                <Route  path ="/GistOutCome" component={GistOutCome}/>
                <Route  path ="/Review" component={Review}/>
            </div>
                {this.state.showPopup ? <IfBook text='Close Me'closePopup={this.togglePopup.bind(this)}/>
                 : null
                 }
            <ButtonGroup>
                <button className="footerOfDetails"><Link to="/Chat">
                    Chat
                    </Link>
                </button>
                <button className="footerOfDetails" onClick={this.togglePopup.bind(this)}>
                    Book    
                </button>
            </ButtonGroup>  
        </div>
    );
  }
}

class DetailsOfBook extends Component{


    render(){
        const book = this.props.location.book;
letsdoparty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             return(
            <div className="DetailsOfBook">
                <div className="forimg">
                    <img src={fortest}/>
                </div>
                <div className="setof">
                    <p className="lighthing">setof three <span className="money">Rs.{book.cost}</span></p>
                    <p className="darkthing">{book.name}</p>
                </div>
                <div className="author">
               `     <p className="lighthing">Author</p>
                    <p className="darkthing">{book.author}</p>
                  </div>
                <div className="soldby">    
                    <p className="lighthing">soldby</p>
                    <p className="darkthing">{book.owner}   </p>
                </div>
                <div className="bookcondition">
                    <p className="lighthing">Book Condition</p>
                    <p className="darkthing"></p>
                </div>
            </div>
        )
    }
}

export class GistOutCome extends Component{
    render(){
        return(
            <div className="GistOutcome">
                <p>hi this is my book which name is so on.......</p>
            </div>
        )
    }
}

export class Review extends Component{
    render(){
        return(
            <div className="Review">
              <div className="starMarks1">
                <p className="boldpera">Book is in excellent condition</p>
                <Rate />
                <p className="userpera">Book is delevered as a condition as promised by the seller</p>
                <Icon type="woman" className="manicon"/><p className="personame">Name</p>
              </div>
              <div className="starMarks2">
                <p className="boldpera">Greate Story</p>
                <Rate />
                <p className="userpera">Archer has once again proved his mastery in story telling</p>
                <Icon type="woman" className="manicon"/><p className="personame">Name</p>
              </div>
            </div>
        )
    }
}

class IfBook extends Component{
    // state = {
    //     booked: false,
    // }
    // changeComponent=()=>{
    //     console.log("hello")
    //     this.setState({booked:true})
    // }
    render(){
        return(
            <div className="ifbook">
                <p>Are you sure you want to Uber to pick up this book?</p>
                <ButtonGroup>
                    <button className="yesbook"><Link to="/Tickmark">yes</Link></button>
                    <button className="Nobook" onClick={this.props.closePopup}>No</button>
                </ButtonGroup>
            </div>
        )
    }
}



export default BookDetails;
