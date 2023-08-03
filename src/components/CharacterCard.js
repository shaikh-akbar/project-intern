// components/CharacterCard.js
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { id, name, status, gender, image } = character;

  return (
    <Col md={4} className="mb-3">

      <Card>
        <Card.Img variant="top" src={image} style={{ borderRadius: "10px" }} />
        <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Status: {status}</Card.Title>
          {/* <Card.Title>Gender: {gender}</Card.Title>
          <Link to={`/character/${id}`} className="btn btn-primary">
            View Details
          </Link> */}
        </Card.Body>
        <Card.Body style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
          {/* <Card.Title>{name}</Card.Title>
          <Card.Title>Status: {status}</Card.Title> */}
          <Card.Title>Gender: {gender}</Card.Title>
          <Link to={`/character/${id}`} className="btn btn-primary" style={{ textDecoration: "none" }}>
            View Details
          </Link>
        </Card.Body>
      </Card>



    </Col>
  );
};

export default CharacterCard;
