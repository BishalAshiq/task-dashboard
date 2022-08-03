import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MiddleSection.css";
import OrderSummary from "./OrderSummary";
import Dropdown from "react-bootstrap/Dropdown";
import Revenue from "./Revenue";

const MiddleSection = () => {
  return (
    <Container style={{ marginTop: 60 }}>
      <Row>
        <Col xs={6}>
          <OrderSummary></OrderSummary>
        </Col>

        <Col xs={6}>
          <div className="Rev-nav">
            <div>
              <h3>Revenue</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="Light" className="Monthly">
                Monthly
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="rev-head">
            <div>
              <p>Income</p>
              <h3>$126,000</h3>
            </div>
            <h6 className="rev-button">All food</h6>
            <h6>food</h6>
            <h6>Beverage</h6>
            
          </div>
          <Revenue></Revenue>
        </Col>
      </Row>
    </Container>
  );
};

export default MiddleSection;
