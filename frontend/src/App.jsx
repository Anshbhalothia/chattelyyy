import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import getCurrentUser from './hooks/getCurrentUser.jsx'
import Home from './pages/Home.jsx'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Profile from './pages/Profile.jsx'

function App() {
  getCurrentUser();
  let {userData}=useSelector(state=>state.user)
  return (
    <Routes>
      <Route path="/" element={userData ? <Home /> : <Navigate to="/login" />} />
     <Route path="/profile" element={ <Profile /> } />
      {/* <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/signup" />} /> */}
      <Route path="/login" element={!userData ? <Login /> :<Navigate to="/" />} />
      <Route path="/signup" element={!userData ? <Signup /> :<Navigate to="/profile" />} />
    </Routes>
  )
}

export default App