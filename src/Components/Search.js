import React from 'react'
import { Form, Row, Col, Image, Button } from 'react-bootstrap'
// import image from "";
import '../index.css';
export default function Search() {
    return (
        <div className='lbg my-auto text-center container-fluid'>
            <Row visibility='hidden'><Image className='blim' src='./Img/Blank.png' /></Row>
            <Row>
                <Col />
                <Col>
                    <div className='sb bg-light text-center'>

                        <Form.Group className="" controlId="name">
                            <Col>
                                <Form.Control type="text" placeholder="Search" />
                                <Form.Text className="text-muted"></Form.Text>
                                <Form.Select className='text-center' aria-label="Default select example">
                                    <option value="1">Book Title</option>
                                    <option value="2">Author</option>
                                    <option value="3">ISBN</option>
                                </Form.Select>
                            </Col>
                            {/* <Button variant="primary" type="submit">Submit</Button> */}
                            
                        </Form.Group>


                    </div>
                </Col>
                <Col />
            </Row>
            <Row />
        </div>
    )
}
