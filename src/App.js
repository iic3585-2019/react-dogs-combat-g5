import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catch from "./views/Catch";
import Team from "./views/Team";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="box">
          <Route exact path="/" component={Catch} />
          <Route path="/team" component={Team} />
        </div>
      </div>
    </Router>
  )
}

const Header = () => {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-active">
        <Link className="navbar-item" to="/">Atrapa doggos!</Link>
        <Link className="navbar-item" to="/team">Equipo doggo</Link>
      </div>
    </nav>
  )
}

export default App