import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import About  from "./components/About.jsx";

import { JoinNow } from "./components/JoinNow.jsx";
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
import BlogPage from "./components/BlogPage.jsx";
import NotFound from "./components/NotFound.jsx";
import AnimatedPioxno from "./components/AnimatedPioxno.jsx";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      // Check if the preloader has already been shown
      const hasVisited = localStorage.getItem('hasVisited');

      if (!hasVisited) {
          // Show the preloader
          setLoading(true);

          // Simulate loading time and then hide the preloader
          const timer = setTimeout(() => {
              setLoading(false);
              localStorage.setItem('hasVisited', 'true'); // Set the flag in localStorage
          }, 1200); // Duration matches the animation

          return () => clearTimeout(timer);
      }
  }, []);
 
  return (
    <>
       {loading ? (
                <AnimatedPioxno />
            ) : (
              <div> 
      <Navigation />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Header  /> }/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Merchandise" element={<Merchandise />}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Brands" element={<Brands/>}/>
        <Route path="/JoinNow" element={<JoinNow/>}/>
        <Route path="/JobApplicationPage" element={<JobApplicationPage/>}/>
        <Route path="/BlogPage" element={<BlogPage/>}/>
        
       </Routes>
      </BrowserRouter>
      
      <Footer /></div>
            )}
    
   </>
  );
};

export default App;
