import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home">
        
        </Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
