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
    <div className="min-h-screen max-w-5xl mx-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-5"
      >
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="eventId"
                className="block text-white font-medium mb-2"
              >
                Thon ID
              </label>
              <input
                type="text"
                id="eventId"
                value={eventId}
                placeholder="Enter Thon ID"
                onChange={(e) => setEventId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="teamName"
                className="block text-white font-medium mb-2"
              >
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                value={teamName}
                placeholder="Enter Team Name"
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-white font-medium">Flags</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4 md:gap-3">
            {flags.map((flag, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  placeholder={`Flag ${index + 1}`}
                  value={flag}
                  onChange={(e) => handleFlagChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-gray-200 font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
        <Link to="/" className="block text-center text-sm text-gray-300 p-2">
          Back to Home
        </Link>
      </form>
    </div>
  )
}

export default EventForm
