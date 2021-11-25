import { useState } from "react";
import { Routes, Router, Route } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./App.css";
import Navbar from "./Components/Navbar";
import Connexion from "./Components/Connexion";

import Location from "./Components/Location";
import Home from "./Components/Home";
import Formules from "./Components/Formules";
import { Nav } from "reactstrap";
import Scroll from "./Components/Scroll";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isConnect, setIsConnect] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  function HomeToConnection() { </Route>
    setIsHome(!isHome);
    setIsConnect(!isConnect);
  }
  function test2() {
    setIsConnect(!isConnect);
    setIsScroll(!isScroll);
  }
  return (
    <div>
     
      {isHome ? <Home HomeToConnection={HomeToConnection}/> : null}
      {isConnect ? <Connexion test={test2} /> : null}
      {isScroll ? <Scroll /> : null}
    </div>
  );
}

export default App;
