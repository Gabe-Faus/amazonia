"use client";

{/* FAQ-react Marina Pimentel - 222014071 */}

import React from 'react';
import AccordionItem from './AccordionItem'; // Importa o componente que acabamos de criar

const faqs = [
    {
      question: "What is Nozama and what is its mission?",
      answer: "Nozama is a community platform dedicated to providing honest feedback and verified product reviews, helping buyers make informed decisions and create user guides."
    },
    {
      question: "How does review verification work?",
      answer: "We use a rating algorithm that combines price, utility, and quality with user credibility to ensure the feedback is always relevant and reliable. Our community is actively moderated."
    },
    {
      question: "Which plan should I choose?",
      answer: "If you need unlimited access to reviews and guides, the 'Yearly' plan offers the best cost-benefit. The 'Weekly' plan is ideal for testing the platform."
    },
    {
      question: "How can I contribute reviews and guides?",
      answer: "To contribute, you need to register and be a verified user. After that, you can submit reviews and create detailed user guides directly on the product page."
    },
    {
      question: "Are the reviews sponsored?",
      answer: "No. Nozama maintains a strict policy against sponsored reviews. Our rating system is based on price, utility, and quality, focusing on user credibility to ensure impartiality."
    },
    {
      question: "Does Nozama sell products directly?",
      answer: "No. We are a platform for reviews and guides. All purchase links direct you to the original retailer's catalog (like Amazon), where you can complete your purchase."
    },
    {
      question: "What should I do if I find incorrect information?",
      answer: "If you find an error in a guide or review, use the 'Report' button on the page. Our moderation team will review the content immediately and take necessary action."
    },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-bodyamazon">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título */}
        <h2 className="text-gray-900 font-amazon font-extrabold text-4xl mb-12 text-center">
          Frequently Asked Questions (FAQ)
        </h2>
        
        {/* Box usando AccordionItem */}
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