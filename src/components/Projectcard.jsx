import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import projectImg from '../Assets/screen.png'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {Button }from 'react-bootstrap/Button';


function Projectcard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow} style={{ width: '18rem' }} className='rounded border shadow'>
    <Card.Img variant="top" src={projectImg} />
    <Card.Body>
      <Card.Title>Project Title</Card.Title>
    </Card.Body>
  </Card>


<Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
>

<Modal.Header closeButton>
  <Modal.Title>Project Details</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Row>
    <Col sm={12} md={6}>
      <img src={projectImg} alt="img" className='img-fluid' />
    </Col>
    <Col sm={12} md={6}>
      <h5>Project Title</h5>
      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English.</p>
        <p><span className='fw-bold'>Language Used:</span>HTML,CSS,JS</p>
        <div>
       <a target='_blank' className='btn me-2' href="https://github.com/devadathathamarakkulam/media-.git">
       <i class="fa-brands fa-github fa-2x"></i>
       </a>

       <a target='_blank' className='btn me-2' href="">

       <i class="fa-solid fa-link fa-2x"></i>
       </a>
        </div>
    </Col>
  </Row>
</Modal.Body>

</Modal>


</>

  )
}

export default Projectcard