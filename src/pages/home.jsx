import Navbar from "../components/common/Navbar";

import Hero from "../components/landing/Hero";
import Packages from "../components/landing/Packages";
import Stats from "../components/landing/Stats";
import AIFeature from "../components/landing/AIFeature";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function Home() {

  return (

    <div className="relative min-h-screen bg-white overflow-hidden">

      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[180px] opacity-50" />

      <div className="absolute top-[300px] right-[-120px] w-[450px] h-[450px] bg-purple-100 rounded-full blur-[160px] opacity-40" />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6">

        <Hero />

        <Packages />

        <Stats />

        <AIFeature />

        <HowItWorks />

        <Testimonials />

        <FinalCTA />

      </main>

      <Footer />

    </div>

  );

}