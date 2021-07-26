import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const LinhaResumo = ({ label, total, concluidos, variant }) => {
  const getProgress = () => {
      if (!total) {
          return 0;
      }

      if (total > concluidos) {
          return (concluidos / total) * 100;
      }

      return 100;
  };
  const progress = getProgress();
  return (
      <Row className="align-items-center mt-3">
          <Col>
              <h6 className={ variant ? `text-${variant}` : ''}>{total} {label}</h6>
          </Col>
          <Col className="text-right">
              <p className="mb-0">{ total ? progress.toFixed(2): 0 }%</p>
          </Col>
          <Col sm={12}>
              <ProgressBar variant={variant} now={progress}/>
          </Col>
      </Row>
  );
};

export default LinhaResumo;