import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import pic from "../assets/images/desi.jpg"

  function Home() {
    return (
      <div className="overlay-home">
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col xs={12} lg={5}>
              <div>
                <h1 className="font-spartan font-size-2">YOUR DREAM HOME IS WAITING FOR FOR, LET ME HELP YOU FIND IT!</h1>
                <p className="font-spartan">I am a realtor working in the <b>Miami/Fort Lauderdale</b> area. I have helped hundreds buy and sell their houses. Let me help you as well. I guarantee the best service by making sure you find the house that is right for you and you enjoy the whole process</p>
              </div>
            </Col>
            <Col xs={12} lg={5}>
              <Container>
                <Image src={pic} fluid/>
              </Container>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }


export default Home;
