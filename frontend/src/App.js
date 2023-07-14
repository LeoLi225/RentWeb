import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./components/Cars";
import Create from "./components/Create";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      

      <Route path="/" exact>
        <Navbar />
        <Home />
      </Route>

      <Route path="/cloud">
        <Notes />
      </Route>

      <Route path="/create">
      <Navbar />
        <Create />
      </Route>


    </Router>
  )
}

export default App;
