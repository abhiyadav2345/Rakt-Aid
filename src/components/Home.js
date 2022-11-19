import React from "react";
import Cards from "./Card"
import css from "./Home.css";
import { Link } from "react-router-dom";
import  { data } from "./Receiver";

export default function Home() {
  return (
    <>
    
      <div className="container my-5">
        <div className="row">
          <div className="col-4"><Cards bGroup="A+" name="atishay" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="B+" name="Abhishek" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="O+" name="Rohan" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="AB+" name="Rahul" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="B-" name="atishay" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="A-" name="atishay" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
          <div className="col-4"><Cards bGroup="AB-" name="atishay" email="atishay@1950" contect="8433244675" address="abhishek"/></div>
        </div>
      </div>
      
      {/* <section class="hero-banner bg-light py-5">
        <div class="container">
          <div class="row row align-items-center">
            <div class="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="web-development-vector.png"
                class="img-fluid"
                alt="Web Development"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="mt-3">Web Designing & Development</h1>
              <p class="lead text-secondary my-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
              </p>
              <Link to="/" class="btn btn-outline-secondary btn-lg border" />
              Order Now
            </div>
          </div>
        </div>
            
      </section> */}



    </>
  );
}
