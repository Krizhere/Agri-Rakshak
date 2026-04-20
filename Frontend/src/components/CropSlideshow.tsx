import { useEffect, useState } from "react";
import wheat from "@/assets/crop-wheat.jpg";
import rice from "@/assets/crop-rice.jpg";
import corn from "@/assets/crop-corn.jpg";
import sunflower from "@/assets/crop-sunflower.jpg";

const slides = [
  { src: wheat, alt: "Golden wheat field" },
  { src: rice, alt: "Lush rice terraces" },
  { src: corn, alt: "Endless corn rows" },
  { src: sunflower, alt: "Bright sunflower field" },
];

const CropSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover animate-ken-burns"
          />
        </div>
      ))}
      {/* Blur + dark overlay for readability */}
      <div className="absolute inset-0 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-radial" />
    </div>
  );
};

export default CropSlideshow;
