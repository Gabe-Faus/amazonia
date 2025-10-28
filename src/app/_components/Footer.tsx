"use client"

{/* Footer Gabriel Pessoa Faustibo - 231006121 */}

import type React from "react";

const Footer: React.FC = () => {
    return(
        <footer>

        {/* First footer */}
        <div className="bg-scndnavbar h-[200px] text-center flex flex-col items-center justify-center">
          <h3 className="text-white p-6 font-amazon">This is a project idealized and implemented by Struct members.</h3>
          <img className="h-20" src="/Struct.png" alt="Struct" />
        </div>

        {/* Second footer */}
        <div className="bg-navbar h-[50px] text-center flex items-center justify-center">
          <h3 className="text-white font- font-bold font-amazon">Created by Gabriel & Marina | All right's reserved ©</h3>
        </div>
      </footer>
    );
};

export default Footer;