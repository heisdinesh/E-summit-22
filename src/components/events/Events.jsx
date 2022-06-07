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
    title: "15 June, 9:10",
    cardTitle: "SQUID GAMES",
    cardSubtitle:"Living is no fun for those who can’t afford for themselves.",
    cardDetailedText: "Not everyone can be trusted, The winner takes it all.A fun event with activities and games Ace the leaderboard to win attractive cash prizes",
  },
  {
    title: "15 June, 9:40",
    cardTitle: "HARRY POTTER",
    cardSubtitle:"Don’t let the muggles get you down.",
    cardDetailedText: "A magical event where the goblet of fire decides your fate ,solve the situation avail your magic, Hunt for the clues with your teammates by using magical items and walk through the treasures to discover your own .Build a magical product and test your entrepreneurial skills.",
  },
  {
    title: "15 June, 10:10",
    cardTitle: "GANGS OF WASSEYPUR",
    cardSubtitle:"Living is no fun for those who can’t afford for themselves.",
    cardDetailedText: "Not everyone can be trusted, The winner takes it all.A fun event with activities and games Ace the leaderboard to win attractive cash prizes",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "HUNGER GAMES",
    cardSubtitle:"May the odds be in your favour.",
    cardDetailedText: "A game which tests your survival skills integrated with entrepreneurship and your natural instincts in the time of action. A game with mixture of brutality and fun. If you want to win ,play as if your life depends on it just as the saying goes 'As long as you can find your self,you'll never starve'",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "IPL AUCTION",
    cardSubtitle:"Find the marquee for you.",
    cardDetailedText: "The cricket extravaganza is here to check your knowledge about the sport. Make your group and get ready to build and create your dream team with strategies,bidding and much more. Prove that you are the best in the business because 'Game banayega Name'",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "GET SET PITCH",
    cardSubtitle:"Your words will take you from getting defeated to being completed. ",
    cardDetailedText: "A investing challenge where a group of CEO's create a product with their investors from scratch and pitch it in front of the sharks! the participants have to bring their creative skills into play to create a product! The team with the most funding and the best shark wins the event!",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "TREASURE HUNT",
    cardSubtitle:"There is more to the question than to the answer",
    cardDetailedText: "Behold, for the mastermind has arrived. HNTR 4742, presents you its ultimate paradox. A journey of spiralling conundrum which will test the best of your intellect. Will you be the chosen one?!",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "MOCK STOCK",
    cardSubtitle:"Don't put all your eggs in one basket.",
    cardDetailedText: "A thrilling and exciting event that puts your analytical skills and acumen in the world of financial markets to the test. Mock stock gives you an exciting opportunity to step into the shoes of an investor, evaluate real-life news and use your logic to determine the best strategy to maximize your earnings and strengthen your portfolio.",
  },
  {
    title: "15 June, 9:10",
    cardTitle: "NFT (THE ART OF SELLING)",
    cardSubtitle:"It's Pokemon cards for adults.",
    cardDetailedText: "Create your NFTs and demonstrate yours sales abilities. You were born to win, but to be a winner, you must plan to win, Sell to win and bid to win.",
  },];
  

  return (<section id="events">
    <div className="Events">
    <div className="Event-tittle"></div>
    <div className="Event-details">
    
      
        <Chrono items={items} scrollable={{ scrollbar: true }} cardHeight="10" cardWidth="400"
        theme={{
          primary: 'red',
          secondary: 'blue',
          cardBgColor: '#131312',
          cardForeColor: 'var(--text-color)',
          titleColor: 'white',
        }}
        hideControls/>
      
    
    </div>
    </div>
    </section>
  )
}

export default Events;
