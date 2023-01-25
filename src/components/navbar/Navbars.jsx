import React, { useState } from "react";
import "./Navbars.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import {FiMenu} from 'react-icons/fi'
import NavDropdown from 'react-bootstrap/NavDropdown';
import user from '../../../src/asset/user.jpg'

function Navbars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">CabsLO</div>
      <div className="navbarRight">
        {/* <div className="navbarLinks">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/offers">Offers</a>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropOption">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="dropOption">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="dropOption">
                Login
              </NavDropdown.Item>
            </NavDropdown>
        </div> */}
        <div>
          <FiMenu onClick={toggleShow} className='sidebarIcon' />
          <Offcanvas
            show={show}
            onHide={handleClose}
            scroll={true}
            backdrop={true}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <div className="sidebarLogin">
                <div className="sidebarImg">
                <img src={user} alt="" />
                </div>
                <div className="sidebaruserName">
                    <h5>GUEST</h5>
                    <p>LOGIN NOW</p>
                </div>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="sidebarLinks">
              <a href="/why">CabsLO</a>
              <a href="/offers">Offers</a>
              <a href="/partner">Partner with us</a>
              <a href="/support">Support</a>
              <a href="/profile">Profile</a>
              <a href="/about">About</a>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default Navbars;