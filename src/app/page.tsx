import Link from "next/link";


import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import FAQSection from './_components/FAQSection';
import ContactFormSection from './_components/ContactFormSection';
import Navbar from "./_components/Navbar";
import PlanSection from "./_components/Plans";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import Footer from "./_components/Footer";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <main>

      {/* Navbar Gabriel pessoa Faustino - 231006121 */}
      <Navbar/>

      
      {/* Hero Section Gabriel Pessoa Faustino - 231006121 */}
      <HeroSection/>


      {/* What we do Section - Gabriel Pessoa Faustino -231006121*/}
      <AboutSection/>

      {/* Plans Gabriel Pessoa Faustino - 231006121 */}
      <PlanSection/>

      {/* FAQ Marina Pimentel - 222014071 */}
      <FAQSection />

      {/* Form Marina Pimentel - 222014071 */}
      <ContactFormSection />

      {/* Footer Gabriel Pessoa Faustino - 231006121 */}
      <Footer/>

    </main>

  );
}
