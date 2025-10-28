"use client";

{/* Form-react Marina Pimentel - 222014071 */}

import React from 'react';

const ContactFormSection: React.FC = () => {
  return (
    <section
      id="contact-section" 
      className="py-20 bg-bodyamazon"
    >
      <div className="container mx-auto font-amazon px-4 max-w-xl">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold font-amazon text-center mb-4 text-gray-800">
          Fale Conosco
        </h2>
        <p className="text-center font-amazon text-gray-600 mb-10">
          Tem alguma dúvida que não encontramos? Use o formulário abaixo.
        </p>

        {/* Card do Formulário */}
        <div className="bg-white p-8 shadow-2xl rounded-xl font-amazon">
          <form className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-amazon font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-black focus:border-black"
                required
              />
            </div>

            {/* Campo E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium font-amazon text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-black focus:border-black"
                required
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-amazon font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-black focus:border-black"
                required
              ></textarea>
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition duration-150"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
