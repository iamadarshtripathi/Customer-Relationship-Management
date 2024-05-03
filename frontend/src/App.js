import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Employees from "./components/Employees";
import Manage from "./components/Manage";
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Navsidebar'

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/employees" element={<Employees />} />
        <Route exact="true" path="/manage" element={<Manage />} />
      </Routes>
    </Router>
  );
}

export default App;
