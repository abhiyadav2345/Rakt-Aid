import React  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {

  const [UserName, setUserName] = useState("");

  const ChangehandleName = (event)=> {
    // console.log(event.target.value);
    setUserName(event.target.value)
    
  }
  console.log(UserName)

  const [password, setPassword] = useState();

  const ChangehandlePassword = (event)=> {
    // console.log(event.target.value);
    setPassword(event.target.value)
    
  }
  console.log(UserName)
  // const changeHandleName = (event)=> {
  //   setUserCredential({
  //     password: event.target.value,
  //   })
  // }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>

            <div className=" mt-5 col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow p-3 mb-5 bg-white rounded">
              <form>
                {/*  Email input  */}
                <div className="form-outline mb-4">
                  <input
                    onChange={ChangehandleName}
                    value={UserName}
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3"></label>
                </div>

                {/*  Password input  */}
                <div className="form-outline mb-3">
                  <input
                    onChange={ChangehandlePassword}
                    value={password}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4"></label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/*  Checkbox  */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="/" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    className="btn bborder border-primary btn-lg"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      marginLeft: "2.5rem",
                    }}
                  >
                    Sign Up
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <a href="/ " className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/ " className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/ " className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="/ " className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </section>
    </>
  );
}
