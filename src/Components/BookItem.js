import React from "react";
import axios from "axios";
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    componentDidMount() {
        this.callAPI();

    }

    // getRandom(max) {
    //     return Math.ceil((Math.random() + 2) * max);
    // }

    callAPI() {
        console.log(axios)
        axios.get(this.props.url)
            .then((response) => {
                console.log(response.data.results.books[0])
                this.setState({ data: response.data.results.books[this.props.ind] });
                this.setState({list: response.data.results.list_name})
            })
            .catch((error) => {
            })
        // .then( () => {

        // });
    }

    render() {
        return (
            // <div className="col-md-4 col-xs-12 mt-2 mb-2">
            <div className={"card h-100 text-center " + 'my-auto'}>
                <div className='row'>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0' ></div>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                        <img src={this.state.data.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                    </div>
                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' ></div>
                </div>


                <div className="card-body">
                    <h5 className="card-title">{this.state.data.title}</h5>
                    <h5 className="card-title">  By {this.state.data.author}</h5>
                    <p className="card-text">{this.state.data.description}</p>
                </div>
            </div>
            // </div>
        )
    }
}

