import React from "react";
import "../static/css/navbar.css";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#f9fafc" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <nav
              className="navbar navbar-light bg-light"
              style={{ paddingLeft: "1px" }}
            >
              <a className="navbar-brand header-name" href="#">
                Covid19India
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
