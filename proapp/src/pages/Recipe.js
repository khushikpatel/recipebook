import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <Container>
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={Link} to="#">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="#">Occasion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="#">Cuisine</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="#">Popular</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col>
          <h2>Recipe Categories</h2>
          <div className="art-theater-event-container">
          <div className="comedy-grid">
          <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link className="art-theater-event-title" to="/recipe/breakfast">Breakfast</Link>
            <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link  className="art-theater-event-title" to="/recipe/brunch">Brunch</Link>
            <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link className="art-theater-event-title" to="/recipe/lunch">Lunch</Link>
            <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link className="art-theater-event-title" to="/recipe/dinner">Dinner</Link>
            <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link className="art-theater-event-title" to="/recipe/icecream">Ice Cream</Link>
            <img src='../components/recipefolder/images/breakfast.jpg' className="art-theater-event-image" ></img>
            <Link className="art-theater-event-title" to="/recipe/dessert">Dessert</Link>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Recipe;
