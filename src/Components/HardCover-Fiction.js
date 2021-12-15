import React from "react";
import axios from "axios";
import { Component } from 'react'

export default class HardCoverFiction extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, data1: {}, data2: {}, data3: {}, link0: {}, link1: {}, link2: {}, link3: {} }
    }

    componentDidMount() {
        this.callAPI();

    }

    callAPI() {
        axios.get(this.props.url)
            .then((response) => {
                this.setState({ data: response.data.results.books[this.props.ind] });
                this.setState({ data1: response.data.results.books[this.props.ind + 1] });
                this.setState({ data2: response.data.results.books[this.props.ind + 2] });
                this.setState({ data3: response.data.results.books[this.props.ind + 3] });
            })
            .catch((error) => {
            })
            .then(() => {

            });
    }

    render() {
        const fullData = [this.state.data, this.state.data1, this.state.data2, this.state.data3]

        return (
            <>
                <div className='container-fluid bg-light'>
                    <div className={'row bg-light'}>
                        {fullData.map(x => {
                            return (
                                <div className='col-sm-3 text-center mb-5 mb-sm-0 border-right'>
                                    <div className={"card h-100 text-center my-auto"}>
                                        <div className='row'>
                                            <div className='col-sm-4 text-center mb-5 mb-sm-0' />
                                            <div className='col-sm-4 text-center mb-5 mb-sm-0' visibility='hidden' >
                                                <img src={x.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                            </div>
                                            <div className='col-sm-4 text-center mb-5 mb-sm-0 ' visibility='hidden' />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">{x.title}</h5>
                                            <h5 className="card-title">  By {x.author}</h5>
                                            <p className="card-text">{x.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}