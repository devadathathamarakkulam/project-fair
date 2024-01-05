import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Auth({register}) {
    const registerform=register?true:false
  return (
    <div style={{width:'100%',Width:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
        <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center'>
        <i class="fa-solid fa-arrow-left"></i>
        Back To Home
        </Link>
        <div className='bg-success p-5 rounded'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png?f=webp" alt="img" />
                </div>
                <div className='col-lg-6'>
                    <div className='d-flex align-items-center flex-column'>
                        <div className='d-flex mt-2 text-light'>
                        <i className="fa-brands fa-r-project" style={{color:'white'}}></i> 
                        <span className='h1 fw-bolder'>Project Fair</span>
                        </div>
                        <h4 className='text-light'>
                            {
                                registerform?'Sign Up for ProjectFair':'Sign in For ProjectFair'
                            }
                        </h4>
                        <form className='w-100 text-light'>
                            {
                                registerform &&
                        <Form.Group className="mb-3" controlId="exampleForm.UsernameInput">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="enter your name" />
                         </Form.Group>
                            }
                        
                        <Form.Group className="mb-3" controlId="exampleForm.EmailInput">
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="enter your email" />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="exampleForm.PasswordInput">
                        <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="enter your password" />
                         </Form.Group>

                         {
                            registerform?
                            <div>
                                <button className='btn btn-primary'>Sign Up</button>
                                <Link to={'/login'} className='ms-3'>Already a user?Sign in..</Link>
                            </div>:
                             <div>
                             <button className='btn btn-primary'>Sign In</button>
                             <Link to={'register'} className='ms-3'>New user user?Sign Up..</Link>
                         </div>
                         }
                        
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Auth