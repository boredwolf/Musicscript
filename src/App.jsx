<<<<<<< HEAD
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Connexion from "./Components/Connexion";

import Location from "./Components/Location";

import Home from "./Components/Home";

import Formules from "./Components/Formules";
=======
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

>>>>>>> c0bb187ad418e1302c5d3c11933a59b8e277bdaa

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />}/>
          <Route path="/formules" element={<Formules />}>
          </Route>
          <Route exact path="/"></Route>
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
=======
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
>>>>>>> c0bb187ad418e1302c5d3c11933a59b8e277bdaa
    </Router>
  );
}

export default App;
