# 🌱 Agri-Rakshak

AI-Powered Crop Disease Detection & Yield Prediction System

---

## 🚀 Overview

Agri-Rakshak is a machine learning-based web application that helps farmers and users:

* 🌿 Detect crop diseases using image input
* 📊 Predict crop yield based on input parameters
* ⚡ Get fast and accurate results using AI models

The project uses a **FastAPI backend** and a modern frontend interface.

---

## 🛠️ Tech Stack

**Backend:**

* FastAPI
* Python 3.11
* Uvicorn

**Machine Learning:**

* TensorFlow / PyTorch (for disease detection)
* XGBoost / Scikit-learn (for yield prediction)

**Frontend:**

* HTML, CSS, JavaScript (or your AI-generated frontend)

---

## 📁 Project Structure

```
Agri-Rakshak/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── scripts/
│       └── download_model.py
│
├── frontend
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Krizhere/Agri-Rakshak.git
cd Agri-Rakshak
```

---

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate it:

**Windows:**

```bash
venv\Scripts\activate
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r backend/requirements.txt
```

---

## 🤖 Model Setup (IMPORTANT)

⚠️ Trained models are NOT stored in the repository (to keep it lightweight).

They are hosted on Google Drive.

### 👉 Manual Model Download

Please download the trained models manually from the Google Drive folder and place them inside the `models/` directory before running the backend.

Google Drive folder:
https://drive.google.com/drive/folders/1PBCUrB0KOX-ypQOFNrbHvFCYVGmdFrtZ?usp=sharing

### ✅ Tasks to Complete

1. Open the Google Drive folder link above.
2. Download both trained model files to your system.
3. Create a `models/` folder in the project root if it does not already exist.
4. Place the downloaded model files inside the `models/` folder.
5. Make sure the filenames match the ones used in the backend code.
6. Run the backend after confirming the models are in the correct location.

### ▶️ Run the Backend

```bash
uvicorn backend.app:app --reload
```

---

## ▶️ Run the Backend

```bash
uvicorn backend.app:app --reload
```

Server will start at:

```
http://127.0.0.1:8000
```

---

## 🧪 API Endpoints

### 🌿 Disease Detection

```
POST /predict-disease
```

* Input: Crop image
* Output: Disease name + confidence

---

### 📊 Yield Prediction

```
POST /predict-yield
```

* Input: State, crop, season, area, etc.
* Output: Predicted yield

---

## 🌐 Frontend

* Open frontend files in browser
* Or connect via API (`http://127.0.0.1:8000`)

---

## 🔥 Future Improvements

* Deploy on cloud (AWS / Render / Vercel)
* Add real-time farmer recommendations
* Improve model accuracy
* Mobile app integration

---

## 👨‍💻 Author

Krish Kumar

---

## ⭐ Contribute

Feel free to fork this repository and improve the project!

---

## 📜 License

This project is for educational purposes.
