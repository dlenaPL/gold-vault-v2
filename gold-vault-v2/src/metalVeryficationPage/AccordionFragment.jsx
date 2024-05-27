import React from 'react'
import { useState } from 'react';

function AccordionFragment({ title, content }) {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
}

export default AccordionFragment