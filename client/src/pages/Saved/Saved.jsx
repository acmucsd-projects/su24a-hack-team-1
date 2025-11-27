import React, { useState } from 'react';
import './saved.css';
import { useNavigate } from 'react-router-dom';
import VerticalNavbar from "../../components/VerticalBar/VerticalNavbar";

const Saved = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
    const [currentIndex, setCurrentIndex] = useState(null); // State to store the current index for navigation

    // Sample gallery image URLs
    const galleryImages = [
        'https://www.allrecipes.com/thmb/XSJoH98eVnTCnaE6lTcDpYHbalw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9870-easy-sugar-cookies-mfs356-1-8c317695c5b645a48f6b20d1b97d3c93.jpg', // Sample Image 1
        'https://rip94550.wordpress.com/wp-content/uploads/2012/07/rings-7-2-3.png', // Sample Image 2
        'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLXNudmdyb2IuanBn.jpg', 'https://m.media-amazon.com/images/I/81oq4x6xo8L.jpg' // Empty placeholders
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



            <header className="s-line"></header>

            <div className="s-profile-container">
                <div className="s-gallery">
                    {galleryImages.map((image, index) => (
                        <div key={index} onClick={() => openModal(index)}>
                            {image ? (
                                <img src={image} alt={`Gallery item ${index}`} />
                            ) : (
                                <div className="s-placeholder">+</div> // Placeholder content
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="s-modal">
                    <div className="s-modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        
                        <div className="s-modal-header">
                            <div className="profile-pic-holder"></div>
                            <h2>First Name Last Name</h2>
                        </div>
                        
                        <p className="s-task-title">Task Title</p>
                        <img src={selectedImage} alt="Enlarged view" className="modal-image" />
                        <p className="s-task-description">Task description goes here...</p>

                        <button className="s-prev" onClick={goToPrev}>&#8249;</button>
                        <button className="s-next" onClick={goToNext}>&#8250;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Saved;
