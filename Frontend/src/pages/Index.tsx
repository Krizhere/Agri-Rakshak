import CropSlideshow from "@/components/CropSlideshow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero with crop slideshow background */}
      <div className="relative">
        <CropSlideshow />
        <Hero />
      </div>
      <main>
        <FeatureCards /> 
        <HowItWorks />
        <About /> 
      </main>
      <Footer />
    </div>
  );
};

export default Index;
