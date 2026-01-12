import { Link } from 'react-router-dom'
import MatrixBackground from '../components/MatrixBackground'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      <div className="text-center z-10 glass-panel p-12 rounded-2xl max-w-lg mx-4 border-red-500/30">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 mb-4 font-mono tracking-tighter">
          404
        </h1>
        <div className="bg-red-500/20 text-red-500 font-mono font-bold py-1 px-4 inline-block rounded mb-6 animate-pulse">
           CRITICAL_ERROR: SIGNAL_LOST
        </div>
        
        <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed">
          The requested sector is offline or has been purged from the mainframe.
          <br />
          Return to base immediately.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-green-500 text-green-500 font-mono font-bold hover:bg-green-500 hover:text-black transition-all duration-300 rounded uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        >
          <span className="mr-2">&lt;</span> Reroute to Safety
        </Link>
      </div>
    </div>
  )
}

export default NotFound
