import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MatrixBackground from '../components/MatrixBackground'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const checkSQLInjection = (e) => {
    e.preventDefault(); // Prevent display form submission
    
    // Simulate SQL Injection Check
    if (email === "' OR '1'='1" || (email === 'admin' && password === 'admin')) {
       // Allow classic SQLi payload or admin/admin
      toast.success('🎉 Flag Unlocked!! CTF{sql_b4s1cs_101}')
      navigate('/')
    } else {
      console.log('Query: SELECT * FROM users WHERE email = \'' + email + '\' AND password = \'' + password + '\'');
      toast.error('Access Denied: Invalid Credentials')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      
      <div className="glass-panel p-10 rounded-2xl shadow-2xl w-full max-w-md relative z-10 mx-4 border-t border-green-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-xl">
           <span className="text-4xl">🔐</span>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-2 mt-6 text-white font-mono uppercase tracking-widest">
          Secure Login
        </h2>
        <p className="text-center text-gray-400 mb-8 text-xs font-mono">AUTHORIZED PERSONNEL ONLY</p>
        
        <form onSubmit={checkSQLInjection}>
          <div className="mb-6 relative group">
            <label htmlFor="email" className="block text-green-500 font-mono text-sm mb-2 group-focus-within:text-green-400 transition-colors">
              User ID
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin"
              className="input-field bg-gray-900/80 border-gray-700 text-white placeholder-gray-600 focus:border-green-500 focus:shadow-[0_0_10px_rgba(34,197,94,0.2)]"
              autoComplete="off"
            />
          </div>
          
          <div className="mb-8 relative group">
             <label htmlFor="password" className="block text-green-500 font-mono text-sm mb-2 group-focus-within:text-green-400 transition-colors">
              Passcode
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-field bg-gray-900/80 border-gray-700 text-white placeholder-gray-600 focus:border-green-500 focus:shadow-[0_0_10px_rgba(34,197,94,0.2)]"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-black font-bold text-lg uppercase tracking-wider hover:from-green-500 hover:to-green-400 transform hover:scale-[1.02] transition-all duration-300 shadow-[0_5px_20px_rgba(34,197,94,0.3)]"
          >
            Authenticate
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 font-mono">
            Security Level: Class 4 <br/>
            Logging all attempts...
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
