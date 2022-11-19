import React from "react";

export default function Card() {
  return (
    <>
      <div className="card border-card-block col-sm-3 mb-3 shadow p-3 mb-5 bg-white rounded">
        <div className="card-header">
          {" "}
          <b>Blood Group:</b>
        </div>
        <div className="card-body">
          <h5 className="card-title card-primary">Name:</h5>
          <p className="card-text">
            <b>Contact details:</b>
          </p>
          <p className="card-text">
            <b>Address:</b>
          </p>
          <p className="card-text"> </p>
        </div>
      </div>
    </>
  );
}
