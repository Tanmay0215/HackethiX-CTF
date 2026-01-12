import TypingEffect from '../components/TypingEffect'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Content from '../components/Content'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import MatrixBackground from '../components/MatrixBackground'
import TerminalWindow from '../components/TerminalWindow'
// import Navbar from '../components/Navbar' // Navbar is in App.jsx layout now

function Home() {
  
  useEffect(() => {
    document.cookie = 'debug_info=Q1RGe2Nvb2tpZV9tb25zdGVyfQ==; path=/; Secure;'
    console.log('%c STOP!', 'color: red; font-size: 50px; font-weight: bold;')
    console.log('%c Looking for flags? CTF{c0ns0l3_l0g}', 'color: #00ff41; font-size: 20px; font-family: monospace;')
  }, [])

  const notifySuccess = () =>
    toast.success('🎉 Flag Unlocked!! CTF{cl1ck3r_g4m3_pr0}', {
      icon: '🔓'
    })

  function secretButton() {
    let clicks = 0 // Note: This local variable resets effectively making it 1 click. Original logic was weird but kept functionality.
    clicks++
    if (clicks === 1) {
      notifySuccess()
    }
  }

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center">
      <MatrixBackground />
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-10 text-center z-10">
        <div 
          className="inline-block mb-4 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono tracking-widest uppercase"
          data-secret="CTF{d0m_1nsp3ct0r_g4dg3t}"
        >
          System Online • v2.0.4
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 block mb-2">
            HackethiX CTF
          </span>
          <div className="h-20 flex items-center justify-center">
            <TypingEffect
              text={['INITIALIZE_HACK...', 'FIND_THE_FLAGS...', 'SECURE_THE_SYSTEM...']}
              speed={50}
              eraseSpeed={30}
              eraseDelay={2000}
            />
          </div>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Welcome to the ultimate Capture The Flag challenge. Test your skills in cryptography, web exploitation, and reverse engineering.
        </p>

        <div className="relative group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <button
            onClick={secretButton}
            className="relative px-8 py-4 bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600"
          >
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-gray-100 font-bold tracking-wider uppercase group-hover:text-green-400 transition-colors">Start Hacking</span>
            </span>
            <span className="pl-6 text-green-500 font-mono group-hover:text-white transition-colors">
              &gt;_ EXECUTE
            </span>
          </button>
        </div>
      </div>

      {/* Terminal Visualization */}
      <div className="mt-20 relative px-4 w-full max-w-4xl z-20">
        <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full opacity-50"></div>
        <TerminalWindow />
      </div>

      <Content />
      <Footer />
    </div>
  )
}
export default Home
