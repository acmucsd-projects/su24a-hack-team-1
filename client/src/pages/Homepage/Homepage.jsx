import React from 'react';
import './Homepage.css';
import VerticalNavbar from '../../components/VerticalNavbar';
import Post from '../../components/Post';

function Homepage() {
  const handleNewPostClick = () => {
    // Here you can implement the functionality to create a new post
    alert("New Post functionality will be implemented here.");
  };
  return (
    <>
      <VerticalNavbar />
      <div className="post-feed">
      <button className="new-post-button" onClick={handleNewPostClick}>
          New Post
        </button>
        <div className="post">
          <div className="post-header">
            <strong>@user1</strong>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>Could someone help me build this lego set? I need it done by tom asap. #lego4fun</p>
          </div>
        </div>

        <div className="post">
          <div className="post-header">
            <strong>@user2</strong>
          </div>
          <img
            src="https://cdn-media-1.freecodecamp.org/images/1*KF0dp-zZ53RDxqiX5pDCQA.jpeg"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>I'm working on this project for ACM and need help tweaking the backend! Contact if interested.</p>
          </div>
        </div>

        <div className="post">
          <div className="post-header">
            <strong>@user3</strong>
          </div>
          <img
            src="https://cdn.collegeraptor.com/wp/wp-content/uploads/2018/09/09210929/freshman-college-move-in-faq.jpg"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>I need help moving in my stuff on campus. If you could help I am going to pay $20 per hour!</p>
          </div>
        </div>
        <div className="post">
          <div className="post-header">
            <strong>@user4</strong>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>Could someone help me build this lego set? I need it done by tom asap. #lego4fun</p>
          </div>
        </div>

        <div className="post">
          <div className="post-header">
            <strong>@user5</strong>
          </div>
          <img
            src="https://cdn-media-1.freecodecamp.org/images/1*KF0dp-zZ53RDxqiX5pDCQA.jpeg"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>I'm working on this project for ACM and need help tweaking the backend! Contact if interested.</p>
          </div>
        </div>

        <div className="post">
          <div className="post-header">
            <strong>@user6</strong>
          </div>
          <img
            src="https://cdn.collegeraptor.com/wp/wp-content/uploads/2018/09/09210929/freshman-college-move-in-faq.jpg"
            alt="Post Image"
            className="post-image"
          />
          <div className="post-footer">
            <Post />
            <p>I need help moving in my stuff on campus. If you could help I am going to pay $20 per hour!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
