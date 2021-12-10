import React from "react";
import axios from "axios";
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class HardCoverFiction extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, data1: {}, data2: {}, data3: {}, books: [] }
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
                // console.log(response.data.results.books)
                this.setState({ data: response.data.results.books[this.props.ind] });
                this.setState({ data1: response.data.results.books[this.props.ind + 1] });
                this.setState({ data2: response.data.results.books[this.props.ind + 2] });
                this.setState({ data3: response.data.results.books[this.props.ind + 3] });
                // console.log('API Call')
                // this.setState({books: response.data.results.books });
                // this.setState({list: response.data.results.list_name})
                // var books = this.state.books
                // console.log(books[0])
            })
            .catch((error) => {
            })
        // .then( () => {

        // });
    }

    render() {
        return (
            // <div className="col-md-4 col-xs-12 mt-2 mb-2">
            <>
                <div class='container-fluid bg-light'>
                    <div className={'row bg-light'}>
                        <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                        <img src={this.state.data.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data.title}</h5>
                                    <h5 className="card-title">  By {this.state.data.author}</h5>
                                    <p className="card-text">{this.state.data.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                        <img src={this.state.data1.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data1.title}</h5>
                                    <h5 className="card-title">  By {this.state.data1.author}</h5>
                                    <p className="card-text">{this.state.data1.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                        <img src={this.state.data2.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data2.title}</h5>
                                    <h5 className="card-title">  By {this.state.data2.author}</h5>
                                    <p className="card-text">{this.state.data2.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                        <img src={this.state.data3.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data3.title}</h5>
                                    <h5 className="card-title">  By {this.state.data3.author}</h5>
                                    <p className="card-text">{this.state.data3.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}