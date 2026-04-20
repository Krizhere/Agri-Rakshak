import { useState } from "react";
import { predictYield } from "../api/yieldApi";
import { BarChart3 } from "lucide-react";

const YieldForm = () => {
  const [form, setForm] = useState({
    Area: "",
    State_Name: "",
    Season: "",
    Crop: ""
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const res = await predictYield({
      ...form,
      Area: Number(form.Area)
    });

    setResult(res);
    setLoading(false);
  };

  return (
    <div className="mt-10 rounded-3xl border bg-card p-8 shadow-soft max-w-xl mx-auto">
      
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-primary" />
        Yield Prediction
      </h2>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          name="Area"
          placeholder="Enter Area (hectares)"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border bg-background"
        />

        <input
          name="State_Name"
          placeholder="State (e.g. Uttar Pradesh)"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border bg-background"
        />

        <input
          name="Season"
          placeholder="Season (Kharif/Rabi)"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border bg-background"
        />

        <input
          name="Crop"
          placeholder="Crop (e.g. Rice)"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border bg-background"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90"
      >
        {loading ? "Predicting..." : "Predict Yield"}
      </button>

      {/* RESULT UI */}
      {result && (
        <div className="mt-6 rounded-2xl border bg-muted p-5 space-y-4">

          {/* Title */}
          <div>
            <p className="text-lg font-semibold text-primary flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Prediction Result
            </p>

            <p className="text-sm text-muted-foreground">
              {form.Crop} • {form.State_Name} • {form.Season}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-background border">
              <p className="text-sm text-muted-foreground">
                Yield per hectare
              </p>
              <p className="text-xl font-bold">
                {result.yield_per_hectare} tons/ha
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background border">
              <p className="text-sm text-muted-foreground">
                Total Production
              </p>
              <p className="text-xl font-bold">
                {result.estimated_total_yield} tons
              </p>
            </div>
          </div>

          {/* Insight */}
          <div className="p-4 rounded-lg bg-primary/10 text-primary font-medium">
            📊 {result.insight}
          </div>

        </div>
      )}
    </div>
  );
};

export default YieldForm;