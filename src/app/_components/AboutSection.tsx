"use client";

{/* What we do - Gabriel Pessoa Faustino - 231006121 */}

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section" // 👈 ESSENCIAL para o scroll funcionar
      className="bg-bodyamazon min-h-screen flex items-center justify-center py-12 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-6xl">
        
        {/* Text Box 1 */}
        <div className="bg-white w-full md:w-1/2 shadow-2xl p-6 rounded-xl">
          <h1 className="font-amazon font-bold text-center mb-4 text-2xl text-gray-800">
            What we do
          </h1>

          <h3 className="text-gray-600 indent-4 text-justify mb-4">
            Have you ever bought a product and ended up disappointed with what you received?
            Or has it ever happened to you of not knowing how to use a product and thought if it would be really useful?
            Nozama is here to help you with all those issues. With Nozama you can find trustworthy reviews of thousands of
            products and how-to-use guides that teach you exactly how to use and maintain each one of your purchases.
          </h3>

          <h3 className="text-gray-600 indent-4 text-justify mb-4">
            Currently there are more than 310,000 people using Nozama to help in their buying decision process. 
            All products have a rating that considers their price, utility and quality. Based on these features you can smartly buy anything on the
            <a className="text-blue-500" href="https://www.amazon.com.br/"> Amazon</a> catalog.
          </h3>

          <h3 className="text-gray-600 indent-4 text-justify">
            We're the best option to save money while enjoying offers, and in the meantime you can create a community of savers from all over the world.
            Sign up right NOW!
          </h3>
        </div>

        {/* Person carrying a box */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/Personbox1.png"
            alt="Person carrying a box"
            className="max-w-[350px] w-full h-auto relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

