import React, { Component } from 'react';
import './BookSearch.css'
import { Input,Icon ,Button,Popover } from 'antd';
import {Link  } from 'react-router-dom';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const Search = Input.Search;


class BookSearch extends Component {
  render() {
    return (
      <div className="BookSearch">
        <div className="hidingWidth">
            <Icon type="bars" className="opensideIcon"/>
            <span className="searcheading">BOOK SEARCH</span>
        </div>
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
        storyName:"A Quiver full of Arrow",
        author:"Jeffrey Archer",
        owner: "Suma K",
        cost: 100,
      },
      {
        id: 2,
        storyName:"A Quiver full of Arrow",
        author:"Jeffrey Archer",
        owner: "Suma K",
        cost: 100,
      },
      {
        id:3,
        storyName:"A Quiver full of Arrow",
        author:"Jeffrey Archer",
        owner: "Suma K",
        cost: 100,
      },
      {
        id:4,
        storyName:"A Quiver full of Arrow",
        author:"Jeffrey Archer",
        owner: "Suma K",
        cost: 100,
      },
    ]
  }
  render(){
    return(
      <Post url="/api/user" data={{id: "12345"}}>
        {(error, response, isLoading, onReload) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (
              <div>
                {response.data.message} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button>
              </div>
            )
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Post>
      // <div className="Bookcollection">
      //  <Search
      //     placeholder="input search text"
      //     onSearch={value => console.log(value)}
      //     style={{ width: 200 }}
      //   />
      //   <br /><br />
      //   {this.state.book.map((item, index) => {
      //     return (
      //       <Link to={{pathname: "/DetailsOfBook/"+item.storyName, book: item }}  key={index}>
      //         <div className="collectiondiv">
      //           <div className="haveimg"></div>
      //           <div className="bookstuff">
      //             <div>
      //               <p className="bookName">{item.storyName}</p>
      //               <p className="authorName">{item.author}</p>
      //               <p className="authorName">{item.owner}</p>
      //             </div>
      //             <div>
      //               <span className="bookmoney">Rs.{item.cost}</span>
      //             </div>
      //           </div>
      //         </div>
      //       </Link>
      //     )
      //   })}
      
      // </div>
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
