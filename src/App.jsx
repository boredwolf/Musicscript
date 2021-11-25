import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <Navbar />
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Home />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Connexion />
        </Animator>
      </ScrollPage>

    
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Location />
        </Animator>
      </ScrollPage>

     
      <ScrollPage page={3}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Formules />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </div>
  );
}

export default App;
