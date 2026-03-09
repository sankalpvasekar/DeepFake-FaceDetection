// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { BsUpload } from "react-icons/bs";
// import { CiImageOn, CiVideoOn } from "react-icons/ci";
// import { DNA } from 'react-loader-spinner';

// import useHover from "./hooks/useHover";

// const App = () => {

//   const BASEURL = 'http://localhost:8000';

//   const [videoUrl, setVideoUrl] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState('');

//   const [loading, setLoading] = useState(false);

//   const [isHover, hoverRef] = useHover();
//   const [isHover2, hoverRef2] = useHover();

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setVideoUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const predictVideo = async () => {
//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append('video', selectedFile);

//       const res = await fetch(`${BASEURL}/predictVideo`, {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();
//       setResult(data);
//       setLoading(false);
//       toast.success("Predicted Successfully");

//     } catch (error) {
//       toast.error("API Error!");
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   const predictImage = async () => {
//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       const res = await fetch(`${BASEURL}/predictImage`, {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();
//       setResult(data);
//       setLoading(false);
//       toast.success("Predicted Successfully");

//     } catch (error) {
//       toast.error("API Error!");
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   const reset = () => {
//     setVideoUrl('');
//     setImageUrl('');
//     setSelectedFile(null);
//     setResult('');
//   };

//   return (
//     <div>
//       {!loading ? (
//         <div className="min-h-screen min-w-full flex flex-col gap-6 items-center justify-center p-4 bg-[#0F172A]">
          
//           <div className="container">
//             <h1 className="text-4xl font-bold mb-4">Deepfake Detection</h1>
//             <p className="text-lg mb-8">Upload your video or image to detect deepfakes.</p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
//               <label ref={hoverRef} className="button video-btn cursor-pointer">
//                 <div className="text-center text-xl">Upload Video</div>
//                 <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
//                 {isHover ? <BsUpload size={70} /> : <CiVideoOn size={70} />}
//               </label>

//               <label ref={hoverRef2} className="button image-btn cursor-pointer">
//                 <div className="text-center text-xl">Upload Image</div>
//                 <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                 {isHover2 ? <BsUpload size={70} /> : <CiImageOn size={70} />}
//               </label>
//             </div>

//             {videoUrl && (
//               <video controls className="w-full rounded-2xl mb-6">
//                 <source src={videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}

//             {imageUrl && (
//               <img src={imageUrl} alt="Uploaded" className="w-full rounded-2xl mb-6" />
//             )}

//             {result && (
//               <div className={`result ${result.result === 0 ? 'result-real' : result.result === 1 ? 'result-fake' : 'result-no-face'}`}>
//                 {result.result === 0 ? "Real" : result.result === 1 ? "Fake" : "No face detected"}
//               </div>
//             )}

//             <div className="flex justify-center gap-4 mt-6">
//               {videoUrl || imageUrl ? (
//                 <button onClick={reset} className="button video-btn">Try Another</button>
//               ) : null}
//               {videoUrl && !result ? (
//                 <button onClick={predictVideo} className="button image-btn">Predict Video!</button>
//               ) : null}
//               {imageUrl && !result ? (
//                 <button onClick={predictImage} className="button image-btn">Predict Image!</button>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="min-h-screen min-w-full flex items-center justify-center bg-[#0F172A]">
//           <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" />
//           <h1>Be patient, It may take a while...</h1>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsUpload } from "react-icons/bs";
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import { DNA } from 'react-loader-spinner';

import useHover from "./hooks/useHover";

const App = () => {

  const BASEURL = 'http://localhost:8000';

  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const [isHover, hoverRef] = useHover();
  const [isHover2, hoverRef2] = useHover();

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const predictVideo = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('video', selectedFile);

      const res = await fetch(`${BASEURL}/predictVideo`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      setResult(data);
      setLoading(false);
      toast.success("Predicted Successfully");

    } catch (error) {
      toast.error("API Error!");
      setLoading(false);
      console.log(error);
    }
  };

  const predictImage = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('image', selectedFile);

      const res = await fetch(`${BASEURL}/predictImage`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      setResult(data);
      setLoading(false);
      toast.success("Predicted Successfully");

    } catch (error) {
      toast.error("API Error!");
      setLoading(false);
      console.log(error);
    }
  };

  const reset = () => {
    setVideoUrl('');
    setImageUrl('');
    setSelectedFile(null);
    setResult('');
  };

  return (
    <div>
      {!loading ? (
        <div className="min-h-screen min-w-full flex flex-col gap-6 items-center justify-center p-4 bg-[#0F172A] text-white">

          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">Deepfake Detection</h1>
            <p className="text-lg mb-8">Upload your video or image to detect deepfakes.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <label ref={hoverRef} className="button video-btn cursor-pointer">
                <div className="text-center text-xl">Upload Video</div>
                <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
                {isHover ? <BsUpload size={70} /> : <CiVideoOn size={70} />}
              </label>

              <label ref={hoverRef2} className="button image-btn cursor-pointer">
                <div className="text-center text-xl">Upload Image</div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                {isHover2 ? <BsUpload size={70} /> : <CiImageOn size={70} />}
              </label>
            </div>

            {/* Display Video or Image */}
            {videoUrl && (
              <video controls className="w-full rounded-2xl mb-6">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="w-full rounded-2xl mb-6" />
            )}

            {/* Enhanced Result Display */}
            {result && (
              <div className="text-center my-8">
                <div
                  className={`text-7xl font-extrabold ${
                    result.result === 0 ? 'text-green-400' : result.result === 1 ? 'text-red-400' : 'text-yellow-400'
                  } animate-pulse`}
                >
                  {result.result === 0 ? "Real" : result.result === 1 ? "Fake" : "No face detected"}
                </div>

                <p className="text-lg mt-4">
                  {result.result === 0
                    ? "✅ This appears to be a genuine media file."
                    : result.result === 1
                    ? "⚠️ Warning! This might be a deepfake."
                    : "⚠️ No face detected, please try another media."}
                </p>
              </div>
            )}

            <div className="flex justify-center gap-4 mt-6">
              {videoUrl || imageUrl ? (
                <button onClick={reset} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Try Another
                </button>
              ) : null}
              {videoUrl && !result ? (
                <button onClick={predictVideo} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Predict Video!
                </button>
              ) : null}
              {imageUrl && !result ? (
                <button onClick={predictImage} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Predict Image!
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen min-w-full flex flex-col items-center justify-center bg-[#0F172A] text-white">
          <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" />
          <h1 className="mt-4">Be patient, It may take a while...</h1>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;

