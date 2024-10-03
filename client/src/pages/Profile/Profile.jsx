import React, { useState, useEffect } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import VerticalNavbar from "../../components/VerticalNavbar";
import axios from 'axios';

const Postings = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null); // State for profile data
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const [currentIndex, setCurrentIndex] = useState(null); // State to store the current index for navigation
  const [userPosts, setUserPosts] = useState([]);

  // Fetch user profile data from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Retrieve the JWT token from localStorage or sessionStorage
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        
        const profileResponse = await axios.get('http://localhost:4000/profile', {
          headers: {
            'Authorization': token, // Send the token in the Authorization header
          },
        });
        setProfileData(profileResponse.data);

        const postsResponse = await axios.get('http://localhost:4000/posts/myposts', {
            headers: {
              'Authorization': token, // Send the token in the Authorization header
            },
          });
          setUserPosts(postsResponse.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleClick = () => {
    navigate('/Upload'); // Navigate to the Edit Profile page
  };

  const openModal = (index) => {
    setSelectedImage(profileData.galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % profileData.galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(profileData.galleryImages[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + profileData.galleryImages.length) % profileData.galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(profileData.galleryImages[prevIndex]);
  };

  if (!profileData) {
    return <div>Loading profile...</div>; // Show loading while fetching data
  }

  return (
    <div>
      <VerticalNavbar />

      <header className="postings-header">
        <div className="profile-info">
          {/* Display the profile picture */}
          <div className="profile-pic-holder">
            {profileData.profilePic ? (
              <img src={`http://localhost:4000/uploads/${profileData.profilePic}`} alt="Profile" />
            ) : (
              <div className="placeholder-pic">No Image</div>
            )}
          </div>

          {/* Display Name and Location */}
          <h2>{profileData.name} - {profileData.location}</h2>
        </div>

        <div className="bttns">
          <button id="btn-edit-pf" onClick={handleClick}>Edit Profile</button>
        </div>
      </header>

      <a href={profileData.website} className="website-link" target="_blank" rel="noopener noreferrer">
        {profileData.website || 'www.example.com'}
      </a>
      <p className="bio">{profileData.bio || 'This is a short bio placeholder. Add more text about yourself here.'}</p>

      <header className="line"></header>

      <div className="profile-container">
        {/* Gallery images */}
        <div className="gallery">
          {profileData.galleryImages && profileData.galleryImages.map((image, index) => (
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

      {/* My Posts Section */}
      <div className="my-posts">
        <h2>My Posts</h2>
        {userPosts.length > 0 ? (
          <div className="post-grid">
            {userPosts.map((post) => (
              <div key={post._id} className="post-item">
                <h3>{post.taskName}</h3>
                {post.image && (
                  <img src={`http://localhost:4000/uploads/${post.image}`} alt={post.taskName} className="post-image" />
                )}
                <p>{post.taskDescription}</p>
                <p><strong>Quota:</strong> {post.quota}</p>
                <p><strong>Deadline:</strong> {new Date(post.deadline).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>You have no posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Postings;
