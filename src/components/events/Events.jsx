import React from 'react';
import { Chrono } from "react-chrono";


import './events.css';
const Events = () => {
  // return (
  //   <div className="Events">
  //     <div className="Events-tittle">
  //       <p>EVENTS</p>
  //     </div>
  //   </div>
  // )
  const items = [{
    
    cardTitle: "SQUID GAMES",
    cardSubtitle:"Timings",
    cardDetailedText: "Living is no fun for those who can’t afford for themselves.",
  },
  {
    
    cardTitle: "HARRY POTTER",
    cardSubtitle:"Timings",
    cardDetailedText: "Don’t let the muggles get you down.",
  },
  {
    
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"Timings",
    cardDetailedText: "Living is no fun for those who can’t afford for themselves.",
  },
  {
    
    cardTitle: "HUNGER GAMES",
    cardSubtitle:"Timings",
    cardDetailedText: "May the odds be in your favour.",
  },
  {
    
    cardTitle: "IPL AUCTION",
    cardSubtitle:"Timings",
    cardDetailedText: "Find the marquee for you.",
  },
  {
   
    cardTitle: "SHARKS DEN",
    cardSubtitle:"Timings",
    cardDetailedText:"Your words will take you from getting defeated to being completed. ",
  },
  {
    
    cardTitle: "TREASURE HUNT",
    cardSubtitle:"Timings",
    cardDetailedText: "There is more to the question than to the answer",
  },
  {
    
    cardTitle: "MOCK STOCK",
    cardSubtitle:"Timings",
    cardDetailedText: "Don't put all your eggs in one basket.",
  },
  {
    // title: "15 June, 9:10",
    cardTitle: "NFT (THE ART OF SELLING)",
    cardSubtitle:"Timings",
    cardDetailedText: "It's Pokemon cards for adults.",
    
  },
{
    // title: "15 June, 9:10",
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"Timings",
    cardDetailedText: "Everyone is a gangster until the real gangster arrives.",
  },];
  

  return (<section id="events">
    
      <p className="Event-tittle">EVENTS</p>
    
    <div className="Event-details">
    
      
        <Chrono items={items} 
        scrollable={{ scrollbar: true }} 
        cardHeight="10" cardWidth="400"
        // useReadMore
        
        mode="VERTICAL_ALTERNATING"
        disableClickOnCircle
        theme={{
          primary: 'white',
          secondary: 'white',
          cardBgColor: '#131312',
          // #131312
          cardForeColor: 'var(--text-color)',
          titleColor: 'white',
        }}
        hideControls/>
      
    
    </div>
   
    </section>
  )
}

export default Events;
