import ReactTypingEffect from 'react-typing-effect'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Content from '../components/Content'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function App() {
  
  useEffect(() => {
    document.cookie = 'debug_info=Q1RGe2Nvb2tpZV9tb25zdGVyfQ==; path=/; Secure;'
    console.log('Looking for flags? CTF{c0ns0l3_l0g}')
  })

  const notifySuccess = () =>
    toast.success('🎉 Flag Unlocked!! CTF{cl1ck3r_g4m3_pr0}')


  function secretButton() {
    let clicks = 0
    clicks++
    if (clicks === 1) {
      notifySuccess()
      // console.log("Flag Unlocked!! CTF{cl1ck3r_g4m3_pr0}");
    }
  }
  return (
    <div className="h-screen flex flex-col relative bg-gray-900 text-white">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4 p-5 text-green-500">
        <ReactTypingEffect
          text={['Are you ready!!', 'Find 10 Flags to win the game!!']}
          speed={75}
          eraseSpeed={50}
          cursor={'_'}
        />
      </h1>

      <img
        src="ctf.jpeg"
        alt="CTF"
        className="w-full max-w-2xl mx-auto mb-4 rounded shadow-lg"
      />

      <button
        onClick={secretButton}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Reveal a Flag
      </button>

      <Content />
      <Footer />
    </div>
  )
}
export default App
