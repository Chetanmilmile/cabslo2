import React, { useState } from "react";
import styled from "styled-components";
import Car from "../../asset/car.jpg";
import rentals from "../../asset/rental.jpg";
import locals from "../../asset/local.jpg";
import airports from "../../asset/airports.jpg";
import "./Banner.css";

import airport from "../../asset/airport.png";
import local from "../../asset/local.png";
import rental from "../../asset/rental.png";
import outstation from "../../asset/outstation.png";
import Navbars from "../navbar/Navbars";

const BannerDiv = styled.div`
  background-image: url("${Car}") ;
  background-size: cover;
  background-position: 100%;
  height: 90vh;
  background-attachment: fixed;
`;

const Banner = () => {
  const [activeCity, setActiveCity] = useState(true);
  const [activerental, setActiverental] = useState(false);
  const [activeOutstation, setActiveOutstation] = useState(false);
  const [activeAirport, setActiveAirport] = useState(false);

  const ActiveCity = () => {
    setActiveCity(true);
    setActiverental(false);
    setActiveOutstation(false);
    setActiveAirport(false);
    document.getElementById('bannerbg').style.backgroundImage=`url("${Car}")`
  };

  const ActiveRental = () => {
    setActiveCity(false);
    setActiverental(true);
    setActiveOutstation(false);
    setActiveAirport(false);
    document.getElementById('bannerbg').style.backgroundImage=`url("${rentals}")`
  };

  const ActiveOutstation = () => {
    setActiveCity(false);
    setActiverental(false);
    setActiveOutstation(true);
    setActiveAirport(false);
    document.getElementById('bannerbg').style.backgroundImage=`url("${locals}")`
  };

  const ActiveAirport = () => {
    setActiveCity(false);
    setActiverental(false);
    setActiveOutstation(false);
    setActiveAirport(true);
    document.getElementById('bannerbg').style.backgroundImage=`url("${airports}")`
  };
  return (
    <>
      <BannerDiv id="bannerbg">
        <Navbars />
        <div className="formdiv">
          <div className="from">
            <div className="heading">
              <div
                onClick={ActiveCity}
                style={{ borderBottom: activeCity ? "3px solid yellow" : "0" }}
              >
                <img className="formicons" src={rental} alt="air" /> <br />
                <p>City Ride</p>
              </div>
              <div
                onClick={ActiveRental}
                style={{
                  borderBottom: activerental ? "3px solid yellow" : "0",
                }}
              >
                <img className="formicons" src={local} alt="air" /> <br />
                <p> Rentals</p>
              </div>
              <div
                onClick={ActiveOutstation}
                style={{
                  borderBottom: activeOutstation ? "3px solid yellow" : "0",
                }}
              >
                <img className="formicons" src={outstation} alt="air" /> <br />
                <p> Outstation</p>
              </div>
              <div
                onClick={ActiveAirport}
                style={{
                  borderBottom: activeAirport ? "3px solid yellow" : "0",
                }}
              >
                <img className="formicons" src={airport} alt="air" /> <br />
                <p> Airport</p>
              </div>
            </div>
            <hr />

            {activeCity && (
              <div className="frombody">
                <h3>Ride Now</h3>
                <input type="text" placeholder="PickUp Location" />
                <br />
                <input type="text" placeholder="DropUp Location" />
                <br />
                <div>
                  <button>Ride Now</button>
                </div>
              </div>
            )
            }

            {activerental && (
              <div className="frombody">
                <h3>Ride Now</h3>
                <input type="text" placeholder="PickUp Location" />
                <br />
                <input type="text" placeholder="DropUp Location" />
                <br />
                <div>
                  <button>Ride Later</button>
                  <button>Ride Now</button>
                </div>
              </div>
            )}
            {activeOutstation &&(
              <div className="frombody">
                <h3>Ride Now</h3>
                <input type="text" placeholder="PickUp Location" />
                <br />
                <input type="text" placeholder="DropUp Location" />
                <br />
                <div>
                  <button>Ride Later</button>
                  <button>Ride Now</button>
                </div>
              </div>
            )}
            {activeAirport &&(
              <div className="frombody">
                <h3>Ride Now</h3>
                <input type="text" placeholder="PickUp Location" />
                <br />
                <input type="text" placeholder="DropUp Location" />
                <br />
                <div>
                  <button>Ride Now</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </BannerDiv>
    </>
  );
};

export default Banner;
