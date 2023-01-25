import './Testimonal.css'
import React from "react";
import Slider from "react-slick";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import {FaUserCircle} from 'react-icons/fa'
import { useRef } from "react";
// import testimobg from '../../Assets/testimonalbg.jpg'
import styled from 'styled-components';
import userProfile from '../../../asset/user.jpg'





const TestoContainer = styled.div`
background: black!important;
background-size: cover;
background-position: 100%;
margin: 2rem 0;
display: flex;
justify-content: center;
`

export default function Testimonal(){
  const testslider = useRef(null);
  
    var settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <TestoContainer  className="testSliderContainer">
      <div className="outertestSlider2">
        <div className="testSliderTitle2">
          <h3>WHAT OUR CUSTOMERS SAYS</h3>
        </div>

        <div className="testsliderControls2">

          <div className="testcontrolbtns2" onClick={()=> testslider?.current?.slickPrev()}><TfiAngleLeft className='testsiderbtn2'/><p>Previous</p></div>
        <div className="maintestslider2">
          <Slider {...settings} ref={testslider}>
            
            <div className="testslides2">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To The Airport Internet Booking Was Easy Questions We're Answered By Email Promptly."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <img src={userProfile} alt='' className='testuserprofile'/>
                </div>
                <div>
                  <p>Chetan Milmile</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides2">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <img src={userProfile} alt='' className='testuserprofile'/>
                </div>
                <div>
                  <p>King Khan</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            
            <div className="testslides2">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To The Airport Internet Booking Was Easy Questions We're Answered By Email Promptly."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <img src={userProfile} alt='' className='testuserprofile'/>
                </div>
                <div>
                  <p>Chetan Milmile</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides2">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <img src={userProfile} alt='' className='testuserprofile'/>
                </div>
                <div>
                  <p>King Khan</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>


          </Slider>
        </div>
          <div className="testcontrolbtns2" onClick={()=> testslider?.current?.slickNext()}><TfiAngleRight className='testsiderbtn2'/><p>Next</p></div>
        </div>
      </div>
    </TestoContainer>
    );
  }