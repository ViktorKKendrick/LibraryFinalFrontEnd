import React from "react";
import axios from "axios";
import { Component } from 'react'
// import { NavDropdown, Nav, Navbar, Col, Row } from 'react-bootstrap'



export default class HardCoverFiction extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, data1: {}, data2: {}, data3: {}, link0 : {}, link1 : {}, link2 : {}, link3 : {} }
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
                // this.setState({link0: this.state.data.book_links})
        //         let arr1 = this.state.data.buy_links[0];
        // let arr2 = this.state.data.buy_links[1];
        // let arr3 = this.state.data.buy_links[2];
        // let arr4 = this.state.data1.buy_links[0];
        // let arr5 = this.state.data1.buy_links[1];
        // let arr6 = this.state.data1.buy_links[2];
        // let arr7 = this.state.data2.buy_links[0];
        // let arr8 = this.state.data2.buy_links[1];
        // let arr9 = this.state.data2.buy_links[2];
        // let arr10 = this.state.data3.buy_links[0];
        // let arr11 = this.state.data3.buy_links[1];
        // let arr12 = this.state.data3.buy_links[2];
                // console.log('API Call')
                // this.setState({books: response.data.results.books });
                // this.setState({list: response.data.results.list_name})
                // var books = this.state.books
                // console.log(this.state.link0[0])
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
                        <div className='col-sm-3 text-center mb-5 mb-sm-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' />
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' visibility='hidden' >
                                        <img src={this.state.data.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data.title}</h5>
                                    <h5 className="card-title">  By {this.state.data.author}</h5>
                                    <p className="card-text">{this.state.data.description}</p>
                                </div>
                                {/* <Navbar className='navfoot border-bottom' bg="light" expand="lg">
                                    <Nav>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar> */}
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-sm-3 text-center mb-5 mb-sm-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' />
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' visibility='hidden' >
                                        <img src={this.state.data1.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data1.title}</h5>
                                    <h5 className="card-title">  By {this.state.data1.author}</h5>
                                    <p className="card-text">{this.state.data1.description}</p>
                                </div>
                                {/* <Navbar className='navfoot border-bottom' bg="light" expand="lg">
                                    <Nav>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar> */}
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-sm-3 text-center mb-5 mb-sm-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' />
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' visibility='hidden' >
                                        <img src={this.state.data2.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data2.title}</h5>
                                    <h5 className="card-title">  By {this.state.data2.author}</h5>
                                    <p className="card-text">{this.state.data2.description}</p>
                                </div>
                                {/* <Navbar className='navfoot border-bottom' bg="light" expand="lg">
                                    <Nav>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar> */}
                            </div>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className='col-sm-3 text-center mb-5 mb-sm-0 border-right'>
                            <div className={"card h-100 text-center my-auto"}>
                                <div className='row'>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' />
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0' visibility='hidden' >
                                        <img src={this.state.data3.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                                    </div>
                                    <div className='col-sm-4 text-center mb-5 mb-sm-0 ' visibility='hidden' />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data3.title}</h5>
                                    <h5 className="card-title">  By {this.state.data3.author}</h5>
                                    <p className="card-text">{this.state.data3.description}</p>
                                </div>
                                
                                {/* <Row>
                                <Col/>
                                <Col>
                                <Navbar className='navfoot text-center border border-dark text-white' text='white' bg="" expand="lg">
                                    <Nav>
                                        <NavDropdown className='text-white' title="Buy Now" id="basic-nav-dropdown">
                                            <NavDropdown.Item href={''}>Amazon</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar>
                                </Col>
                                <Col/>
                                </Row> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}