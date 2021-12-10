import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from "axios";
import { Link } from 'react-router-dom'
import '../index.css';
import { useState } from "react";

export default function Search() {
    const [search, setText] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?${search.searchCat}=${search.searchText}&api-key=WSK1IWjDGtOO1YTrT8R0M3v63pA11p1j`)
            .then(function (response) {
                // console.log(response.data.results)
                // console.log(response.data.results.length)
                const results = response.data.results
                console.log(results)
                localStorage.setItem('Results', JSON.stringify(results))
                // console.log(localStorage.getItem('Results'))

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleChange = e => setText(prevState => {
        return { ...prevState, [e.target.id]: e.target.value }
    })

    return (
        <div className='lbg my-auto text-center container-fluid'>
            <Row>
                <Col />
                <Col>
                    <div className='sb text-center'>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col className='col-lg-4'>
                                    <Form.Select onChange={handleChange} id='searchCat' defaultValue={{ label: "Select Category", value: 'title' }} className='text-center'>
                                        <option value={''}>Select</option>
                                        <option value={'title'}>Book Title</option>
                                        <option value={'author'}>Author</option>
                                        <option value={'isbn'}>ISBN</option>
                                    </Form.Select>
                                </Col>
                                <Col className='col-lg-6'>
                                    <Form.Group onChange={handleChange} >
                                        <Form.Control id='searchText' value={search.searchText} type="text" placeholder="Search" />
                                        {/* <Form.Text  className="text-muted"></Form.Text> */}
                                    </Form.Group>
                                </Col>
                                <Col className='col-lg-2 bg-primary'>
                                    {/* <Nav.Link className=' text-white' activeClassName={'active'} as={Link} to="/Results">Submit</Nav.Link> */}
                                    <Button as={Link} to='/Results' variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
                <Col />
            </Row>
            <Row />
        </div>
    )
}
// 