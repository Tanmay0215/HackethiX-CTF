import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const checkSQLInjection = () => {
    if (email == 'admin' && password == 'admin') {
      toast.success('🎉 Flag Unlocked!! CTF{sql_b4s1cs_101}')
      navigate('/')
    } else {
      console.log('No SQL Injection Detected')
      // navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-green-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 uppercase">
          Login Form
        </h2>
        <form className="">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-green-500 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-green-500 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            id="login"
            onClick={checkSQLInjection}
            className="w-full p-3 rounded-lg bg-green-500 text-gray-900 font-bold hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
