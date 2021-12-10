// import React, { Component } from 'react';
// import axios from 'axios';
// import Search from './Search.js'
// // import Movies from './Movies';

// class Srch extends Search {
//   state = {
//     books: Search.results,
//     loading: false,
//     value: ''
//   };
//   render(){
//       console.log(this.state.books)
//       return(
//           <h1>hello</h1>
//       )
//   }
// }

//   search = async val => {
//     this.setState({ loading: true });
//     const res = await axios(
//         `https://api.nytimes.com/svc/books/v3/reviews.json?title=${val}&api-key=kwbFp1dnzGkGK0nRL2bdPGqfmZEPTYB5`
//         );
//     const books = await res.data.results;

//     this.setState({ books, loading: false });
//   };

//   onChangeHandler = async e => {
//     this.search(e.target.value);
//     this.setState({ value: e.target.value });
//   };

//   get renderBooks() {
//     let books = <h1>There's no books</h1>;
//     if (this.state.books) {
//       books = <Books list={this.state.books} />;
//     // }

//     return books;
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.value}
//           onChange={e => this.onChangeHandler(e)}
//           placeholder="Type something to search"
//         />
//         {this.renderBooks}
//       </div>
//     );
//   }
// }

// export default Srch