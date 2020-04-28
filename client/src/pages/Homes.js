import React, {useState} from 'react';
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import HomeCard from '../components/HomeCard.js'
import { useForm } from "../util/hooks";

import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

  function Homes() {
    const [show, setShow] = useState(false);
    const [photoFile, setPhotoFile] = useState({});
    const [originalPhoto, setOriginalPhoto] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { onChange, onSubmit, values } = useForm(addHomeCallback, {
    price: 0,
    description: "",
    photo: "",
    address: ""
  });

    const [addHome] = useMutation(ADD_HOME, {
      variables: values
    });

    function addHomeCallback() {
      addHome();
      setShow(false);
    }

    function photoSelectedHandler(event) {
      console.log(event.target.files.length);
      if (event.target.files.length > 0) {
        var a = new FileReader();
        a.readAsDataURL(event.target.files[0]);
        a.onload = function(e) {
          values.photo = e.target.result;
          setPhotoFile(e.target.result);
        };
      } else {
        setPhotoFile(originalPhoto);
        values.photo = originalPhoto;
      }
    }



    const { loading, error, data }  = useQuery(GET_HOMES);

    if(loading) return 'Loading...';
    if(data != null)
      console.log(data.getHomes);
    return (
      <>
        {data && (
          <Container className="homeContainer">
            <Row>
              <CardDeck>
                {data.getHomes.map((home, index) =>
                  <HomeCard key={index} description={home.description} address={home.address} price={home.price} photo={home.photo}/>
                )}
              </CardDeck>
            </Row>
            <Row>
              <Button onClick={handleShow}>
                Add Home
              </Button>
            </Row>

            <Modal show={show} onHide={handleClose}>
              <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Home</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="price">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" placeholder="Enter price" onChange={onChange} name="price"/>
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Label>description</Form.Label>
                      <Form.Control as="textarea" placeholder="Enter description" onChange={onChange} name="description"/>
                    </Form.Group>
                    <Form.Group controlId="photo">
                      <Form.Label>Photo</Form.Label>
                      <Form.Control type="file" onChange={(() => onChange, photoSelectedHandler)} name="photo"/>
                    </Form.Group>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" onChange={onChange} name="address"/>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>

          </Container>
        )}
      </>
    );
  }

const GET_HOMES = gql `
  {
    getHomes {
      address
      description
      price
      photo
    }
  }
`;

const ADD_HOME = gql`
  mutation register(
    $price: String!
    $description: String!
    $photo: String!
    $address: String!
  ){
    addHome(
      homeInput:{
        price: $price
        description: $description
        photo: $photo
        address: $address
      }
    )
  }
`


export default Homes;
