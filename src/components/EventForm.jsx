import { useState } from 'react'
import { Link } from 'react-router-dom'

const EventForm = () => {
  const [eventId, setEventId] = useState('')
  const [teamName, setTeamName] = useState('')
  const [flags, setFlags] = useState(Array(10).fill(''))

  const handleFlagChange = (index, value) => {
    const updatedFlags = [...flags]
    updatedFlags[index] = value
    setFlags(updatedFlags)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      eventId,
      teamName,
      flags,
    }
    console.log('Form Data Submitted:', formData)
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 z-10 relative">
      <div className="glass-panel p-8 rounded-2xl">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-white uppercase tracking-widest font-mono">Submit Artifacts</h2>
           <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="group">
              <label htmlFor="eventId" className="block text-green-400 font-mono text-sm mb-2 uppercase tracking-wider group-focus-within:text-white transition-colors">
                Thon ID
              </label>
              <input
                type="text"
                id="eventId"
                value={eventId}
                placeholder="Ex: HACK-2024"
                onChange={(e) => setEventId(e.target.value)}
                className="input-field bg-gray-900/50"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="teamName" className="block text-green-400 font-mono text-sm mb-2 uppercase tracking-wider group-focus-within:text-white transition-colors">
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                value={teamName}
                placeholder="Ex: NullPointers"
                onChange={(e) => setTeamName(e.target.value)}
                className="input-field bg-gray-900/50"
                required
              />
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-white font-mono text-lg mb-6 border-b border-gray-700 pb-2">Captured Flags</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {flags.map((flag, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-focus-within:opacity-50 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder={`Flag ${index + 1}`}
                    value={flag}
                    onChange={(e) => handleFlagChange(index, e.target.value)}
                    className="relative w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-green-500 placeholder-gray-600 font-mono"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-8 pt-6 border-t border-gray-700/50">
             <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-mono flex items-center">
               <span className="mr-2">&larr;</span> Abort Mission
             </Link>
             
             <button
              type="submit"
              className="btn-primary w-full md:w-auto min-w-[200px]"
            >
              Upload Data
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventForm
