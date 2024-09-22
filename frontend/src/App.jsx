import React from 'react';
import AgeBuckets from './components/AgeBuckets';
import DatabaseDisplay from './components/DatabaseDisplay';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeBuckets />} />
        <Route path="/database" element={<DatabaseDisplay/>} />
      </Routes>
    </Router>
  );
}

export default App;
