import React, { Component } from 'react';
import './BookSearch.css'
import { Input,Icon ,Button,Popover } from 'antd';
import {Link  } from 'react-router-dom';


class BookSearch extends Component {
  render() {
    return (
      <div className="BookSearch">
        <Icon type="left-circle" className="opensideIcon"/>
        <Input placeholder="Search"/>
        <Button type="primary" block>View Books</Button>
        <Bookscollection/>
        <FilterBooks/>
      </div>
    );
  }
}

class Bookscollection extends Component{
  state = {
    book : [
      {
        id: 1,
        name: "jdkld",
        cost: 56,
        owner: "khdkj",
        author:"dkhjkdd" ,
      },
      {
        id: 2,
        name: "ndvbk",
        cost: 44,
        owner:" fhjvk",
        author: "jfdsgbnc",
      },
      {
        id:3,
        name:"khvjk" ,
        cost: 45,
        owner: "vdvfsv",
        author:"vfvdf" ,
      },
      {
        id:4,
        name: "fdfsd",
        cost: 54,
        owner: "frgrg",
        author: "frgerg",
      },
    ]
  }
  render(){
    return(
      <div className="Bookcollection">
      {this.state.book.map((item, index) => {
        return (
          <Link to={"/DetailsOfBook/"+item.name} params={{book: item}}>
            <div className="collectiondiv">
              <div className="haveimg"></div>
              <div className="bookstuff">
                <div>
                  <p className="bookName">{item.name}</p>
                  <p className="authorName">{item.author}</p>
                </div>
                <div>
                  <span className="bookmoney">Rs.{item.cost}</span>
                  <span className="distance">2km</span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
      
      </div>
    )
  }
}

class FilterBooks extends Component{
  render(){
      const content = (
        <div>
          <p>Price: Low to High</p>
          <p>Price: High to Low</p>
          <p>Distance: Near to Far</p>
          <p>Distance: Far to Near</p>
        </div>
      );
        
    return(
      <div className="filterbooks">
          <Button.Group>
          <Popover placement="topLeft" content={content} trigger="click">
            <button  className="filterbtn">Filter</button>
          </Popover>
            
          <button className="sortbtn">
            Sorted by
          </button>
        </Button.Group>
      </div>
    )
  }
}

export default BookSearch;
