import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import './MiddleSection.css';


const OrderSummary = () => {

  return (
    <div>
      <Row>
        <Col xs={6}>
          <h3>Order Summary</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </Col>

        <Col xs={6}>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home" disabled>Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" disabled>
                Weekly
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled">Today</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
            <div className="piechart1">
                <div className="chartIn">
                    <h2>85%</h2>
                </div>
            </div>
        </Col>


        <Col xs={6}>
            <h3 style={{fontWeight: "bold"}}>$456,005.56</h3>
            <p>form $500000.00</p>
            <p>Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do</p>
            <button className="order-button">More Details</button>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
