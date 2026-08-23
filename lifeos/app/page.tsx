import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import DashboardPreview from "../Components/DashboardPreview";
import Features from "../Components/Features";
import HowItWorks from "../Components/HowItWorks";
import About from "../Components/About";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <About />
      <CallToAction />
      <Footer />
    </>
  );
}
