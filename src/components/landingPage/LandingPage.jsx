import React from 'react';
// import {Navigate} from "react-router-dom";
import './landingPage.css';
import Tittle from "../../assets/E-summit.svg";
import EntrepruenersLeft from "../../assets/entrepruners-left.svg";
import EntrepruenersRight from "../../assets/entrepruners-right.svg";

const LandingPage = () => {
  // let navigate =Navigate();
  return (
    <section id="home">
    <div className="LandingPage" >
      <div className="LandingPage_Dates">
        <p>June 15&16,2022</p>
      </div>
      <div className="LandingPage-Center">
          <div className="LandingPage-Center-Tittle">
            <img src={Tittle} className="LandingPage-Center-Tittle-Svg" /> 
            <p className="LandingPage-Center-Hashtag">BACK TO FUTURE</p>  
           
           <div className="LandingPage-Center-Buttons">
              <button className="LandingPage-Center-Buttons-Tickets"/* onClick={()=>{navigate.push("/ticket")}}*/ >TICKETS</button>
              <a href="https://discord.gg/jVJ9NbnRvG" target="_blank"><button className="LandingPage-Center-Buttons-Discord" >DISCORD</button></a>
             </div>
            
          </div>
      </div>
     
     
      <div className="LandingPage-Entrepruners-Left">
        <img src={EntrepruenersLeft} className="LandingPage_Entrepruners-Left-Svg" alt="entreprueners"/>
      </div>
      <div className="LandingPage-Entrepruners-Right">
        <img src={EntrepruenersRight} className="LandingPage_Entrepruners-Right-Svg" alt="entreprueners"/>
      </div>
      
    </div>
    </section>
  )
}

export default LandingPage;