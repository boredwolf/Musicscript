import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Connexion from "./Components/Connexion";

import Location from "./Components/Location";

import Home from "./Components/Home";

import Formules from "./Components/Formules";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
