import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Email from "./Components/Email/Email";
import Footer from "./Components/Main/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/>
        <Route path="/Projects" Component={Projects}/>
        <Route path="/Email" Component={Email}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
