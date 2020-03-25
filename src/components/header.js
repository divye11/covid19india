import React from "react";
import "../static/css/navbar.css";

const Header = () => {
  return (
    <div className="main-header" style={{ backgroundColor: "#f9fafc" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <h1 className="header-text">India COVID-19</h1>
            <div className="header-subtext">
              Critical lack of access to COVID-19 testing across the country
              prevents us from knowing exactly how many people are infected.
              This isn’t news.
            </div>
            <div className="header-subtext">
              But depending on your state, you have very different access to
              testing. This site shows each state’s testing relative to their
              population.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
