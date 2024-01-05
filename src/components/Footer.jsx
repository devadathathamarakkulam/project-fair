import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
    return (
      <div>
        <div className='p-5' style={{width:'100%' , height:'400px',backgroundColor:'#9e0850'}}>
          <Row className='p-s'>
         <Col md='4'>
          <h4 style={{color:'white'}}>{' '}PROJECT FAIR</h4>
          <p style={{textAlign:'justify',textDecoration:'none',color:'#111317'}}>A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, 
              that is carefully planned to achieve a particular goal.An alternative view sees a project managerially as a sequence of events: a set of interrelated tasks to be executed over a fixed period and within certain cost and other limitations</p>
         </Col>


         <Col md='4' className='d-flex justify-content-center'>
          <div  className='d-flex flex-column' >
            <h4 style={{color:'white'}}>Link</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'#111317'}}>Landing Page</Link>
            <Link to={'/Dashboard'} style={{textDecoration:'none',color:'#111317'}}>Dashboard</Link>
            <Link to={'/Register'}style={{textDecoration:'none',color:'#111317'}}>Register</Link>
            <Link to={'/Login'} style={{textDecoration:'none',color:'#111317'}}>Login</Link>
            <Link to={'/projects'} style={{textDecoration:'none',color:'#111317'}}>Project</Link>
            </div>
          </Col>


          <Col md='4' className='d-flex flex-column'>
            <h4 style={{color:'white'}}>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#111317'}}>React</Link><br />
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'#111317'}}>React Bootstrap</Link><br />
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#111317'}}>Fontawesome</Link>
          </Col>
          
          </Row>
        
      
        </div>
      </div>
    )
  }
  
  export default Footer