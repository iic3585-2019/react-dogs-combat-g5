import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="box">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  )
}

const Header = () => {
  return (
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-active">
        <Link class="navbar-item" to="/">Atrapa doggos!</Link>
        <Link class="navbar-item" to="/about">Equipo doggo</Link>
      </div>
    </nav>
  )
}

export default App