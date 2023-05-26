import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Parking from '../src/pages/parking.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/parking" />} />
        <Route path="/parking" element={<Parking />} /> {/* Replace 'parking' with the actual component */}
      </Routes>
    </Router>
  );
}

export default App;
