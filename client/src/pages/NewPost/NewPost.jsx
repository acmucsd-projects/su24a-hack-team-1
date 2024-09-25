import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import 'react-easy-crop/react-easy-crop.css';
import './newpost.css';
import VerticalNavbar from "../../components/VerticalNavbar";

const NewPost = () => {
  const [taskName, setTaskName] = useState('');
  const [taskTags, setTaskTags] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [quota, setQuota] = useState(1);
  const [deadline, setDeadline] = useState('');

  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setShowCropModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleConfirmCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImg = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImg);
      setImageSrc(null); // Clear original image src after cropping
      setShowCropModal(false);
    }
  };

  const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );

        canvas.toBlob((blob) => {
          if (!blob) {
            return reject(new Error('Canvas is empty'));
          }
          const croppedImage = window.URL.createObjectURL(blob);
          resolve(croppedImage);
        }, 'image/jpeg');
      };
      image.onerror = () => {
        reject(new Error('Image load error'));
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here
    console.log({
      taskName,
      croppedImage,
      taskTags,
      taskDescription,
      quota,
      deadline,
    });
  };

  return (
    <div className="new-post">
      <VerticalNavbar />
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-item">
          <span className="circle">1</span>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
        </div>

        <div className="form-item">
          <span className="circle">2</span>
          <label>Image Upload:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* <div className="form-item">
          <span className="circle">3</span>
          <label>Task Tags:</label>
          <input
            type="text"
            value={taskTags}
            onChange={(e) => setTaskTags(e.target.value)}
            placeholder="Enter tags, separated by commas"
          />
        </div> */}

        <div className="form-item">
          <span className="circle">3</span>
          <label>Task Description:</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description"
          />
        </div>

        {/* <div className="form-item">
          <span className="circle">5</span>
          <label>Match Quota/Spots available:</label>
          <div className="quota-controls">
            <button
              type="button"
              className="quota-button"
              onClick={() => setQuota(Math.max(1, quota - 1))}
            >
              -
            </button>
            <span>{quota}</span>
            <button
              type="button"
              className="quota-button"
              onClick={() => setQuota(Math.min(10, quota + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="form-item">
          <span className="circle">6</span>
          <label>Match Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div> */}

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {showCropModal && (
        <div className="crop-modal">
          <div className="crop-modal-content">
            <div className="crop-container">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <button
              type="button"
              className="crop-confirm-button"
              onClick={handleConfirmCrop}
            >
              ✓ Confirm Crop
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPost;
