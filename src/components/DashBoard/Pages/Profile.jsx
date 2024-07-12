// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="rounded-full w-32 h-32 mb-4"
      />
      <h1 className="text-2xl font-bold">Your Name</h1>
    </div>
  );
};

export default Profile;
