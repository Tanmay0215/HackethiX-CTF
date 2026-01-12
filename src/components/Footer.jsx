import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto relative z-10 border-t border-green-500/20">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter text-white mb-4 flex items-center gap-2">
              <span className="text-green-500 text-3xl">⌘</span>
              HackethiX<span className="text-green-500">_CTF</span>
            </h2>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed font-mono">
              // Advanced cybersecurity training ground. 
              // Test your skills in a simulated high-stakes environment.
            </p>
          </div>
          
          <div>
            <h3 className="text-green-500 font-mono font-bold uppercase tracking-wider mb-4 text-sm">Coordinates</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li><Link to="/" className="hover:text-green-400 transition-colors">./home</Link></li>
              <li><Link to="/leaderboard" className="hover:text-green-400 transition-colors">./leaderboard</Link></li>
              <li><Link to="/submit" className="hover:text-green-400 transition-colors">./submit_flag</Link></li>
              <li><Link to="/login" className="hover:text-green-400 transition-colors">./auth_login</Link></li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-green-500 font-mono font-bold uppercase tracking-wider mb-4 text-sm">System Status</h3>
             <div className="space-y-3">
               <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Servers Online
               </div>
               <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></span>
                 Database Secure
               </div>
               <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
                 <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-150"></span>
                 Intrusion Detected
               </div>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} HackethiX Systems. encrypted_connection::established
          </p>
          <div className="text-xs text-gray-600 font-mono">
            v2.0.4 [STABLE]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
