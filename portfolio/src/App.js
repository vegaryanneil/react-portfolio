import React, { useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
// import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect (() => {
    const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
      console.log("Resized");
    }
  };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });


  return (
    <>  
    <NavBar toggle ={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/projects' exact component={Project} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
