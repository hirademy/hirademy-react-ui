import React from 'react';
import favicon  from "../../components/assets/favicon.png";

const SideBar = () => {


  return (
    <div className="sidebar-container flex flex-col"> {/* Ensure flex-col is applied */}
    <div className="sidebar w-56 shadow-sm h-screen bg-white text-sky-900 flex flex-col justify-between">
      <div>
        <div className="flex items-center"> {/* Ensure items-center to align items vertically */}
          <div>
            <img className="bg-slate-00 rounded-full mt-2 ml-3 h-10 border-slate-800" src={favicon} alt="Profile" />
          </div>
          <div className="p-4 text-2xl text-sky-900 font-bold">
            Dashboard
          </div>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="/dashboard" className="h-10 hover:bg-sky-600 font-medium text-base hover:text-white p-2 rounded">Dashboard</a>
          <a href="/profile" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Update Profile</a>
          <a href="/tests" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Take Test/Assignment</a>
          <a href="/apply" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Apply for Internship</a>
          <a href="/results" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Results</a>
          <a href="/projects" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Assigned Project</a>
          <a href="/mentor" className="hover:bg-sky-600 p-2 hover:text-white font-medium text-base rounded">Assigned Mentor</a>
        </nav>
      </div>
      <div className="p-0">
        <button className="w-[205px] h-10 mb-5 bg-sky-600 mx-2 text-white font-medium rounded-lg hover:bg-orange-700">Logout</button>
      </div>
    </div>
  </div>
  );
}

export default SideBar;
