import React, { useState } from 'react';
import ProfVNavbar from '../../components/ProfVNavBar';
import './profile.css';

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profilePic') {
      const file = files[0];
      setFormData({
        ...formData, //keeps old data
        [name]: file, //updates by adding new pic file in formData
      });
      setProfilePicPreview(URL.createObjectURL(file)); // Create a preview URL
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
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
