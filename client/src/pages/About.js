import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import pic from "../assets/images/map.png"

  function About() {
    return (
      <div className="overlay-home">
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col xs={12} lg={5}>

            </Col>
            <Col xs={12} lg={5}>
              <Container>
                <Image src={pic} fluid />
              </Container>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }


export default About;
