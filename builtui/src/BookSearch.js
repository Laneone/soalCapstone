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
  render(){
    return(
      <div className="Bookcollection">
      <Link to="/DetailsOfBook"><div class="collectiondiv">
        <div className="haveimg"></div>
        <div className="bookstuff">
          <div>
            <p className="bookName">A Quiver full of arrows</p>
            <p className="authorName">Jeffrey Archer</p>
          </div>
          <div>
            <span className="bookmoney">Rs.300</span>
            <span className="distance">2km</span>
          </div>
        </div>
        </div></Link>
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
            <Button type="primary" className="filterbtn">Filter</Button>
          </Popover>
            
          <Button type="primary" className="sortbtn">
            Sorted by
          </Button>
        </Button.Group>
      </div>
    )
  }
}

export default BookSearch;
