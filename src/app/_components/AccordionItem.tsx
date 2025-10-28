"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Botão de Pergunta */}
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-black transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {/* Ícone de seta para indicar o estado */}
        <span className="text-xl font-light">{isOpen ? '−' : '+'}</span>
      </button>
      
      {/* Resposta (escondida/mostrada) */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;