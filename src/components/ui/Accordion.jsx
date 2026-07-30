import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import RichText from './RichText';

export const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border border-border rounded-lg mb-3 overflow-hidden bg-white shadow-sm transition-all hover:border-blue/30 ${isOpen ? 'ring-1 ring-blue/20' : ''}`}>
      <button 
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer"
        onClick={onClick}
      >
        <h3 className="font-bold text-navy pr-4 text-[0.95rem]">{question}</h3>
        <ChevronDown 
          className={`shrink-0 text-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={18} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 text-[0.9rem] text-text border-t border-border/50 bg-gray/30 prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1">
          <RichText content={answer} />
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full my-8">
      <h2 className="font-condensed text-2xl font-bold text-navy mb-5 border-b border-border pb-2">Pertanyaan yang Sering Ditanyakan</h2>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <AccordionItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
