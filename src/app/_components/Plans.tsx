"use client";

{/* Plans Gabriel Pessoa Faustino - 231006121 */}

import type React from "react";

const PlanSection: React.FC = () => {
    return(
        <section className="bg-bodyamazon min-h-screen flex flex-col items-center py-12 px-4">
        <h1 className="text-gray-900 font-amazon font-extrabold text-4xl mb-20 text-center">
          Our Plans
        </h1>

        {/* Weekly Plan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          <div className="bg-white w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-extrabold text-3xl text-gray-800 mb-4">Weekly</h2>
              <p className="text-gray-600 mb-4">Enjoy the benefits of Nozama for a week</p>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>See reviews</li>
                <li>Access up to 10 guide videos</li>
                <li>Join up to 3 communities</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
              <button className="font-amazon h-10 w-24 bg-navbar text-white hover:bg-white hover:text-black rounded-xl transition-colors cursor-pointer">
                Buy
              </button>
              <h3 className="font-amazon text-green-900 font-bold text-xl pt-2">$29.00</h3>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-extrabold text-3xl text-gray-800 mb-4">Monthly</h2>
              <p className="text-gray-600 mb-4">Enjoy the benefits of Nozama for a month</p>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>See reviews</li>
                <li>Rate up to 30 products</li>
                <li>Access up to 100 guide videos</li>
                <li>Join up to 20 communities</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
              <button className="font-amazon h-10 w-24 bg-navbar text-white hover:bg-white hover:text-black rounded-xl transition-colors cursor-pointer">
                Buy
              </button>
              <h3 className="font-amazon text-green-900 font-bold text-xl pt-2">$89.00</h3>
            </div>
          </div>

          {/* Anualy Plan */}
          <div className="bg-white w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-extrabold text-3xl text-gray-800 mb-4">Yearly</h2>
              <p className="text-gray-600 mb-4">Enjoy the benefits of Nozama for a year</p>
              <ul className="text-gray-600 text-left list-disc list-inside">
                <li>See reviews</li>
                <li>Rate unlimited products</li>
                <li>Access unlimited guide videos</li>
                <li>Join unlimited communities</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
              <button className="font-amazon h-10 w-24 bg-navbar text-white hover:bg-white hover:text-black rounded-xl transition-colors cursor-pointer">
                Buy
              </button>
              <h3 className="font-amazon text-green-900 font-bold text-xl pt-2">$259.00</h3>
            </div>
          </div>
        </div>
      </section>
    );
};

export default PlanSection;