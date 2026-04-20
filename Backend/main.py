# ================================
# 📦 IMPORTS
# ================================
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tensorflow.keras.models import load_model
import numpy as np
import json
import joblib
from PIL import Image
import io
import os
import pandas as pd
import xgboost

# ================================
# 🚀 APP INIT
# ================================
app = FastAPI(title="🌱 Smart Agriculture API")

# ================================
# 🔌 CORS MIDDLEWARE (Enable Frontend Connection)
# ================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================================
# 🌱 LOAD DISEASE MODEL
# ================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "plant_disease_model-mobileNet.h5")

try:
    disease_model = load_model(model_path, compile=False)

    with open(os.path.join(BASE_DIR, "class_names.json"), "r") as f:
        class_names = json.load(f)

    with open(os.path.join(BASE_DIR, "disease_info.json"), "r") as f:
        disease_info = json.load(f)

    print("✅ Disease model loaded")

except Exception as e:
    print("❌ Disease model error:", e)
    disease_model = None

# ================================
# 🌾 LOAD YIELD MODEL
# ================================
try:
    yield_model = joblib.load("yield_model.joblib")
    feature_names = joblib.load("features.joblib")

    print("✅ Yield model loaded")

except Exception as e:
    print("❌ Yield model error:", e)
    yield_model = None
    feature_names = None

# ================================
# 🏠 HOME
# ================================
@app.get("/")
def home():
    return {"message": "AI Agriculture API Running 🚀"}

# ================================
# 🌱 DISEASE PREDICTION
# ================================
@app.post("/predict-disease")
async def predict_disease(file: UploadFile = File(...)):
    try:
        if disease_model is None:
            return {"error": "Disease model not loaded"}

        contents = await file.read()
        img = Image.open(io.BytesIO(contents)).convert("RGB").resize((224, 224))

        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = disease_model.predict(img_array)

        predicted_index = int(np.argmax(prediction))
        predicted_class = list(class_names.values())[predicted_index]
        confidence = float(np.max(prediction))

        # 🔥 Get disease suggestions
        info = disease_info.get(predicted_class, {})

        return {
            "disease": predicted_class,
            "confidence": round(confidence * 100, 2),
            "remedy": info.get("remedy", "No suggestion available"),
            "prevention": info.get("prevention", "No prevention info"),
            "severity": info.get("severity", "Unknown"),
            "advice": f"⚠️ {predicted_class} detected. Take action quickly to avoid yield loss."
        }

    except Exception as e:
        return {"error": str(e)}

# ================================
# 🌾 INPUT SCHEMA
# ================================
class YieldInput(BaseModel):
    Area: float
    State_Name: str
    Season: str
    Crop: str

# ================================
# 🔍 HELPER FUNCTION
# ================================
def find_feature_key(prefix, value):
    value = value.strip().lower()

    for feature in feature_names:
        if feature.startswith(prefix):
            feature_value = feature.replace(prefix, "").strip().lower()

            if value.replace(" ", "") == feature_value.replace(" ", ""):
                return feature

    return None

# ================================
# 🌾 YIELD PREDICTION
# ================================
@app.post("/predict-yield")
def predict_yield(data: YieldInput):
    try:
        if yield_model is None or feature_names is None:
            return {"error": "Yield model not loaded"}

        input_dict = {feature: 0 for feature in feature_names}
        input_dict["Area"] = data.Area

        state_key = find_feature_key("State_Name_", data.State_Name)
        season_key = find_feature_key("Season_", data.Season)
        crop_key = find_feature_key("Crop_", data.Crop)

        if not state_key:
            return {"error": f"Invalid State_Name: {data.State_Name}"}
        if not season_key:
            return {"error": f"Invalid Season: {data.Season}"}
        if not crop_key:
            return {"error": f"Invalid Crop: {data.Crop}"}

        input_dict[state_key] = 1
        input_dict[season_key] = 1
        input_dict[crop_key] = 1

        features = pd.DataFrame([input_dict])
        features = features[feature_names]

        prediction = yield_model.predict(features)

        return {
            "yield_per_hectare": round(float(prediction[0]), 2),
            "estimated_total_yield": round(float(prediction[0]) * data.Area, 2),
            "unit": "tons",
            "insight": f"For {data.Crop} in {data.State_Name}, expected yield is {round(float(prediction[0]),2)} tons/hectare"
        }

    except Exception as e:
        return {"error": str(e)}

# ================================
# ▶️ RUN SERVER
# ================================
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)