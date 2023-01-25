import React from "react";
import "./Apps.css";
import styled from "styled-components";
import sealink from "../../asset/sealink.jpg";
import gplay from "../../asset/googlePlay.png";
import apple from "../../asset/apple.png";
import mobile from "../../asset/mobile.png";
const Sealink = styled.div`
  background-image: url("${sealink}") !important;
  background-size: cover;
  background-position: 100%;
`;
const App = () => {
  return (
    <Sealink>
      <div className="innerapp">
        <img src={mobile} alt="" className="mobileimg" />
        <div className="app1">
          <h1 >There’s more to love in the apps</h1>
        <div className="app0">
          <div className="footerinnerplaystore">
            <img className="footerplaystoreimg" src={gplay} alt="" />
            <div>
              <p>Get it on</p>
              <h6>Google Play</h6>
            </div>
          </div>
          <div className="footerinnerplaystore">
            <img className="footerplaystoreimg" src={apple} alt="" />
            <div>
              <p>Download on</p>
              <h6>App Store</h6>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Sealink>
  );
};

export default App;
