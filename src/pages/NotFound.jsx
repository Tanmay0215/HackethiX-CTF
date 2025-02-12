import { Link } from 'react-router-dom'
import MatrixBackground from '../components/MatrixBackground'
import ReactTypingEffect from 'react-typing-effect'

const NotFound = () => {
  return (
    <div className="flex h-screen text-center items-center justify-center text-white">
      <MatrixBackground />
      <div className="absolute z-10 w-full mx-auto flex flex-col">
        <ReactTypingEffect
          text={['Error 404: Page Not Found', 'CTF{3rr0r_p4g3}']}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          className="text-5xl mb-5"
        />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}
export default NotFound
