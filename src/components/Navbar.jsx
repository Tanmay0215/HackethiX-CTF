import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-6 flex justify-between items-center">
      <h2 className="text-green-500 text-3xl font-bold">
        HackethiX CTF Challenge
      </h2>
      <div className="flex gap-10 font-semibold">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/submit" className="hover:text-white">
          Submit
        </Link>
        <Link to="/leaderboard" className="hover:text-white">
          Leaderboard
        </Link>
        {/* <Link to="/flag">Flag</Link> */}
        <Link to="/login" className="hover:text-white">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar
