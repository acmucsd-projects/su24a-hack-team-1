import React, { useState, useEffect } from 'react';
import ProfVNavbar from '../../components/ProfNavbar/ProfVNavBar';
import './upload.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    school: '',
    bio: '',
    website: '',
    resume: null,
    profilePic: null, // Add profilePic to the form data
  });

  const [profilePicPreview, setProfilePicPreview] = useState(null); // Store the preview URL
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  // Fetch existing profile data when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        const response = await axios.get('/api/profile', {
          headers: {
            'Authorization': token,
          },
        });

        // Populate the form with the existing profile data
        setFormData({
          name: response.data.name,
          location: response.data.location,
          school: response.data.school,
          bio: response.data.bio,
          website: response.data.website,
          profilePic: response.data.profilePic, // This is the filename or URL, not a File object
          resume: response.data.resume, // This is the filename or URL, not a File object
        });

        if (response.data.profilePic) {
          setProfilePicPreview(response.data.profilePic);
        }
        setIsEditMode(true);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profilePic') {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      setProfilePicPreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('location', formData.location);
    formDataObj.append('school', formData.school);
    formDataObj.append('bio', formData.bio);
    formDataObj.append('website', formData.website);
    formDataObj.append('profilePic', formData.profilePic); 
    formDataObj.append('resume', formData.resume); 

    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    const requestType = isEditMode ? axios.put : axios.post;
    // Make a POST request with FormData and send the token in headers
    requestType('/api/upload', formDataObj, {
      headers: {
        'Content-Type': 'multipart/form-data', 
        'Authorization': token, // Send the JWT token in the Authorization header
      },
    })
      .then(response => {
        console.log(response.data);
        navigate('/Profile');
      })
      .catch(error => {
        console.error('Error creating profile:', error);
      });
  };
  

  return (
    <>
      <ProfVNavbar />
      <div id="form-container">
        <div className="profile-form-container">
            <h1 className='profile-h1'>Your Profile</h1>
            <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="school">School:</label>
                <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter your school"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="bio">Bio/Interests:</label>
                <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us a little about yourself"
                required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="website">Website:</label>
                <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter your website URL"
                />
            </div>

            <div className="form-group">
                <label htmlFor="profilePic">Upload Profile Picture:</label>
                <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
                />
            </div>

            {/* Display Profile Picture Preview */}
            {profilePicPreview && (
                <div className="profile-pic-preview">
                <img src={profilePicPreview} alt="Profile Preview" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                </div>
            )}

            <div className="form-group">
                <label htmlFor="resume">Upload Resume:</label>
                <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                required
                />
            </div>

            <button type="submit" className="profile-submit-btn">Submit</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Profile;