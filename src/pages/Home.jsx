import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Catogory from "../components/Catogory";
import { Link } from "react-router-dom";

function Home() {
  

  const [serverRes, setServerRes] = useState({});
  const handleRes = (res) => {
    setServerRes(res);
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h1 className="text-info">All Video Cards</h1>
        <Add handleRes={handleRes} />
        <Link to={'/watch-history'} className='ms-auto' style={{ textDecoration: 'none', fontSize: '25px', color: 'white' }}>
            Watch History
        </Link>
              </div>

      <div className="container-fluid">
        <Row className="mt-5">
          <Col lg={8} className="ms-5">
            <View serverRes={serverRes} />
          </Col>
          <Col>
            <Catogory />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
