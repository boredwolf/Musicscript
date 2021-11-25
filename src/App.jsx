import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { useLocation } from "react-router"

import './App.css'
import Navbar from './Components/Navbar'
import Connexion from './Components/Connexion'

import Location from './Components/Location'


function App() {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
   const handleScrollToElement = (e) => {
     console.log(e.wheelDeltaY);
   }

   window.addEventListener('wheel', handleScrollToElement)
  }, [history])

  return (
    <Router >
    <div className="min-h-screen">
      <Navbar />
      <Switch location={location} key={location.pathname} >
        
        <Route path="/connexion" element={<Connexion/>}> </Route>
        <Route exact path="/">
              
        </Route>
        <Route path="/location" element={<Location/>} />
      </Switch>
      
      
    </div>
    </Router>
    
  )
}

export default App
