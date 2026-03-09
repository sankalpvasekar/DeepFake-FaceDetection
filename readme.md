# DeepFake-FaceDetection

## 🎥 YouTube Demo
(Add YouTube video link here after upload)

## Project Description
A full-stack deepfake detection application that uses deep learning to identify manipulated images and videos. The system combines a CNN-based model with a FastAPI backend and React frontend to provide real-time deepfake detection capabilities.

## Tech Stack
- **Backend**: FastAPI, Python
- **Frontend**: React.js, Tailwind CSS, Vite
- **Machine Learning**: TensorFlow, OpenCV, NumPy
- **Model Architecture**: 10-layer Deep CNN with 653k+ parameters
- **Deployment**: Uvicorn, Gunicorn

## How to Run

### Prerequisites
- Python (>=3.10)
- Node.js (>=18.19)

### Backend Setup
1. Clone the repository
```bash
git clone https://github.com/sankalpvasekar/DeepFake-FaceDetection.git
cd DeepFake-FaceDetection/deepfake-detection
```

2. Create and activate virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

### Frontend Setup
1. Navigate to client directory
```bash
cd client
```

2. Install dependencies
```bash
npm install
```

## Local Server

### Start Backend Server
```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```
The API server will run on http://localhost:8000

### Start Frontend Development Server
```bash
cd client
npm run dev
```
The React app will run on http://localhost:5173

## Model Details
- **Architecture**: 10-layer Deep CNN with dilated convolutions
- **Input Size**: [224, 224, 3]
- **Parameters**: 653k+ trainable parameters
- **Training Accuracy**: <99.9%
- **Validation Accuracy**: <99%
- **Features**: Face detection, cropping, and binary classification

## API Endpoints
- `POST /predictImage` - Classify uploaded images
- `POST /predictVideo` - Classify uploaded videos
- `GET /` - Health check endpoint

## Performance
- **True Positive Rate**: 602 samples
- **False Positive Rate**: 7 samples  
- **False Negative Rate**: 5 samples
- **True Negative Rate**: 586 samples