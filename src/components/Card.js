import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card border-card-block col-sm-3 mb-3 shadow p-3 mb-5 bg-white rounded">
        <div className="card-header">
          {" "}
          <b>Blood Group: {props.bGroup}</b>
        </div>
        <div className="card-body">
          <h5 className="card-title card-primary">Name: {props.name}</h5>
          <p className="card-text">
            <b>Contact details: <br />M-{props.contect} <br />E-mail {props.emil}</b>
            <br />
          </p>
          <p className="card-text">
            <b>Address: {props.address}</b>
          </p>
          <p className="card-text"> </p>
        </div>
      </div>
    </>
  );
}
