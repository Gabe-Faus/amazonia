"use client";

{/* Hero Page Gabriel Pessoa Faustino - 231006121 */}

import type React from "react";

const HeroSection: React.FC = () => {
    return(
        <section className="relative bg-bodyamazon bg-cover bg-center min-h-[750px] flex items-center justify-center">
        <div className="absolute inset-0 bg-bodyamazon sm:bg-[url('/Personbox.jpg')] bg-cover bg-center"></div>

        <div className="relative z-10 bg-scndnavbar/80 w-[90%] max-w-[700px] mx-auto font-amazon shadow-xl/30 flex flex-col justify-between p-6 rounded-xl">
          <h1 className="text-3xl text-center text-white font-bold mb-4">
            "Your shortcut to honest product feedback"
          </h1>

          <h4 className="text-white text-justify indent-4 mb-6">
            Nozama is the best place to find reviews of the products you like the most, here you can find out wich items are worth it, how-to-use guides and create a large buyers community.
          </h4>

          <button className="self-center bg-white shadow-xl-30 px-6 py-2 font-bold hover:bg-navbar hover:text-white cursor-pointer text-black rounded-lg">
            Get started ↗
          </button>
        </div>
      </section>
    );
};

export default HeroSection;