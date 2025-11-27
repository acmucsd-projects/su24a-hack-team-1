import React, { useEffect, useState } from 'react';
import './Homepage.css';
import VerticalNavbar from '../../components/VerticalNavbar';
import Post from '../../components/Post';
import Modal from '../../components/Modal'; // Import the Modal component
import axios from 'axios'; // To fetch data from the backend

function Homepage() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [selectedPost, setSelectedPost] = useState(null); // State to store the selected post for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Fetch project data when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts'); // Adjust the URL as needed
        setPosts(response.data); // Set posts data
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleNewPostClick = () => {
    // Navigate to the New Post creation page
    window.location.href = '/Newpost';
  };

  const handlePostClick = (post) => {
    // Set the selected post and open the modal
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const handleSave = async (postId) => {
    try {
      // Call the backend API to save the post
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:4000/posts/save', { postId }, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming you are storing the JWT token in localStorage
        }
      });
      alert('Post saved successfully!');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save the post.');
    }
  };

  return (
    <>
      <VerticalNavbar />
      <div className="post-feed">
        <button className="new-post-button" onClick={handleNewPostClick}>
          New Post
        </button>

        {/* Dynamically display posts */}
        {posts.length === 0 ? (
          <p>No posts available yet.</p>
        ) : (
          posts.map((post) => (
            <div
              className="post"
              key={post._id}
              onClick={() => handlePostClick(post)} // Set post as selected when clicked
              style={{ cursor: 'pointer' }} // Optional: to show clickable cursor
            >
              <div className="post-header">
                <strong>@{post.taskName}</strong>
              </div>
              <img
                src={`http://localhost:4000/uploads/${post.croppedImage}`} // Assuming post.image contains the filename
                alt="Post Image"
                className="post-image"
              />
              <div className="post-footer">
                <Post />
                <p>{post.taskDescription}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal to show post details */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="modal-content">
            <div className="modal-left">
              <img
                src={`http://localhost:4000/uploads/${selectedPost.croppedImage}`}
                alt="Post Image"
                className="post-image"
              />
            </div>
            <div className="modal-right">
              <h2>{selectedPost.taskName}</h2>
              <p><strong>Description:</strong> {selectedPost.taskDescription}</p>
              <p><strong>Tags:</strong> {selectedPost.taskTags?.join(', ')}</p> {/* Assuming taskTags is an array */}
              <p><strong>Quota:</strong> {selectedPost.quota}</p>
              <p><strong>Deadline:</strong> {new Date(selectedPost.deadline).toLocaleDateString()}</p>
              <p><strong>Created At:</strong> {new Date(selectedPost.createdAt).toLocaleDateString()}</p>
              <button className="save-button" onClick={() => handleSave(selectedPost._id)}>
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Homepage;
