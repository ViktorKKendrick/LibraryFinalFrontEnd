import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from "axios";
import { useHistory } from 'react-router-dom'
import '../index.css';
import { useState } from "react";

export default function Search(props) {
    const history = useHistory()
    const [search, setText] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?${search.searchCat}=${search.searchText}&api-key=WSK1IWjDGtOO1YTrT8R0M3v63pA11p1j`)
            .then(function (response) {
                const results = response.data.results
                localStorage.setItem('Results', JSON.stringify(results))
                history.push('/Results')

            })
            .catch(function (error) {
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
                                    </Form.Group>
                                </Col>
                                <Col className='col-lg-2 bg-primary'>
                                    <Button to='/Results' variant="primary" type="submit">Submit</Button>
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