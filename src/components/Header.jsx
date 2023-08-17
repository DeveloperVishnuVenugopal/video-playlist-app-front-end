import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {UploadCloud } from 'react-feather';
function Header() {
    return (
        <Navbar className="bg-danger">
            <Container>
                <Navbar.Brand >
                    <Link to={('')} style={{textDecoration:'none'}}>
                        <UploadCloud color='white'/>
                        <span className=' fs-5 fw-bolder' style={{color:'white'}}>  Video.com</span>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header