import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Location from './Components/Location'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Location/>
    </div>
  )
}

export default App
