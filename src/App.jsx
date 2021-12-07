import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home/Home'
import './App.css'

function App() {
  return (
    <main className="container">
      <Router>
        <header>
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>
        </header>
        <Switch>
          <Route path="/teams/:id" exact component={TeamsDetail} />
          <Route path="/teams" exact component={TeamsList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
