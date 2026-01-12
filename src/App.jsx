import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Flag from './pages/Flag'
import Submit from './pages/Submit'
import Leaderboard from './pages/Leaderboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    localStorage.setItem('debug_mode', 'CTF{l0c4l_st0r4g3_d3t3ct1v3}')
  }, [])
  return (
    <div className="min-h-screen pt-32 flex flex-col">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="glass-panel text-white border border-green-500/30"
      />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flag" element={<Flag />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
