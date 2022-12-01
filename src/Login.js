import React from 'react'
import "./style/Login.css";
import "./style/login-media.css";
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="login m-0">
      
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">


          <div className="col-lg-8 ">

            <div className="login_box">
              <div className="row">

                <div className="col-lg-6">
                  <div className="login_img d-lg-block d-none">
                    <img src="images/login_img.jpg" className="img-fluid w-100 p-0 m-0"/>
                  </div>
                </div>

                <div className="col-lg-6 align-self-center">
                  <div className="login_form ps-lg-3 pe-lg-5 px-4 py-2">
                    
                    <NavLink to="/" className="navbar-brand logo2 text-center">
                      <img src="images/logo.png" className="img-fluid" alt="bookworms"/>
                    </NavLink>

                    <form action="" method="">
                      
                      <div className="mb-2">
                        <label for="u_email" className="form-label">Enter your email</label>
                        <input type="email" className="form-control u_email" id="u_email" name="u_email"/>
                      </div>

                      <div className="mb-2">
                        <label for="u_pass" className="form-label">Password</label>
                        <input type="password" className="form-control u_pass" id="u_pass" name="u_pass"/>                      
                      </div>
                      <div className="mb-2 form-check">
                        <input type="checkbox" className="form-check-input u_loggedin" id="u_loggedin " name="u_loggedin"/>
                        <label className="form-check-label" for="u_loggedin">Keep me logged in</label>
                      </div>
                      <button type="submit" className="btn login_btn2" name="login_btn" id="login_btn">Login</button>
                      <p className="text-center pt-2">Don't have an account? <a href="signup.html">Sign up</a></p>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>


            

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login