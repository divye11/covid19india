import React from "react";
import "../static/css/corona.css";

const CoronaStates = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <h1 className="header-text">State wise cases</h1>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" style={{ textAlign: "end" }}>
                    CONFIRMED
                  </th>
                  <th scope="col" style={{ textAlign: "end" }}>
                    ACTIVE
                  </th>
                  <th scope="col" style={{ textAlign: "end" }}>
                    RECOVER
                  </th>
                  <th scope="col" style={{ textAlign: "end" }}>
                    DEATHS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ textAlign: "end" }}>
                    Gujarat
                  </th>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Mark</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Otto</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "end" }}>
                    Maharastra
                  </th>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Mark</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Otto</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "end" }}>
                    Delhi
                  </th>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Mark</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>Otto</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                  <td style={{ textAlign: "end", fontFamily: "Sen" }}>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaStates;
