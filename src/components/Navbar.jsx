import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) => 
    `text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
      isActive(path) 
        ? 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]' 
        : 'text-gray-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl glass px-8 py-4 flex justify-between items-center animate-[float_6s_ease-in-out_infinite] hover:animate-none transition-all duration-500 hover:scale-[1.01]">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-green-400 transition-colors flex items-center gap-2 group">
        <span className="text-3xl text-green-500 group-hover:rotate-12 transition-transform duration-300">⌘</span>
        HackethiX<span className="text-green-500">_CTF</span>
      </Link>
      
      <div className="flex items-center gap-8">
        <Link to="/" className={linkClasses('/')}>Home</Link>
        <Link to="/submit" className={linkClasses('/submit')}>Submit</Link>
        <Link to="/leaderboard" className={linkClasses('/leaderboard')}>Leaderboard</Link>
        <Link to="/login" className="px-5 py-2 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 font-bold text-sm uppercase tracking-wider hover:bg-green-500 hover:text-gray-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
