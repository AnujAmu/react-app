import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

import facesList from '../data/facesList.json';
import './images-container.css'

const ImagesContainer = () => {
  return (
    <div className="container">
      <Row gutter={40}>
        {(facesList).map(co => 
          <Col 
            xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
            lg={{ span: 2 }} xl={{ span: 1 }} className="box">
              {/* <img src={`${co.image}.jpg`} width="100%"/> */}
              <div className="text">{co.name}</div>
              </Col>
        )}
      </Row>
    </div>
  );
}

export default ImagesContainer;