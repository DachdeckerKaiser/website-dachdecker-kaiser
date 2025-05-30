import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Impressum from './pages/Impressum';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </>
  );
}

export default App;