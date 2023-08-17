import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
    const navigate = useNavigate()
    const handleNavigate =()=>{
       navigate('/home')
    }
    return (
        <Row className='align-item-center'>
            <Col></Col>
            <Col lg={6}>
                <h3>Welcome to Video.com</h3>
                <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit laborum doloremque enim aut aperiam maxime atque blanditiis. Quo molestias 
                necessitatibus nostrum recusandae beatae asperiores incidunt. Fuga nisi cumque nulla quis. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ut natus sed sit reprehenderit 
                sunt optio, iure nam eius dolore, maxime ratione inventore consequuntur. Ipsam nihil nulla 
                reiciendis veniam corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit laborum doloremque enim aut aperiam maxime atque blanditiis. Quo molestias 
                necessitatibus nostrum recusandae beatae asperiores incidunt. Fuga nisi cumque nulla quis. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ut natus sed sit reprehenderit 
                sunt optio, iure nam eius dolore, maxime ratione inventore consequuntur. Ipsam nihil nulla 
                reiciendis veniam corporis?
                </p>
                <button onClick={handleNavigate} className='btn btn-success'>Click here to know More!!!</button>
            </Col>

            <Col></Col>
            
            <Col lg={5}>
            <img width={"400px"} height={'400px'} className='img-fluid' 
            src="https://www.freeiconspng.com/uploads/video-seo-icon-png-16.png" alt="" />
            </Col>
        </Row>
    )
}

export default Landingpage