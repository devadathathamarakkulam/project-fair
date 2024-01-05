import React ,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import designerImg from '../Assets/webb.png'
import Homeprojects from '../components/Homeprojects'
import { Link } from 'react-router-dom'


function Pfhome() {

const [isLogged,setIsLogged]=useState(false)

  return (
    <>
    <div className='container-fluid rounded' style={{width:'100%',height:'100vh', backgroundColor:'#872445'}}>
    <Row className='align-items-center p-5' style={{height:'100%'}}>
    <Col sm-='12' md='6'>
        <h1 style={{fontSize:'60px',color:'white'}} className='text-primery'>
        <i className="fa-brands fa-r-project" style={{color:'white'}}></i>
            Project Fair</h1>
            <p className='mt-3'style={{textAlign:'justify'}}>A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, 
              that is carefully planned to achieve a particular goal.A set of 
              interrelated tasks to be executed over a fixed period and within certain cost and other limitations.</p>
              {
                isLogged?
                <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Projects  <i class="fa-solid fa-arrow-right"></i></Link>
                :
                <Link to={'/login'} className='btn btn-success' >Start to explore <i class="fa-solid fa-arrow-right"></i></Link>
              }
           
    </Col>

    <Col sm={12} md={6}>
      <img src={designerImg} className='img-fluid' alt="" />
    </Col>
    </Row>
    </div>
    <div className='my-8'style={{backgroundColor:'#570722'}}>
      <h3 className='text-center'>Projects...</h3>
      <marquee behavior="" direction="">
      <Homeprojects/>
      </marquee>
      </div>
      <div><Link to={'/projects'} className='d-flex justify-content-center'>See more</Link></div>
  
   
    </>
  )
}

export default Pfhome