import React from 'react'
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default function MyFooter() {
    return (
        <div className='container-fluid'>
            <footer className="footer">
                {/* <Container className=''> */}
                <Row className='container-fluid'>
                    <Col className='imgCol col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='https://www.instagram.com/wasabi.64/'>
                            <img src='./Img/IG.png' alt='Instagram' height='30px'/>
                        </a>
                    </Col>
                    <Col className='imgCol col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='https://www.linkedin.com/in/kolekendrick/'>
                            <img src='./Img/LinkedIn1.jpg' alt='LinkedIn' height='28px'/>
                        </a>
                    </Col>
                    <Col className='col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='mailto:viktor.kendrick@gmail.com'>
                            <img src='./Img/Mail.png' alt='Mail' height='30px'/>
                        </a>
                    </Col>
                    <Col className='imgCol col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        
                        <a className='nav-link' href='https://www.codewars.com/users/ViktorKKendrick'>
                            
                            <img src="./Img/CW.png" alt="CodeWars" height="30px"/>
                        </a>
                    </Col>
                    <Col className='imgCol col-sm-1 md-auto d-flex align-items-center justify-content-center'>
                        <a className='nav-link' href='https://github.com/ViktorKKendrick'>
                            <img src="./Img/GH.png" alt="GitHub" height="37px"/>
                        </a>
                    </Col>
                    <Col className='col-lg-7 text-center mb-8 mb-lg-1 d-flex align-items-center justify-content-center'>
                        <p className=' fp text-center'>
                        <p className='fp text-center'>©2021 Viktor K. Kendrick. All Rights Reserved.</p>
                        </p>
                    </Col>
                </Row>
                {/* </Container> */}
            </footer>
        </div>
    )
}