import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import UnderstandingSocGen from "@/components/UnderstandingSocGen";
import TechnologyStrategy from "@/components/TechnologyStrategy";
import Hypothesis from "@/components/Hypothesis";
import UseCases from "@/components/UseCases";
import Architecture from "@/components/Architecture";
import Credibility from "@/components/Credibility";
import LandingStrategy from "@/components/LandingStrategy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <UnderstandingSocGen />
        <TechnologyStrategy />
        <Hypothesis />
        <UseCases />
        <Architecture />
        <Credibility />
        <LandingStrategy />
      </main>
      <Footer />
    </>
  );
}
