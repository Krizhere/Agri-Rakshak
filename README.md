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
├── frontend       # (auto-downloaded, ignored in git)
│
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

### 👉 Automatic Download

Models will be downloaded automatically when you run the backend.

OR manually run:

```bash
python backend/scripts/download_model.py
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

## 📌 Important Notes

* ❌ Do NOT upload:

  * `venv/`
  * `models/`
  * `.env`
  * `node_modules/`

* ✅ Always keep:

  * `requirements.txt`
  * clean folder structure

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
