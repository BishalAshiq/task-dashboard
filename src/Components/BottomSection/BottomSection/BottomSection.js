import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BottomSection.css";
import CustomerMap from "../CustomerMap/CustomerMap";
import TradingMenus from "../TradingMenus/TradingMenus";
import TransactionsSummaty from "../TransactionsSummaty/TransactionsSummaty";
import g1 from "../../../Images/graph.png";

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
        </Col>
        <Col xs={6} md={4}>
          <TradingMenus></TradingMenus>
        </Col>
      </Row>
      <Row style={{marginTop: 60}}>
            <Col xs={6}>
              <TransactionsSummaty></TransactionsSummaty>
            </Col>
            <Col xs={6}>
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: 30, border: "1px solid rgb(233, 233, 233)", margin: "20px 5px 20px 5px"}}>
                <div>
                <h5 style={{fontWeight: 700}}>Average </h5>
                <h3>87,456</h3>
                <p>Order</p>
                </div>
                <img data-aos="flip-up" style={{width: 150}} src={g1} alt=""/>
              </div>
            </Col>
          </Row>
    </Container>
  );
};

export default BottomSection;
