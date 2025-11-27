import React, { useState } from 'react';
import './postings.css';
import { useNavigate } from 'react-router-dom';
import VerticalNavbar from "../../components/VerticalNavbar";

const Postings = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
    const [currentIndex, setCurrentIndex] = useState(null); // State to store the current index for navigation

    // Sample gallery image URLs
    const galleryImages = [
        'https://m.media-amazon.com/images/I/81lnPKhwFfL._AC_UF894,1000_QL80_.jpg', // Sample Image 1
        'https://m.media-amazon.com/images/I/71cDPa1NSfL._AC_UF894,1000_QL80_.jpg', // Sample Image 2
        'https://m.media-amazon.com/images/I/818UxJzyshL.jpg', 'https://m.media-amazon.com/images/I/81oq4x6xo8L.jpg' // Empty placeholders
    ];

    const handleClick = () => {
      navigate('/EditProfile'); // Navigate to the Edit Profile page
    };

    const openModal = (index) => {
        setSelectedImage(galleryImages[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
    };

    const goToPrev = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
    };

    return (
        <div>
            <VerticalNavbar />

            <header className="postings-header">
                
    <div className="profile-info">
        <div className="profile-pic-holder"></div>
        <h2>First Name Last Name - Location</h2>
    </div>
    <div className="bttns">
        <button id="btn-edit-pf" onClick={handleClick}>Edit Profile</button>
    </div>
    {/* Separate lines for the website and bio below the buttons */}
    
</header>
<a href="#" className="website-link">www.example.com</a>
<p className="bio">This is a short bio placeholder. Add more text about yourself here.</p>

            <header className="line"></header>

            <div className="profile-container">
                <div className="gallery">
                    {galleryImages.map((image, index) => (
                        <div key={index} onClick={() => openModal(index)}>
                            {image ? (
                                <img src={image} alt={`Gallery item ${index}`} />
                            ) : (
                                <div className="placeholder">+</div> // Placeholder content
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        
                        <div className="modal-header">
                            <div className="profile-pic-holder"></div>
                            <h2>First Name Last Name</h2>
                        </div>
                        
                        <p className="task-title">Task Title</p>
                        <img src={selectedImage} alt="Enlarged view" className="modal-image" />
                        <p className="task-description">Task description goes here...</p>

                        <button className="prev" onClick={goToPrev}>&#8249;</button>
                        <button className="next" onClick={goToNext}>&#8250;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Postings;
