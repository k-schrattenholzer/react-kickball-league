import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home/Home'
import './App.css'
import TeamDetail from './views/Team/TeamDetail.jsx'
import PlayerDetail from './views/Player/PlayerDetail.jsx'
import TeamList from './views/Team/TeamList.jsx'

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
          <Route path="/players/:id" exact component={PlayerDetail} />
          <Route path="/teams/:id" exact component={TeamDetail} />
          <Route path="/teams" exact component={TeamList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
