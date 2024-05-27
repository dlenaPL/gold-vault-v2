import React from 'react'
import './Accordion.css'
import { useState } from 'react';
import AccordionFragment from './AccordionFragment';
import { AccordionContent } from './AccordionContent';



function Accordion() {

    const [isActive, setIsActive] = useState(false);

    const { title, content } = AccordionContent ;

  return (
    <div>
      <div className="accordion">
        {AccordionContent.map(({ title, content, index }) => (
          <AccordionFragment title={title} content={content} key={index}/>
        ))}
      </div>
    </div>
    
  )
}

export default Accordion