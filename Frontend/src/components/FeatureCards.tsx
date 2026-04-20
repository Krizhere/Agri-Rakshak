import { useState } from "react";
import { ArrowUpRight, ScanLine, BarChart3, Upload, Cpu, Sprout, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import YieldForm from "./YieldForm";
import DiseaseUpload from "./DiseaseUpload";

const features = [
  {
    id: "disease",
    eyebrow: "Computer Vision",
    title: "Crop Disease Detection",
    description:
      "Upload a photo of your crop and our deep-learning model identifies the disease in seconds.",
    bullets: [
      { icon: Upload, text: "Drag & drop image upload" },
      { icon: Cpu, text: "Transfer learning with MobileNet" },
      { icon: Sprout, text: "Actionable treatment tips" },
    ],
    cta: "Detect Disease",
    icon: ScanLine,
    accent: "from-accent to-accent-glow",
  },
  {
    id: "yield",
    eyebrow: "Predictive Modeling",
    title: "Crop Yield Prediction",
    description:
      "Estimate crop yield using machine learning based on location, season, crop type, and area.",
    bullets: [
      { icon: MapPin, text: "Region and season aware" },
      { icon: Cpu, text: "Trained on historical data" },
      { icon: BarChart3, text: "Yield + total production" },
    ],
    cta: "Predict Yield",
    icon: BarChart3,
    accent: "from-primary-glow to-primary",
  },
];

const FeatureCards = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.id} className="p-8 border rounded-3xl">
                <Icon className="mb-4" />
                <h2 className="text-2xl font-bold">{f.title}</h2>
                <p className="mt-2">{f.description}</p>

                <Button
                  className="mt-6"
                  onClick={() => setActiveFeature(f.id)}
                >
                  {f.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* 🔥 Dynamic Components */}
        <div className="mt-10">
          {activeFeature === "yield" && <YieldForm />}
          {activeFeature === "disease" && <DiseaseUpload />}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;