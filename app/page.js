import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import WhatIBelieve from "@/components/WhatIBelieve";
import FounderAdvantages from "@/components/FounderAdvantages";
import ResultsStats from "@/components/ResultsStats";
 
export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-hidden flex flex-col bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <FeaturedIn />
      <WhatIBelieve />
      <FounderAdvantages />
      <ResultsStats />
    </main>
  );
}
