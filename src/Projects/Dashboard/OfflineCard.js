import React from 'react';
import { Col, Row } from 'react-bootstrap';

const OfflineCard = () => (
  <Row>
      <Col md={12} lg={12} sm={12}>
          <h1 style={{ textAlign: 'center', margin: '2rem' }}>
              <i className="feather icon-wifi-off"></i>
          </h1>
      </Col>
  </Row>
);

export default OfflineCard;