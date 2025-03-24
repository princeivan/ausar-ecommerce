import React, { useState } from 'react'
import './auth.css'
import registerImg from "../../assets/register.png";
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const[loading, setLoading] = useState(false)

    const loginUser =()=>{

    }
  return (
    <section className='auth-container'>
      <div className="auth-img">
        <img src={registerImg} alt="login" width='400' className='login-img'/>
      </div>
      <div className="auth-card">
        <div className="auth-form">
          <h4>Register</h4>
          <form onSubmit={loginUser}>
             <input type="text" placeholder='Enter Name' required />
             <input
              type="text"
              placeholder="Enter Email"
              required
              name="email"
            
            />
             <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="cPassword"
             
            />
             <button type='submit' className='--btn --btn-primary --btn-block'>
              {loading ? <Loader/>: "Register"}
             </button>
          </form>
          <span>
            <p>Already have an account?  <Link to='/login'>Login</Link></p>
            
          </span>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage