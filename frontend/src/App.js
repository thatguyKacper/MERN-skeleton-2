import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from './user/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
