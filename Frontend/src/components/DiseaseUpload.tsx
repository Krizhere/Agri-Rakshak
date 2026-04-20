import { useState } from "react";
import { predictDisease } from "../api/diseaseApi";

const DiseaseUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e: any) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const res = await predictDisease(file);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="mt-10 rounded-3xl border bg-card p-8 shadow-soft max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Disease Detection</h2>

      <input type="file" onChange={handleFile} className="mb-4" />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="rounded-xl mb-4 max-h-48 object-cover"
        />
      )}

      <button
        onClick={handleUpload}
        className="w-full bg-accent text-white py-3 rounded-lg font-semibold"
      >
        {loading ? "Detecting..." : "Detect Disease"}
      </button>

      {/* ✅ RESULT UI FIXED */}
      {result && (
        <div className="mt-6 rounded-2xl border bg-muted p-5 space-y-3">
          
          <div>
            <p className="text-lg font-semibold text-destructive">
              {result.disease.replace(/___/g, " - ").replace(/_/g, " ")}
            </p>
            <p className="text-sm text-muted-foreground">
              Confidence: {result.confidence}%
            </p>
          </div>

          <div>
            <p className="font-medium">🧪 Remedy</p>
            <p className="text-sm text-muted-foreground">
              {result.remedy}
            </p>
          </div>

          <div>
            <p className="font-medium">🛡 Prevention</p>
            <p className="text-sm text-muted-foreground">
              {result.prevention}
            </p>
          </div>

          <div>
            <p className="font-medium">⚠ Severity</p>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold
              ${result.severity === "High" ? "bg-red-500 text-white" :
                result.severity === "Medium" ? "bg-yellow-500 text-black" :
                "bg-green-500 text-white"}
            `}>
              {result.severity}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-accent/10 text-accent font-medium">
            {result.advice}
          </div>

        </div>
      )}
    </div>
  );
};

export default DiseaseUpload;