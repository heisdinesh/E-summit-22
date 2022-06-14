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
    
    cardTitle: "INNAGURATION",
    cardSubtitle:"15 June, 09.00 AM",
    cardDetailedText: "P C Sgar Auditorium",
  },
  {
    
    cardTitle: "ROSHAAN RAY(speaker)",
    cardSubtitle:"15 June, 10.00 AM",
    cardDetailedText: "P C Sgar Auditorium",
  },
  {
    
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"15 June, 01.00 PM",
    cardDetailedText: "Food Court",
  },
  {
    
    cardTitle: "SHARKS DEN(round 1)",
    cardSubtitle:"15 June, 01.00 PM",
    cardDetailedText: " BB Gallery room",
  },
  {
    
    cardTitle: "MOCK IPL AUCTION",
    cardSubtitle:"15 June, 02.00 PM",
    cardDetailedText: "Seminar hall(heritage block)",
  },
  {
   
    cardTitle: "TEASURE HUNT",
    cardSubtitle:"15 June, 02.00 PM",
    cardDetailedText:"College",
  },
  {
    
    cardTitle: "WEB 3.0 & NFT(workshop)",
    cardSubtitle:"15 June, 02.00 PM",
    cardDetailedText: "BB Gallery",
  },
  {
    
    cardTitle: "CRYPTO BEYOUND TRADING",
    cardSubtitle:"15 June, 03.00 PM",
    cardDetailedText: "CD sagar",
  },
  {
    // title: "15 June, 9:10",
    cardTitle: "BEHAVIOURAL INVESTMENT (workshop)",
    cardSubtitle:"16 June, 09.00 AM",
    cardDetailedText: "Seminar hall",
    
  },
{
    cardTitle: "HARRY POTTER",
    cardSubtitle:"16 June, 09.00 AM",
    cardDetailedText: "PC Sagar Auditorium",
  },
  {
    cardTitle: "SQUID GAMES",
    cardSubtitle:"16 June, 09.00 AM",
    cardDetailedText: "PC Sagar food court",
  },
  {
    cardTitle: "HUNGER GAMES",
    cardSubtitle:"16 June, 09.00 AM",
    cardDetailedText: "Amphi theatre",
  },
  {
    cardTitle: "DIGITAL MARKETING(workshop)",
    cardSubtitle:"16 June, 10.00 AM",
    cardDetailedText: "BB Gallery",
  },
  {
    cardTitle: "SHARKS DEN",
    cardSubtitle:"16 June, 10.00 AM",
    cardDetailedText: "BB Gallery 2",
  },
  {
    cardTitle: "NFT",
    cardSubtitle:"16 June, 10.00 AM",
    cardDetailedText: "MBA Gallery",
  },
  {
    cardTitle: "AURA WITH AUTHOR",
    cardSubtitle:"16 June, 03.00 PM",
    cardDetailedText: "PC Sagar",
  },
  {
    cardTitle: "ASSEMBLE WITH AVALON",
    cardSubtitle:"16 June, 04.00 PM",
    cardDetailedText: "PC Sagar",
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
