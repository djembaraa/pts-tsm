import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <div className="faq-icon">+</div>
      </div>
      <div className="faq-a">
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
