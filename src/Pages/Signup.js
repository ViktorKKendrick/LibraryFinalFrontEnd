import React from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function Signup() {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Sign-up</h1>
                    <Form>
                    <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control id='name' type="text" placeholder="John Doe" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control id='email' type="text" placeholder="John.Doe@website.com" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id='password' type="password" placeholder="password" />
                        </Form.Group>
                        <Col className='d-flex justify-content-center'>
                            <Button to='/Dashboard' type='submit' className='btn btn-dark mt-3'>Sign up</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
