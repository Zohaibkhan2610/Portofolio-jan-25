import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
