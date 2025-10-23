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
      <nav className="bg-green-950 h-20 text-white text-center font-mono text-xl font-bold flex items-center justify-center">
        <a className="p-8 hidden md:block" href="#">About us</a>
        <a className="p-8 hidden md:block" href="#">Pricing</a>
        <a className="p-8 hidden md:block" href="#">Ratings</a>

        <button className="md:hidden text-3xl focus:outline-none">☰</button>

        
      </nav>

      <section className="bg-[url('/amazon_img1.jpg')] bg-cover bg-center h-[650px]">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-green-950/80 h-[500px] md:h-[400px] w-[400px] md:w-[700px] font-mono shadow-xl/30 flex flex-col justify-between">

          <h1 className="p-6 text-3xl text-center text-white font-bold">"Your shortcut to honest product feedback"</h1>

          <h4 className="text-white p-6 text-center">Amazonia is the best place to find reviews of the products you like the most, here you can find out wich items are worth it, how-to-use guides and a large buyers community. </h4>

          <button className="self-center mb-6 bg-white shadow-xl-30 px-6 py-2 font-bold hover:bg-green-950 hover:text-white cursor-pointer text-black">Get started ↗</button>
        </div>
      </section>

      <section className="bg-white h-[730px]">
        
      </section>

      <footer className="bg-green-950 h-[50px] text-center flex items-center justify-center">
        <h3 className="text-white font-mono font-bold">Created by Gabriel & Marina | All right's reserved ©</h3>
      </footer>
    </main>
  );
}
