import Link from "next/link";


import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";




export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <main>
      <nav>
        {/* Primeira navbar */}
        <div className="bg-navbar h-15 flex items-center justify-between px-4">
          
          {/* Logo ou ZIP CODE */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/localPin.png" alt="Local Pin" className="max-h-[20px] hidden sm:block" />
            <h2 className="hidden md:block text-white font-amazon">Send to your ZIP CODE</h2>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center items-center px-2 cursor-pointer">
            <div className="h-10 w-full max-w-[650px] bg-white text-black/70 flex items-center px-4">
              Search Nozama.com.br
            </div>
            <div className="h-10 w-10 bg-amber-500 hover:bg-amber-600 flex justify-center items-center ">
              <img src="/magnifier.png" alt="Magnifier" className="h-8" />
            </div>
          </div>

          {/* Orders and Returns and Trolley */}
          <div className="flex items-center gap-4 cursor-pointer">
            <h2 className="hidden md:block text-white">Orders and returns</h2>
            <div className="hidden md:flex items-center gap-1">
              <img src="/trolley.png" alt="Trolley" className="h-10" />
              <h1 className="text-white">Trolley</h1>
            </div>

            {/* Button Menu */}
            <button className="md:hidden text-3xl focus:outline-none text-white">☰</button>
          </div>
        </div>

        {/* Segunda navbar */}
        <div className="h-10 bg-scndnavbar"></div>
      </nav>


      
      {/* Primeira página Gabriel Pessoa Faustino */}
      <section className="bg-bodyamazon bg-cover bg-center h-[650px]">
        <div className="bg-bodyamazon sm:bg-[url('/Personbox.jpg')] bg-cover bg-center h-[900px] w-[1521px] p-[30px]">

          <div className="absolute top-3/5 right-10 -translate-y-1/2 bg-scndnavbar/80 h-[500px] md:h-[400px] w-[400px] md:w-[700px] font-amazon shadow-xl/30 flex flex-col justify-between">
            <h1 className="p-6 text-3xl text-center text-white font-bold">
              "Your shortcut to honest product feedback"
            </h1>

            <h4 className="text-white p-6 text-center">
              Nozama is the best place to find reviews of the products you like the most, here you can find out wich items are worth it, how-to-use guides and a large buyers community.
            </h4>

            <button className="self-center mb-6 bg-white shadow-xl-30 px-6 py-2 font-bold hover:bg-green-950 hover:text-white cursor-pointer text-black">
              Get started ↗
            </button>
          </div>
        </div>
      </section>



      <section className="bg-bodyamazon h-[730px]">
       
      </section>


      {/* Footer Gabriel Pessoa Faustino */}
      <footer>
        <div className="bg-scndnavbar h-[50px] text-center flex items-center justify-center">
          <h3 className="text-white font- font-bold">Created by Gabriel & Marina | All right's reserved ©</h3>
        </div>

        <div className="bg-navbar h-[50px]">

        </div>
      </footer>
    </main>
  );
}
