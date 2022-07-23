import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Parent/Parent";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";
// import {Audio} from "react-loader-spinner"

function App() {
  // let flag=false;

  const [flag,setFlag]=useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setFlag(true)
    },1900)
  },[]);

  return (
    <Router>
    {flag?<div>
    <Navbar/>
      <Switch>
          <Router exact path="/">
          <About/>
          </Router>
          <Router exact path="/work">
          <Work/>
          </Router>
          <Router exact path="/contact">
          <Contact/>
          </Router>
          <Router exact path="/loader">
          <Loader/>
          </Router>
      </Switch>
        </div>:<Loader/>}
    </Router>
  );
}

export default App;
