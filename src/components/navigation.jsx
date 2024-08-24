import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarsIcon from '@mui/icons-material/Stars';
export const Navigation = (props) => {
  return (
    <>
    
    <nav  className="navbar-fixed-top">
    <marquee scrollamount="12" bgcolor="green" direction="right" height="30px" > 
        <p> <StarsIcon  fontSize="small"/> 20% OFF  UPTO < CurrencyRupeeIcon fontSize="medium" /> 50 . USECODE - HUNGRY50  <StarsIcon/>  
        </p>
         </marquee>
    <nav id="menu"  className="navbar navbar-default ">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
            Pioxno
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
           
          <li>
              <a href="/" className="page-scroll">
              Home
              </a>
            </li>
           
            <li>

              <a href="/Brands" className="page-scroll">
               Our Brands
              </a>
            </li>
            <li>
              <a href="/Merchandise" className="page-scroll">
               Merchandise
              </a>
            </li>
            <li>
              <a href="/About" className="page-scroll">
              About Pioxno
              </a>
            </li>
            <li>
              <a href="/Career" className="page-scroll">
               Career
              </a>
            </li>
            <li>
              <a  id="textD" href="Contact" className="page-scroll">
               <span  href="/JoinRewards"  id="JoinButton">  Join Reward Program</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </nav>
   
    </>
  );
};
