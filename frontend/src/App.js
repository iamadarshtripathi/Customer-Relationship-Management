import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Navsidebar'

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
