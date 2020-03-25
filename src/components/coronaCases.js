import React from "react";
import "../static/css/corona.css";

const CoronaCases = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <h1 className="header-text">CORONA Cases</h1>
            <div className="row corona-box">
              <div class="col-md-3 col-sm-12">
                <p style={{ fontSize: "32px", marginBottom: "0rem" }}>650</p>
                <p style={{ fontSize: "16px", color: "#8492a6" }}>CONFIRMED</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p style={{ fontSize: "32px", marginBottom: "0rem" }}>596</p>
                <p style={{ fontSize: "16px", color: "#8492a6" }}>ACTIVE</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p style={{ fontSize: "32px", marginBottom: "0rem" }}>43</p>
                <p style={{ fontSize: "16px", color: "#8492a6" }}>RECOVERED</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p style={{ fontSize: "32px", marginBottom: "0rem" }}>11</p>
                <p style={{ fontSize: "16px", color: "#8492a6" }}>DECEASED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaCases;
