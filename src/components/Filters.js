// components/Filters.js
import React, { useState } from "react";
import { Form, Button, Row, Col,InputGroup  } from "react-bootstrap";
import "./Charater.css"

const Filters = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const handleFilterChange = () => {
    const queryParams = {};
    if (name) queryParams.name = name;
    if (status) queryParams.status = status;
    if (gender) queryParams.gender = gender;

    onFilterChange(queryParams);
  };

  return (
    <>
     <div style={{textAlign:"center"}}>
      <h1>Rick And Morty</h1>
    </div>
    <Form>
      <Row className="text-field-main">
        <Col>
         <InputGroup className="mb-3 " >
         <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
         </InputGroup>
          
        </Col>
        <Col>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="option-value"
          >
            <option value="" >Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="option-value"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </Form.Control>
        </Col>
        <Col>
          <Button onClick={handleFilterChange} className="search-btn" style={{borderRadius:"50px",border:"none"}}>Search</Button>
        </Col>
      </Row>
    </Form>
    </>
   
  );
};

export default Filters;
