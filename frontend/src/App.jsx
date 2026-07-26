import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import getCurrentUser from './hooks/getCurrentUser.jsx'

function App() {
  getCurrentUser();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App