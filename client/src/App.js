import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from'./pages/ContactUs'
import Home from './pages/Home'
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
