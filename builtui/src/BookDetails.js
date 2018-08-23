import React, { Component } from 'react';
import './BookDetails.css';
import { BrowserRouter as Router, Route,Link ,Redirect } from 'react-router-dom';
import { Button,Input,Icon,Rate } from 'antd';
import fortest from './images/login-back.jpg'
import Chat from './chat.js'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const Search = Input.Search;
const ButtonGroup = Button.Group;

class BookDetails extends Component {
  render() {
      console.log(this.props.location.book.id)
    return (
        // <Router>
        <div>                                                                                       
            <div className="BookDetails">
            <div className="hidingWidth">
                <Icon type="bars" className="opensideIcon"/>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                </div>
                <ButtonGroup>
                <button className="btnBookdetails detailbtn"><Link to={"/DetailsOfBook/"+this.props.location.book.id}>
                    Details
                    </Link>
                </button>
                <button className="btnBookdetails"><Link to={"/DetailsOfBook/"+this.props.location.book.id+"/GistOutcome"}>
                    Gist
                    </Link>
                </button>
                <button className="btnBookdetails"><Link to={"/DetailsOfBook/"+this.props.location.book.id+"/Review"}>
                    Review
                    </Link>
                </button>
                </ButtonGroup>
            
            <div className="contentBookdetails">

            </div>
                <Route exact path ="/DetailsOfBook/:bookid/Chat" component={Chat}/>
                <Route exact path ="/DetailsOfBook/:bookid" component={DetailsOfBook}/>
                <Route  exact path ="/DetailsOfBook/:bookid/GistOutCome" component={GistOutCome}/>
                <Route  exact path ="/DetailsOfBook/:bookid/Review" component={Review}/>
            </div>
                {this.props.showPopup ? <IfBook text='Close Me'closePopup={this.props.togglePopup.bind(this)}/>
                 : null
                 }  
        </div>
    );
  }
}

class DetailsFooter extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    render(){
        console.log("$$$$$$$$$$$$$$", this.props.location)
        return(
            <div className="DetailsFooter">
                <ButtonGroup>
                <button className="footerOfDetails"><Link to="/DetailsOfBook/Chat">
                    Chat
                    </Link>
                </button>
                <button className="footerOfDetails" onClick={this.togglePopup.bind(this)}>
                    Book    
                </button>
            </ButtonGroup> 
            </div>
        )
    }
}

class DetailsOfBook extends Component{
    render(){
        const book = this.props.location.book;
        console.log(book);
        return (
            <div className="DetailsOfBook">
                <div className="forimg">
                    <img src={fortest}/>
                </div>
                <div className="setof">
                    <p className="lighthing">setof three <span className="money">Rs.{book.cost}</span></p>
                    <p className="darkthing">{book.storyName}</p>
                </div>
                <div className="author">
                    <p className="lighthing">Author</p>
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
                <DetailsFooter/>
            </div>
        )
    }
}



class GistOutCome extends Component{
    render(){
        return(
            <div className="GistOutcome">
                <p>hi this is my book which name is so on.......</p>
                <DetailsFooter/>
            </div>
        )
    }
}

class Review extends Component{
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
              <DetailsFooter/>
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
                <DetailsFooter/>
            </div>
        )
    }
}



export default BookDetails;
