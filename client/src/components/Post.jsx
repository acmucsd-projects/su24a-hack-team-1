import React, { useState } from 'react';
import './Post.css';

const Post = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (iconType) => {
    setActiveIcon(iconType);
  };

  return (
    <div>
      <span
        className={`post-icon-container checkmark ${activeIcon === 'checkmark' ? 'active' : ''}`}
        onClick={() => handleClick('checkmark')}
      >
        <i className="ri-checkbox-line post-icon"></i>
      </span>
      <span
        className={`post-icon-container x-icon ${activeIcon === 'x-icon' ? 'active' : ''}`}
        onClick={() => handleClick('x-icon')}
      >
        <i className="ri-checkbox-indeterminate-line post-icon"></i>
      </span>
    </div>
  );
};

export default Post;