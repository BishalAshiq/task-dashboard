import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MiddleSection.css';
import OrderSummary from './OrderSummary';
import Revenue from './Revenue';

const MiddleSection = () => {
    return (
       <Container style={{marginTop: 60}}>
        <Row>
        <Col xs={6}>
            <OrderSummary></OrderSummary>
        </Col>


        <Col xs={6}>
            <Revenue></Revenue>
        </Col>
      </Row>
       </Container>
    );
};

export default MiddleSection;