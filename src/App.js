import React from 'react';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import './App.css';
import {Navbar,LandingPage,About,Speakers,Events,Sponsers,Faq,Contact,Ticket} from "./components";

function App() {
  return (
    <div className="App">
     
      
      <Navbar />
      <LandingPage />
      <About />
      {/* <Speakers /> */}
      <Events />
      {/* <Sponsers /> */}
      <Faq />
      <Contact />

    </div>
  );
}

export default App;
