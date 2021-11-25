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
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        <Route path="/location" element={<Location/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
