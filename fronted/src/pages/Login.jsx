import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { LOGIN } from '../graphql/auth/mutation';
// import { useAuth } from '../context/authContext';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

// import { useDispatch } from "react-redux";

export const Login = ()=>{

  const navigate = useNavigate();

  const [formCredentials, handleInputChange, inputChange] = useForm({
    email: '',
    password: ''
  });
  const{ email, password }= formCredentials;

  const [login, {data: dataMutation, loading: mutationLoading, error}]= useMutation(LOGIN, {
    onError: (e) =>{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: e
      })
    },

  });

  const submitLogin = (e)=>{
    e.preventDefault();

    login({
      variables: formCredentials
    });
  };

  useEffect(()=>{
    if(dataMutation){
      if(dataMutation.login.token){
        // console.log('tamos logao ');
        navigate('/')
      }
    }
  },[dataMutation])

    // if(error) return (error.message);
    
    return (
        <div className="section login">
        <div className="db-grid login__container">
          <div className="login__bg-primary">
            <h1 className="login__title">Log in</h1>
            <p className="login-p">
              Sign in to your existing account to continue
            </p>
            <img src="assets/img/signin-img.svg" alt="" />
          </div>
          <div className="login__bg-secundary">
            <form onSubmit={submitLogin}>
  
              <div className="input">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange}></input>
              </div>
              <div className="input">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange}></input>
              </div>
              <div className="login__submite">
                <div className="input__checkbox">
                  <input type="checkbox"></input>
                  <label>Remember me next time</label>
                </div>
                <button type="submit" className=" button__login button ">Log In</button>
                {/* <p>Don't have any account yet? <a href="#">Create an account</a></p> */}
               
              </div>
            
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login