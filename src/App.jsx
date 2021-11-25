import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Location from './Components/Location'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home">
        
        </Route>
        <Route path="/Location">
          <Location/>
        </Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
