import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header(inDashboard) {
  return (

<Navbar className="position-fixed top-0 w-100" style={{backgroundColor:'#714b80',zIndex:1}}>
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand>
          <i className="fa-brands fa-r-project" style={{color:'white'}}></i> 
            {' '}Project Fair
          </Navbar.Brand>
          </Link>
          {
            inDashboard &&
            <div className='ms-auto btn btn-success'>
                Loge Out{''}
            <i class="fa-solid fa-arrow-right"></i>
            </div>
          }
        </Container>
      </Navbar>

  )
}

export default Header