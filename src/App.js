// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import TestResults   from "./components/TestResults"; // Import TestResult component
import Project from "./components/Project"; // Import Project component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/test-results" component={TestResults} /> {/* Route for TestResult */}
          <Route path="/projects" component={Project} /> {/* Route for Project */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
