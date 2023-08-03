// components/CharacterList.js
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";
import { getCharacters } from "../services/api";
import "./Charater.css"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (queryParams = {}) => {
    try {
      const response = await getCharacters(queryParams);
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  return (
    <Container>
      <Filters onFilterChange={fetchCharacters} />
      <Row className="card-main-para">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Row>
    </Container>
  );
};

export default CharacterList;
