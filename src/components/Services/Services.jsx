import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <h2 className="serviceshead">Ride With <span> CabsLO</span></h2>
      <div className="service">
        <div className="service1">
          <img src="https://www.meru.in/assets/images/group-16370.webp" alt="bike" />
          <h2>
         
            CabsLO <span>Bike</span>  <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Assumenda quae nobis fugit corrupti vel architecto voluptate
               <br /> error excepturi recusandae. Officiis!
            </p><br />
            
            <button>Book Now</button>
           
          </h2>
          
        </div>
        <div className="service1">
          <h2>
            
            CabsLO <span>Cars</span>  <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Assumenda quae nobis fugit corrupti vel architecto voluptate
               <br /> error excepturi recusandae. Officiis!
            </p><br />
            <button>Book Now</button>
          </h2>
          <img src="https://www.meru.in/assets/images/Image-48.webp" alt="car" />
        </div>
        <div className="service1">
          <img src="https://www.meru.in/assets/images/suv.webp" alt="auto" />
          <h2>
          
            CabsLO <span>Auto</span>  <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               <br /> facere quasi tempore obcaecati voluptatum iusto
              sint! Iure laboriosam <br /> error excepturi recusandae. Officiis!
            </p><br />
            <button>Book Now</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
