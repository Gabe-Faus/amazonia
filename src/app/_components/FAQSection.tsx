"use client";
import React from 'react';
import AccordionItem from './AccordionItem'; // Importa o componente que acabamos de criar

const faqs = [
    {
      question: "O que é o Nozama e qual sua missão?",
      answer: "Nozama é uma plataforma comunitária dedicada a fornecer feedback honesto e reviews verificadas de produtos, ajudando compradores a tomar decisões informadas e criar guias de uso."
    },
    {
      question: "Como funciona a verificação de reviews?",
      answer: "Utilizamos um algoritmo de rating que combina preço, utilidade, e qualidade com a credibilidade do usuário para garantir que o feedback seja sempre relevante e confiável. Nossa comunidade é ativamente moderada."
    },
    {
      question: "Qual plano devo escolher?",
      answer: "Se você precisa de acesso ilimitado a reviews e guias, o plano 'Yearly' oferece o melhor custo-benefício. O plano 'Weekly' é ideal para testar a plataforma."
    },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Dúvidas Frequentes
        </h2>
        
        {/* Card de Conteúdo */}
        <div className="bg-white p-8 shadow-lg rounded-xl">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;