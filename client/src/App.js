import './App.css';
import React from "react";
import { Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import NavBar from './components/NavBar';
import Videogame from "./components/Videogame";
import Form from "./components/Form";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={NavBar}/>
      <Route exact path = "/home" component={Home}/>
      <Route path="/videogame/:id" component={Videogame}/>
      <Route path="/home/create" component={Form}/>
    </div>
  );
}


export default App;
