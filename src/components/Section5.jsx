import React from 'react'
import './Section5.css';
import footerlogo from "../assets/Images/LOGO-01 2.png";
import  { useState } from 'react';

const Section5 = () => {
  const [location, setLocation] = useState('');
  const handleChange = (event) => {
    setLocation(event.target.value);

  };

  const [currency, setCurrency] = useState('USD');

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className='sec5maindiv'>
<div className='firstdivision'>
  <ul className='footerul'>
  <li>
    <div>
      <img className='footerlogo' src={footerlogo} alt="" />
      <p className='footerlogotxt' >Don’t Just buy an outfit Buy an Identity</p>
    </div>
  </li>
  <li>
    <ul className='footerul1'>
      <li><a href="" className='lih'>
        COMPANY
        </a></li>
      <li><a href="">
        ABOUT US
        </a></li>
      <li><a href="">
        PRESS
        </a></li>
      <li><a href="">
        COUTURE PROCESS
        </a></li>
      <li><a href="">
        RUNWAYS
        </a></li>
      <li><a href="">
        ASSOCIATIONS
        </a></li>
      <li><a href="">
        CAREER
        </a></li>
    </ul>
  </li>
  <li>
    <ul className='footerul2'>
      <li><a href=""  className='lih' >
        CUSTOMER SERVICES
        </a></li>
      <li><a href="">
        CONTACT US
        </a></li>
      <li><a href="">
        BOOK AN APPOINTMENT
        </a></li>
      <li><a href="">
        SHIPPING
        </a></li>
    </ul>
  </li>
  <li>
    <ul className='footerul3'>
      <li  className='lih font' >STORE LOCATOR</li>
      <li>
      <div>
      {/* <label htmlFor="location">Enter Location:</label> */}
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        onChange={handleChange}
        placeholder="Enter your location"
        className="location-input"

      />
      </div>
      </li>
      <li>
      <div>
      {/* <label htmlFor="currency">Select Currency:</label> */}
      <select         className="location-input" id="currency" value={currency} onChange={handleChange1}>
        <option value="USD">(USD) United States</option>
        <option value="RS">(RS) Rupees</option>
      </select>
      <p>Selected Currency: {currency}</p>
    </div>
      </li>
    </ul>
    </li></ul>
</div>
<div className='seconddevision'>
<p className='footercopy'>&copy; Copyright 2024, All Rights Reserved by Pritam Nayak Couture</p>

</div>
<div className='thirddivision' >
<p className='footertxt'>Pritam Nayak</p>
</div>




    </div>
  )
}

export default Section5