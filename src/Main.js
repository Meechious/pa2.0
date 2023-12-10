import React, { Component } from "react";
import {Route, Routes,
        NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe"; 

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Mitchell Petain</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme">About Me</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/aboutme" element={<AboutMe />}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;