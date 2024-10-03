import React, { useEffect, useState } from 'react';
import './Homepage.css';
import VerticalNavbar from '../../components/VerticalNavbar';
import Post from '../../components/Post';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // To fetch data from the backend

function Homepage() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const navigate = useNavigate();

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
    navigate('/Newpost'); // Navigate to the New Post creation page
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
            <div className="post" key={post._id}>
              <div className="post-header">
                <strong>@{post.taskName}</strong> {/* Assuming post has a 'username' field */}
              </div>
              <img
                src={`http://localhost:4000/uploads/${post.croppedImage}`} // Assuming post.image contains the filename
                alt="Post Image"
                className="post-image"
              />
              <div className="post-footer">
                <Post />
                <p>{post.taskDescription}</p> {/* Assuming post has a 'description' field */}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Homepage;
