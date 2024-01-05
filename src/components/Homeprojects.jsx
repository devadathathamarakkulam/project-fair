import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Projectcard from './Projectcard'


function Homeprojects() {
  return (
    <div className='5'>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <Projectcard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Projectcard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Projectcard/>
            </Col>
        </Row>
    </div>
  )
}

export default Homeprojects