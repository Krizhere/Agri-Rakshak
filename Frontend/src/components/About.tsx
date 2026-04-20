import { Cpu, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Analysis",
    desc: "Uses deep learning models to detect crop diseases instantly.",
  },
  {
    icon: BarChart3,
    title: "Smart Yield Prediction",
    desc: "Predicts crop yield using historical and environmental data.",
  },
  {
    icon: ShieldCheck,
    title: "Actionable Advice",
    desc: "Provides remedies, prevention, and insights for farmers.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground">
            About <span className="text-gradient-accent">AgriRakshak</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            AgriRakshak is an AI-driven platform that helps farmers detect crop diseases
            and predict yield with precision using machine learning.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl border bg-card shadow-soft hover:shadow-elegant transition"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;