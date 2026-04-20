import { ArrowRight, Sparkles, ScanLine, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="glass-card mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground animate-fade-in-down"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            AI-powered agriculture intelligence
          </div>

          <h1
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            Smarter farming,
            <br />
            <span className="text-gradient-accent italic">grown by data.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg md:text-xl animate-fade-in"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            Detect crop diseases from a single photo and forecast harvest yields with
            machine learning — built for farmers, agronomists, and researchers who
            want decisions they can trust.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#disease">
                <ScanLine className="h-5 w-5" />
                Detect Disease
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#yield">
                <BarChart3 className="h-5 w-5" />
                Predict Yield
              </a>
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {[
              { value: "High", label: "Detection accuracy" },
              { value: "35+", label: "Crop varieties" },
              { value: "<2s", label: "Avg. response" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-4 sm:p-6">
                <div className="font-display text-3xl font-bold text-accent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
