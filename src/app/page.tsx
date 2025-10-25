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

      {/* Navbar Gabriel pessoa Faustino - 231006121 */}
      <nav>
        {/* Primeira navbar */}
        <div className="bg-navbar h-15 flex items-center justify-between px-4">
          
          {/* Logo ou ZIP CODE */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/localPin.png" alt="Local Pin" className="max-h-[20px] hidden sm:block" />
            <h2 className="hidden md:block text-white font-amazon">Add your ZIP CODE</h2>
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


      
      {/* First Page Gabriel Pessoa Faustino - 231006121 Gabriel Pessoa Faustino */}
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


      {/* Second Page - Gabriel Pessoa Faustino -231006121*/}
      <section className="bg-bodyamazon min-h-screen flex items-center justify-center py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-6xl">
          
          {/* Text Box 1 */}
          <div className="bg-white/30 w-full md:w-1/2 shadow-2xl p-6 rounded-xl">
            <h1 className="font-amazon font-bold text-center mb-4 text-2xl">
              What we do
            </h1>

            <h3 className="font-amazon indent-4 text-justify mb-4">
              Have you ever bought a product and ended up disapointed with what you received? Or has it ever happened to you of not knowing how to use a product and thought if it would be really useful?
              Nozama is here to help you with all those issues, with Nozama you can find trustworthy reviews of thousands of products and how-to-use guides that teach you exactly how to use and maintain each one of your purchases.
            </h3>

            <h3 className="font-amazon indent-4 text-justify mb-4">
              Currently there are more than 310.000 people using Nozama to help in their buying decision process. All products have a rating that considers their price, utility and quality. Based on these features you can smartly buy anything on the 
              <a className="text-blue-500" href="https://www.amazon.com.br/"> Amazon</a> catalog.
            </h3>

            <h3 className="font-amazon indent-4 text-justify">
              We're the best option to save money while enjoying offers, and in the mean time you can create a community of savers from all over the world. Sing up right NOW!
            </h3>
          </div>

          {/* Person carring a box */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/Personbox1.png"
              alt="Person carrying a box"
              className="max-w-[350px] w-full h-auto relative z-10"
            />
          </div>
        </div>
      </section>

      <section className="bg-bodyamazon min-h-screen flex flex-col items-center py-12 px-4">
        <h1 className="text-black font-amazon font-extrabold text-4xl mb-12 text-center">
          Our Plans
        </h1>

        {/* Weekly Plan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          <div className="bg-white/30 w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-amazon font-extrabold text-3xl text-black mb-4">Weekly</h2>
              <p className="font-amazon text-black mb-4">Enjoy the benefits of Nozama for a week</p>
              <ul className="font-amazon text-black text-left list-disc list-inside">
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
          <div className="bg-white/30 w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-amazon font-extrabold text-3xl text-black mb-4">Monthly</h2>
              <p className="font-amazon text-black mb-4">Enjoy the benefits of Nozama for a month</p>
              <ul className="font-amazon text-black text-left list-disc list-inside">
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
          <div className="bg-white/30 w-full shadow-2xl rounded-xl flex flex-col items-center justify-between p-6 transition-transform transform hover:scale-105 hover:bg-white/40 cursor-pointer">
            <div className="text-center">
              <h2 className="font-amazon font-extrabold text-3xl text-black mb-4">Yearly</h2>
              <p className="font-amazon text-black mb-4">Enjoy the benefits of Nozama for a year</p>
              <ul className="font-amazon text-black text-left list-disc list-inside">
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

      {/* Footer Gabriel Pessoa Faustino - 231006121 */}
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
    </main>

  );
}
