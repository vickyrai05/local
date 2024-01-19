import React from 'react'
import './App.css';
import Navbar from './React hooks/Navbar';
import Adduser from './React hooks/Adduser';
import Alluser from './React hooks/Alluser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edituser from './React hooks/Edituser';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/All' element={<Alluser />} />
        <Route path='/Add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



