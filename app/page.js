import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import WhatIBelieve from "@/components/WhatIBelieve";
import FounderAdvantages from "@/components/FounderAdvantages";
import ResultsStats from "@/components/ResultsStats";
import Testimonials from "@/components/Testimonials";
import WaysToWorkTogether from "@/components/WaysToWorkTogether";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
 
export default function Home() {
  return (
    <>
      <main id="top" className="min-h-screen w-full min-w-0 max-w-full overflow-hidden flex flex-col bg-[#FAF8F5]">
        <Navbar />
        <Hero />
        <FeaturedIn />
        <WhatIBelieve />
        <FounderAdvantages />
        <ResultsStats />
        <Testimonials />
        <WaysToWorkTogether />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
