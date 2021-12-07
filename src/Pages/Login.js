import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

export default function Home() {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control id='email' type="text" placeholder="John.Doe@website.com" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id='password' type="password" placeholder="password" />
                        </Form.Group>
                        <Col className='d-flex justify-content-center'>
                            <Button to='/Dashboard' type='submit' className='btn btn-dark mt-3'>Login</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}