import React from "react";
import css from "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section class="hero-banner bg-light py-5">
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
            
      </section>
    </>
  );
}
