# DeepFake Face Detection

## 🎥 YouTube Demo
(Add YouTube video link here after upload)

## Project Description
A deepfake detection system that uses machine learning to identify fake images and videos. The system analyzes facial features and patterns to determine whether media content is authentic or manipulated, helping combat the spread of misinformation and synthetic media.

## Tech Stack
- **Backend**: Python, FastAPI, TensorFlow
- **Frontend**: React, Vite, TailwindCSS
- **Machine Learning**: TensorFlow/Keras, OpenCV, NumPy
- **Image Processing**: Pillow, OpenCV
- **Web Server**: Uvicorn, Gunicorn
- **Deployment**: Heroku (Procfile included)

## How to Run

### Prerequisites
- Python 3.8+
- Node.js 16+
- Git

### Backend Setup
1. Clone the repository:
```bash
git clone <repository-url>
cd deepfake-detection
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Start the backend server:
```bash
uvicorn app:app --reload
```

### Frontend Setup
1. Navigate to client directory:
```bash
cd client
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Local Server
```bash
# Backend server (default port 8000)
uvicorn app:app --host 0.0.0.0 --port 8000

# Frontend development server (default port 5173)
cd client && npm run dev
```

## API Endpoints
- `POST /predictImage` - Upload and analyze images for deepfake detection
- `POST /predictVideo` - Upload and analyze videos for deepfake detection
- `GET /` - Health check endpoint

## Model Information
The system uses a pre-trained deepfake detection model (`deepfake2.keras`) that analyzes facial features and patterns to distinguish between real and synthetic media.