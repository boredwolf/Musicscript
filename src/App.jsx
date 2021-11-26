import { useState } from "react";
import "./App.css";
import Connexion from "./Components/Connexion";
import Home from "./Components/Home";
import Scroll from "./Components/Scroll";
import Finish from "./Components/Finish";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isConnect, setIsConnect] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isFinish, setIsFinish] = useState(false)

  function HomeToConnection() { 
    setIsHome(!isHome);
    setIsConnect(!isConnect);
  }
  function ConnectToScroll() {
    setIsConnect(!isConnect);
    setIsScroll(!isScroll);
  }

  function ScrollToFinish() {
    setIsScroll(!isScroll);
    setIsFinish(!isFinish);
  }

  function FinishToHome() {
    setIsFinish(!isFinish);
    setIsHome(!isHome);
  }

  return (
    <div>
     
      {isHome ? <Home HomeToConnection={HomeToConnection}/> : null}
      {isConnect ? <Connexion ConnectToScroll={ConnectToScroll} /> : null}
      {isScroll ? <Scroll ScrollToFinish={ScrollToFinish} /> : null}
      {isFinish ? <Finish FinishToHome={FinishToHome}  /> : null}
    </div>
  );
}

export default App;
