import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
     <h1>Itinerary for 5 Days in the Appalachian Trail</h1>
     <p>Get ready for a 5 day 25 mile backpacking, camping + hiking, trip through Maryland's section of the Appalachian Trail.</p>
    
    <Calendar/>
    </>
  )
}

export default App
