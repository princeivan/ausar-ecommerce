import React, { useState } from 'react'
import './auth.css'
import loginImg from "../../assets/login.png";
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const[loading, setLoading] = useState(false)


  const loginUser =()=>{

  }
  return (
    <section className='auth-container'>
      <div className="auth-img">
        <img src={loginImg} alt="login" width='400' className='login-img'/>
      </div>
      <div className="auth-card">
        <div className="auth-form">
          <h4>Login</h4>
          <form onSubmit={loginUser}>
             <input type="text" placeholder='Enter Username' required />
             <input type="password" placeholder='Enter Password' required />
             <button type='submit' className='--btn --btn-primary --btn-block'>
              {loading ? <Loader/>: "Login"}
             </button>
          </form>
          <span>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
            
          </span>
        </div>
      </div>
    </section>
  )
}

export default LoginPage