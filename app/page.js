import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
 
export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-hidden flex flex-col bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <FeaturedIn />
   
    </main>
  );
}
