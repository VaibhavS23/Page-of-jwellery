import React from "react";
import "./home.css";
import Heroimg from "../assets/Images/newheroimg.jpeg";
import logo from "../assets/Images/LOGO-01 2.png";
import searchico from "../assets/Images/MagnifyingGlass@2x.png";
import spark from "../assets/Images/Sparkle.png";
import heart from "../assets/Images/Heart.png";
import handbag from "../assets/Images/Handbag.png";
import vector from "../assets/Images/Vector.png";


const home = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="head1stdiv">
            <img className="head1logo" src={logo} alt="" />
          </div>
          <div className="head2nddiv">
            
            <ul className="navli">
              <li className="Search">
                <div className="searchicodiv">
                  <img className="searchico" src={searchico} alt="" />

                  <input
                    className="inputnav"
                    type="search"
                    placeholder="Search....."
                  />
                </div>
              </li>
              </ul>
              
             
                <div className="buttons">
                 <ul className="secli">
                  <li>
                    <a href="">
                    <div className="sparkdiv">
                  <img id="t1i" src={spark} alt="" />
                  <p id="t1n">NEW IN  </p>
                  </div>
                  </a>
                  </li>
                  <li>
                    <a href="">
                    <p>COLLECTION</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                    <p>ACCESSORIES</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                    <p>RUNWAY</p></a>
                  </li>
                  <li>
                    <a href=""><p>VOWS</p></a></li>
                  <li>
                    <a href="">
                    <p>ABOUT</p></a>
                  </li>
                 </ul>
                </div>
              
              <div className="icons">
                <ul className="icoul">
                  <li>
                    <a href="">
<img src={heart} alt="" /></a>
                  </li>
                  <li>
                    <a href="">
                  <img src={handbag} alt="" /></a>
                  </li>
                  <li>
                    <a href="">
                  <img src={vector} alt="" /></a>
                  </li>
                </ul>
              </div>
            
          </div>
        </nav>
      </header>
      <div  className="heromain"style={{ backgroundImage:`url(${Heroimg})`,backgroundRepeat:"no-repeat" }}>
        <div className="fortxtheropositioning">
        <div className="heronav">
<ul className="heronavul">
  <li>
    <a href="">Home</a></li>
    <li>/</li>
  <li>
  <a href="">Collection..</a></li>
</ul>
       
        </div>
        <div className="herotextmain">
          <p className="hero1sttxt foranimation">
          Meet Fashion trends
          </p>
          <div className="">
          <p  className="hero2sttxt foranimation">
          Bold Impression with Striking Accessories
          </p>
          </div>
        </div>
        </div>
        </div>
        
    </div>
  );
};

export default home;
