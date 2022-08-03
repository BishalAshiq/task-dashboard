import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BottomSection.css";
import CustomerMap from "../CustomerMap/CustomerMap";
import TradingMenus from "../TradingMenus/TradingMenus";
import TransactionsSummaty from "../TransactionsSummaty/TransactionsSummaty";

const BottomSection = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} id="Bottom-Section">
          <div className="bottom-nav">
            <div>
              <h4>Customer Map</h4>
              <p style={{ marginTop: -7, fontSize: 12 }}>
                Lorem Ipsum dolor sit amet consectetur
              </p>
            </div>
            <h5>Monthly</h5>
            <h5 style={{ color: "#EA7A9A", borderBottom: "2px solid #EA7A9A" }}>
              Weekly
            </h5>
            <h5 style={{ marginRight: 35 }}>Today</h5>
          </div>
          <CustomerMap></CustomerMap>
          
          <Row style={{marginTop: 60}}>
            <Col xs={6}>
              {/* <TransactionsSummaty></TransactionsSummaty> */}
            </Col>
            <Col xs={6}>xs=6</Col>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <TradingMenus></TradingMenus>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomSection;
