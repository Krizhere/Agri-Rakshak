import { Camera, BrainCircuit, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture or input",
    desc: "Snap a photo of your crop or fill in field parameters like area, season and state.",
  },
  {
    icon: BrainCircuit,
    title: "AI does the work",
    desc: "Our trained models analyze your input in seconds with high confidence scoring.",
  },
  {
    icon: FileCheck,
    title: "Get clear results",
    desc: "Receive a diagnosis or yield estimate with guidance you can act on today.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            From field to <span className="italic text-primary">forecast</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent font-display text-sm font-bold text-accent-foreground shadow-accent-glow">
                  {i + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
