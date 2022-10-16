import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
// import {Audio} from "react-loader-spinner"

function App() {
  // let flag=false;

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setFlag(true);
    }, 1900);
  }, []);

  return (
    <Router>
      <div>
        {flag ? (
          <Switch>
            <Route exact path="/">
              <div>
                <Home />
                <Navbar />
              </div>
            </Route>
            <Route exact path="/work">
              <div>
                <Navbar />
              </div>
            </Route>
            <Route exact path="/contact">
              <div>
                <Navbar />
              </div>
            </Route>
          </Switch>
        ) : (
          <Loader />
        )}
      </div>
    </Router>
  );
}

export default App;
