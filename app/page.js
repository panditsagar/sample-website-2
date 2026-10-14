import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#FAF8F5]">
      <Navbar />
      <Hero />
    </main>
  );
}
