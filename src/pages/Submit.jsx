import EventForm from '../components/EventForm'
import MatrixBackground from '../components/MatrixBackground'

function Submit() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      <MatrixBackground />
      <EventForm />
    </div>
  )
}

export default Submit
