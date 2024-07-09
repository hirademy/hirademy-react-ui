import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import statements
import DashBoard from "./components/DashBoard/DashBoard";
import MainHome from "./components/MainHome";
import SideBar from "./components/DashBoard/SideBar";
import Profile from "./components/DashBoard/Profile";
import Tests from "./components/DashBoard/Tests";
import Apply from "./components/DashBoard/Apply";
import { Result } from "postcss";
import Projects from "./components/DashBoard/Projects";
import Mentor from "./components/DashBoard/Mentor";
import Results from "./components/DashBoard/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHome />} />
        </Routes>
        <div className="flex">
        <SideBar />
        <div className="flex-grow p-6">
      
          <Routes>
            <Route path="/dashboard" element={< DashBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/results" element={<Results />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/logout" element={<h>logout</h>} />
          </Routes>
        </div>
      </div></div>
    </Router>
  );
}

export default App;
