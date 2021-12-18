import React from "react";
// import { useDispatch } from "react-redux";

export const Login = ()=>{

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
            <form >
  
              <div className="input">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" ></input>
              </div>
              <div className="input">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" ></input>
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