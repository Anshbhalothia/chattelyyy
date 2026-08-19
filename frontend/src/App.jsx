import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import getCurrentUser from './hooks/getCurrentUser.jsx'
import Home from './pages/Home.jsx'
import { useSelector } from 'react-redux'

function App() {
  getCurrentUser();
  let {userData}=useSelector(state=>state.user)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App