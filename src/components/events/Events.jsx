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
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "Living is no fun for those who can’t afford for themselves.",
  },
  {
    
    cardTitle: "HARRY POTTER",
    cardSubtitle:"15 June, 9:40",
    cardDetailedText: "Don’t let the muggles get you down.",
  },
  {
    
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"15 June, 10:10",
    cardDetailedText: "Living is no fun for those who can’t afford for themselves.",
  },
  {
    
    cardTitle: "HUNGER GAMES",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "May the odds be in your favour.",
  },
  {
    
    cardTitle: "IPL AUCTION",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "Find the marquee for you.",
  },
  {
   
    cardTitle: "GET SET PITCH",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText:"Your words will take you from getting defeated to being completed. ",
  },
  {
    
    cardTitle: "TREASURE HUNT",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "There is more to the question than to the answer",
  },
  {
    
    cardTitle: "MOCK STOCK",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "Don't put all your eggs in one basket.",
  },
  {
    // title: "15 June, 9:10",
    cardTitle: "NFT (THE ART OF SELLING)",
    cardSubtitle:"15 June, 9:10",
    cardDetailedText: "It's Pokemon cards for adults.",
    
  },
{
    // title: "15 June, 9:10",
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"15 June, 9:10",
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
