import React, { useState } from "react";

export default function Receiver() {

  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Contect: "",
    Blood: "",
    Address: "",
    AditionalInformation: ""
  });

  console.log(data.Fname)

  const handleFname = (event) =>{
    const Fname = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Fname: Fname
      }
    })

  }
  const handleLname = (event) =>{

    const Lname = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Lname: Lname
      }
    })

  }
  const handleEmail = (event) =>{
    const Email = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Email: Email
      }
    })

  }
  const handleContact = (event) =>{
    const Contact = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Contect: Contact
      }
    })

  }
  const handleBlood = (event) =>{
    const Blood = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Blood: Blood
      }
    })
  }
  const handleAddress = (event) =>{
    const Address = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        Address: Address
      }
    })
  }
  const handleAdditionalInfo = (event) =>{
    const AdditionalInfo = event.target.value;
    setData(prevData => {
      return {
        ...prevData,
        AditionalInformation: AdditionalInfo
      }
    })
  }



  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Receiver
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                            onChange={handleFname}
                            value={data.Fname}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              First Name
                            </label>
                          </div>

                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleLname}
                              value={data.Lname}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleEmail}
                              value={data.Email}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                            onChange={handleContact}
                             value={data.Contect}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Contact Number
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleBlood}
                              value={data.Blood}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Blood group you need
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleAddress}
                              value={data.Address}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Address 
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <div className="form-outline mb-4 ">
                              <textarea
                                onChange={handleAdditionalInfo}
                                value={data.AditionalInformation}
                                className="form-control"
                                id="form6Example7"
                                rows="4"
                              ></textarea>
                              <label className="form-label" for="form6Example7">
                                Additional information
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-success btn-lg"
                          >
                            Appeal For your need
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
