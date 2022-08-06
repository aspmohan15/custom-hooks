import { Button, Card, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import useFetch from "../custom_hooks/useFetch";

const Home = () => {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";
  const fetchData = useFetch(URL);

  const dataFetching = () => {
    setData(...data, fetchData);
  };

  const clearData = () => {
    setData([]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row style={{ paddingBottom: "2%" }}>
        <Button onClick={handleShow}>Click me</Button>
      </Row>
      <Row>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="success" onClick={dataFetching}>
            Click to fetch the data
          </Button>
          <Button variant="danger" onClick={clearData}>
            Clear data
          </Button>
        </div>
      </Row>
      <Row sm md lg="4">
        {/* <div style={{ display: "flex" }}> */}
        {data?.map((data, ind) => {
          return (
            <Col style={{ padding: "2%" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Title>
                  <h1>{data.username}</h1>
                </Card.Title>
                <Card.Body>{data.website}</Card.Body>
                <Card.Footer>{data.email}</Card.Footer>
              </Card>
            </Col>
          );
        })}
        {/* </div> */}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
