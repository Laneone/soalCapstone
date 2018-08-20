import React, { Component } from 'react';
import './BookPost.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom';
import { Input } from 'antd';

const { TextArea } = Input;

const ButtonGroup = Button.Group;

class BookPost extends Component {
    state={
        afterSaveText:"Save and Continue",
        bookPostHead:"Post a book to rent out",
    }
  render() {
    return (
     <Router>
        <div className="BookPost">
            <p className="posthead">{this.state.bookPostHead}</p>
            <ButtonGroup>
            <Button type="primary"><Link to="/Details">
                Details
                </Link>
            </Button>
            <Button type="primary"><Link to="/MsgforImage">
                Images
                </Link>
            </Button>
            </ButtonGroup>
            <div>
            <Route path  = "/Details" component={Details}/>
            <Route path  = "/Gist" component={Gist}/>
            <Route path  = "/Images" component={Images}/>
            <Route path  = "/MsgforImage" component={ MsgforImage}/>
            </div>
            <ButtonGroup>
            <Button type="primary" block><Link to="/Gist">{this.state.afterSaveText}</Link></Button>
            </ButtonGroup>
        </div>
      </Router>
    );
  }
}


class Details extends Component{
    render(){
        return(
            <div className="bookpostDetails">
                <lable>How many books?</lable><br/>
                <input type="text" /><br/>
                <lable>Books title(s)</lable><br/>
                <input type="text" /><br/>
                <lable>Author(s)</lable><br/>
                <input type="text" /><br/>
                <lable>Genre</lable><br/>
                <input type="text" /><br/>
                <lable>Book(s) condition</lable><br/>
                <input type="text" /><br/>
                <lable>Price</lable><br/>
                <input type="text" />
            </div>
        )
    }
}

class Gist extends Component{
    render(){
        return(
            <div className="Gist">
                <p className="gistText">Gist</p>
                <TextArea rows={17}/>
            </div>
        )
    }
}


class MsgforImage extends Component{
    render(){
        return(
            <div className="msgforimage">
                <p className="imagemsgtext">Pless add some images to coomplete the process</p>
                <Button type="primary" block><Link to="/Images">Ok</Link></Button>
            </div>
        )
    }
}
class Images extends Component{
    render(){
        return(
            <div className="bookpostimages">

            </div>
        )
    }
}

export default BookPost;
