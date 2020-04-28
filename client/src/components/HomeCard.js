import React from 'react';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import Col from 'react-bootstrap/Col'

  function HomeCard(props) {
    return (
      <Col xs={4}>
        <Card className="margin-bottom-card">
          <Card.Img variant="top" src={props.photo} className="card-img-top"/>
          <ListGroup variant="flush">
            <ListGroup.Item>{"$ " + props.price}</ListGroup.Item>
            <ListGroup.Item>{props.description}</ListGroup.Item>
            <ListGroup.Item>{props.address}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    );
  }


export default HomeCard;
