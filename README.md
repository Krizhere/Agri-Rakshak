# 🌱 Agri-Rakshak

### AI-Powered Crop Disease Detection & Yield Prediction System

Agri-Rakshak is an AI-powered agriculture application designed to help farmers and users with **crop disease detection** and **crop yield prediction**.

The application combines a **MobileNet-based image classification model** for disease detection with an **XGBoost-based regression model** for yield prediction. A **FastAPI backend** connects these ML models with a modern React frontend.

---

## 🚀 Features

* 🌿 **Crop Disease Detection**

  * Upload a crop/leaf image
  * MobileNet analyzes the image
  * Returns the predicted disease and confidence score

* 📊 **Crop Yield Prediction**

  * Enter agricultural parameters such as crop, state, season and area
  * XGBoost predicts the expected crop yield

* ⚡ **FastAPI Backend**

  * REST API endpoints for both ML functionalities
  * Handles input processing and model inference
  * Connects the ML models with the frontend

* 💻 **Modern Frontend**

  * Built using React
  * Styled using Tailwind CSS
  * Developed with Vite

---

## 🛠️ Tech Stack

### Backend

* Python 3.11
* FastAPI
* Uvicorn
* CORS Middleware

### Machine Learning

**Disease Detection**

* TensorFlow / Keras
* MobileNet
* Image Classification

**Yield Prediction**

* XGBoost
* Scikit-learn
* Joblib
* Regression

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript

---

## 📁 Project Structure

```text
Agri-Rakshak/
│
├── backend/
│   └── app.py
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── models/
│   ├── plantdisease_model
│   ├── yield_model.joblib
│   └── features.joblib
│
├── requirements.txt
├── .gitignore
└── README.md
```

> **Note:** File names inside the `models/` directory should match the names used in `backend/app.py`.

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Krizhere/Agri-Rakshak.git
cd Agri-Rakshak
```

---

# 🐍 Backend Setup

## 2️⃣ Create a Virtual Environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

---

## 3️⃣ Install Backend Dependencies

The project now uses a **root-level `requirements.txt`**.

```bash
pip install -r requirements.txt
```

---

# 🤖 ML Model Setup

⚠️ Trained models are NOT stored in the repository (to keep it lightweight).

They are hosted on Google Drive.

### 👉 Manual Model Download
Please download the trained models manually from the Google Drive folder and place them inside the models/ directory before running the backend.

Google Drive folder: https://drive.google.com/drive/folders/1PBCUrB0KOX-ypQOFNrbHvFCYVGmdFrtZ?usp=sharing

The trained models are required by the backend for prediction.

The `models/` directory contains the trained model files and the feature-processing information required by the yield prediction model.

```text
models/
├── plantdisease_model
├── yield_model.joblib
└── features.joblib
```

### What are these files?

| File                 | Purpose                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `plantdisease_model` | Trained MobileNet model used for crop disease detection                                                                       |
| `yield_model.joblib` | Trained XGBoost yield prediction model                                                                                        |
| `features.joblib`    | Stores the feature-processing information required to transform prediction inputs into the format expected by the yield model |

Make sure the model filenames and paths match those used in the backend code.

---

# ▶️ Run the Backend

From the **project root**:

```bash
uvicorn backend.app:app --reload
```

The backend will start at:

```text
http://127.0.0.1:8000
```

FastAPI also provides interactive API documentation at:

```text
http://127.0.0.1:8000/docs
```

You can use the Swagger UI to test the API endpoints.

---

# 🌐 Frontend Setup

Open a **new terminal** while keeping the backend running.

Navigate to the frontend directory:

```bash
cd Frontend
```

## Install Frontend Dependencies

Run:

```bash
npm install
```

This installs the dependencies listed in:

```text
package.json
```

and uses:

```text
package-lock.json
```

to maintain consistent dependency versions.

---

## ▶️ Run the Frontend

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local URL, usually similar to:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

# 🔗 Frontend + Backend Connection

The frontend communicates with the FastAPI backend through HTTP API requests.

The overall flow is:

```text
User
  ↓
React Frontend
  ↓
FastAPI Backend
  ↓
ML Model
  ↓
Prediction
  ↓
FastAPI Response
  ↓
React Frontend
  ↓
Result displayed to User
```

The backend uses **CORS middleware** to allow communication between the frontend and backend running on different local ports during development.

---

# 🌿 Disease Detection Workflow

The disease detection pipeline works as follows:

```text
Crop Leaf Image
      ↓
React Frontend
      ↓
POST /predict-disease
      ↓
FastAPI
      ↓
Image Preprocessing
      ↓
MobileNet Model
      ↓
Class Probabilities
      ↓
Highest Probability Class
      ↓
Disease + Confidence
      ↓
Frontend
```

The model returns the disease class with the highest predicted probability.

---

# 📊 Yield Prediction Workflow

The yield prediction pipeline works as follows:

```text
Agricultural Input
(Crop, State, Season, Area, etc.)
          ↓
React Frontend
          ↓
POST /predict-yield
          ↓
FastAPI
          ↓
Feature Processing
          ↓
XGBoost Model
          ↓
Predicted Yield
          ↓
Frontend
```

`features.joblib` ensures that the input features are transformed consistently with the way the data was prepared during model training.

---

# 🧪 API Endpoints

## 🌿 Disease Detection

### `POST /predict-disease`

Accepts a crop/leaf image and returns the predicted disease and confidence.

**Input:**

```text
Crop/Leaf Image
```

**Output:**

```text
Disease Name
Confidence Score
```

---

## 📊 Yield Prediction

### `POST /predict-yield`

Accepts agricultural parameters and predicts crop yield.

**Input examples:**

```text
State
Crop
Season
Area
```

**Output:**

```text
Predicted Yield
```

---

# 🧠 Machine Learning

## Disease Detection — MobileNet

The project uses **MobileNet**, a lightweight Convolutional Neural Network architecture, for crop disease classification.

The model takes a crop leaf image as input and predicts the corresponding disease class.

```text
Image
 ↓
Preprocessing
 ↓
MobileNet
 ↓
Feature Extraction
 ↓
Classification
 ↓
Disease Prediction
```

---

## Yield Prediction — XGBoost

Yield prediction is a **regression problem** because the model predicts a numerical yield value.

XGBoost is used because it performs well with structured/tabular agricultural data.

```text
Agricultural Features
        ↓
Feature Processing
        ↓
XGBoost
        ↓
Yield Prediction
```

---

# 📈 Model Evaluation

The disease classification model can be evaluated using metrics such as:

* Accuracy
* Precision
* Recall
* F1-score
* Confusion Matrix

The yield prediction model can be evaluated using regression metrics such as:

* R² Score
* MAE
* MSE
* RMSE

---

# 🔐 CORS Configuration

The FastAPI backend uses CORS middleware to allow the frontend to communicate with the backend during development.

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

For production deployment, `allow_origins` should be restricted to the trusted frontend domain instead of allowing all origins.

---

# ▶️ Complete Run Guide

After cloning the repository, use the following steps.

### Terminal 1 — Backend

```bash
cd Agri-Rakshak
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend.app:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

### Terminal 2 — Frontend

```bash
cd Agri-Rakshak/Frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Keep **both terminals running** while using the application.

---

# 🔮 Future Improvements

* ☁️ Deploy the backend and frontend to cloud platforms
* 📱 Develop a dedicated mobile application
* 🌾 Add more crop and disease classes
* 🤖 Improve model accuracy with larger and more diverse datasets
* 💡 Add personalized farming recommendations
* 🌦️ Integrate weather and environmental data
* 🗄️ Add database support for storing user predictions
* 🔐 Implement authentication and authorization
* 📊 Add analytics and prediction history

---

## 👨‍💻 Project Summary

**Agri-Rakshak** combines machine learning with a web-based application to provide practical agricultural predictions.

The system uses:

```text
MobileNet → Crop Disease Detection
XGBoost   → Crop Yield Prediction
FastAPI   → Backend / API Layer
React     → Frontend
```

### Overall Architecture

```text
                 Agri-Rakshak
                      │
             ┌────────┴────────┐
             │                 │
       React Frontend     FastAPI Backend
                               │
                    ┌──────────┴──────────┐
                    │                     │
                MobileNet              XGBoost
                    │                     │
             Disease Detection      Yield Prediction
                    │                     │
                    └──────────┬──────────┘
                               │
                         Prediction
                               │
                         React Frontend
```

---

## 📌 Quick Summary

**Agri-Rakshak =**

> **React Frontend + FastAPI Backend + MobileNet Disease Detection + XGBoost Yield Prediction**

The user provides an image or agricultural information, the FastAPI backend sends the input to the appropriate trained ML model, and the prediction is returned to the frontend and displayed to the user.
