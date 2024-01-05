import React from 'react'
import Projectcard from '../components/Projectcard'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
function Projects() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}}>
        <div className='text-center mx-2 mb-3 border rounded' >
          <h3>All Projects</h3>
          <div className='d-flex mt-5 justify-content-center w-100'>
            <div className='d-flex align-items-center border rounded w-50'>
              <input type="text" placeholder='enter keyword/technology to search' className='form-control rounded' />
              <div className='ms-3 ps-3'>
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <Projectcard/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects