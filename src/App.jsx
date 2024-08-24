import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import About  from "./components/About.jsx";

import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./components/pioxno.css";

import { BrowserRouter,Route,Routes} from "react-router-dom";
import Brands  from './components/Brands.jsx';
import Merchandise from './components/Merchandise.jsx';
import  Career from './components/Career.jsx'
import Footer from "./components/Footer.jsx";
import JobApplicationPage from "./components/JobApplicationPage.jsx";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Header data={landingPageData.Header} /> }/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Merchandise" element={<Merchandise />}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Brands" element={<Brands/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/JobApplicationPage" element={<JobApplicationPage/>}/>

        
       </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
};

export default App;
