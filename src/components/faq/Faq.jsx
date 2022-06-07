
import React from 'react'
import {useState} from 'react'
import faqImg from "../../assets/faq_illustration.svg"

import './faq.css'
const data=[
  {
    question:"What is E-summit?",
    answer:"It is the entrepreneurship summit conducted by IEDC(innovation and entrepreneurship development centre),  includes speaker sessions , workshops, coffee with CEO and many activities which enhances entrepreneurship qualities."
  },
  {
    question:" Who can attend the E-summit?",
    answer:"It is for all the people who are interested in entrepreneurship and looking for self growth."
  },
  {
    question:"How can we take part in the events/activities going to take place?",
    answer:"You can do it by RSVP for the event, and by tickets at the registeration desk."
  },
  {
    question:"Is it necessary to RSVP for the event?",
    answer:"Yes , it is necessary to RSVP for the events"
  },
  {
    question:" Is there any certification?",
    answer:"Yes certificates will be provided. Participation certificate will be provided to everyone attending E-summit and workshops ,  and those who win an activity gets goodies and a certificate."
  },
  {
    question:" Can I take part in more than two events ?",
    answer:"Yes ,But the events will be conducted parallelly , timetable will be provided before hand  so that you can plan your day  accordingly."
  },
  // {
  //   question:"Is there any food facility and refreshments available?",
  //   answer:"Yes, food and refreshment will be available  in the food court."
  // },
  
  
  
  // {
  //   question:" How is it going to be beneficial to us?",
  //   answer:"E-Summit includes speaker sessions, workshops on trending topic to keep you up with time ,fun activities which will enhance your entrepreneurial skills ·"
  // },
  
  // {
  //   question:"  Is there any accommodation for the students from other colleges?",
  //   answer:"No"
  // },
  
]

const Faq = () => {
const [selected, setSelected] =useState(null)

const toggle=(i)=>{
   if(selected===i){
     return setSelected(null)
   }
   setSelected(i)
}
  return (
    <section id="faq">
      <div className="faq">
        <p className="faq-tittle">Frequently Asked Questions</p>
        <div className="faq-main">
          
      <div className="faq-wrapper">
        <div className="faq-wrapper-component">
          {data.map((item, i)=>(
            <div className="item">
              <div className="item-question" onClick={()=>toggle(i)}>
                <p>{item.question}</p>
                <span>{selected === i? '-':'+'}</span>
              </div>
              <div className={selected === i? 'item-answer show':'item-answer'}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <div className="faq-image">
          <img className="faq-image-svg"src={faqImg} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Faq