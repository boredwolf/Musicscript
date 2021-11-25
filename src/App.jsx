import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Connexion from './Components/Connexion'
import Location from './Components/Location'
import Home from './Components/Home';
import Formules from './Components/Formules';
import Choice from './Components/Choice';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home"></Route>
        <Route path="/connexion" element={<Connexion/>}> </Route>
        <Route path="/formules" element={<Formules/>}> </Route>
        <Route path="/choice" element={<Choice/>}> </Route>
        <Route exact path="/">
        </Route>
        <Route path="/location" element={<Location/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
