// components/CharacterDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { getCharacters } from "../services/api";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  const fetchCharacter = async () => {
    try {
      const response = await getCharacters({ id });
      setCharacter(response.data);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  const { name, status, species, gender, image, location } = character;

  return (
    <Container>
      <Row>
        <Col md={4}>
          <img src={image} alt={name} className="img-fluid" />
        </Col>
        <Col md={8}>
          <h2>{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          {/* <p>Location: {location.name}</p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterDetail;
