import React, { Component } from 'react';
import './BookDetails.css';
import { BrowserRouter as Router, Route,Link  } from 'react-router-dom';
import { Button,Input,Icon,Rate } from 'antd';
import fortest from './images/login-back.jpg'
import Chat from './chat.js'

const ButtonGroup = Button.Group;

class BookDetails extends Component {
  render() {
    return (
        <Router>
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
                <Route Exact path ="/DetailsOfBook" component={DetailsOfBook}/>
                <Route Exact path ="/GistOutCome" component={GistOutCome}/>
                <Route Exact path ="/Chat" component={Chat}/> 
                <Route Exact path ="/Review" component={Review}/>       
            </div>
            <ButtonGroup>
                <button className="footerOfDetails"><Link to="/Chat">
                    Chat
                    </Link>
                </button>
                <button className="footerOfDetails"><Link to="/">
                    Book    
                    </Link> 
                </button>
            </ButtonGroup>
        </div>
        </Router>
    );
  }
}

class DetailsOfBook extends Component{
    render(){
        return(
            <div className="DetailsOfBook">
                <div className="forimg">
                    <img src={fortest}/>
                </div>
                <div className="setof">
                    <p className="lighthing">setof three <span className="money">Rs.300</span></p>
                    <p class="darkthing">Quiver full of Arrows</p>
                </div>
                <div className="author">
               `     <p className="lighthing">Author</p>
                    <p class="darkthing"></p>
                </div>
                <div className="soldby">
                    <p className="lighthing">soldby</p>
                    <p class="darkthing"></p>
                </div>
                <div className="bookcondition">
                    <p className="lighthing">Book Condition</p>
                    <p class="darkthing"></p>
                </div>
            </div>
        )
    }
}

class GistOutCome extends Component{
    render(){
        return(
            <div className="GistOutcome">
                <p>hi this is my book which name is so on.......</p>
            </div>
        )
    }
}

class Review extends Component{
    render(){
        return(
            <div className="Review">
              <div className="starMarks1">
                <p>Book is in excellent condition</p>
                <Rate />
                <p className="userpera">Book is delevered as a condition as promised by the seller</p>
                <Icon type="woman" /><p>Name</p>
              </div>
              <div className="starMarks2">
              
              </div>
            </div>
        )
    }
}

// class IfBook extends Component{
//     render(){
//         return(
//             <div className="ifbook">
//                 <p>Are you sure you want to Uber to pick up this book?</p>
//                 <ButtonGroup>
//                     <button className="yesbook">Yes</button>
//                     <button className="Nobook">No</button>
//                 </ButtonGroup>
//             </div>
//         )
//     }
// }

export default BookDetails;
