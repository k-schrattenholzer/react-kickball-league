import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./views/Home/Home";
import "./App.css";
import AddTeam from "./views/Team/AddTeam.jsx";
import AddPlayer from "./views/Player/AddPlayer.jsx";
import TeamDetail from "./views/Team/TeamDetail.jsx";
import PlayerDetail from "./views/Player/PlayerDetail.jsx";
import TeamList from "./views/Team/TeamList.jsx";
import PlayerList from "./views/Player/PlayerList.jsx";
import EditTeam from "./views/Team/EditTeam.jsx";
import EditPlayer from "./views/Player/EditPlayer.jsx";

export default function App() {
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
          <NavLink to="/players" className="App-link" exact>
            Players
          </NavLink>
        </header>

        <Switch>
            <Route exact path="/teams/edit/:id" component={EditTeam} />
            <Route exact path="/players/edit/:id" component={EditPlayer} />
            <Route exact path="/teams/new" component={AddTeam} />
            <Route exact path="/players/new" component={AddPlayer} />
            <Route
              exact path="/players/:id"
              render={(routerProps) => (
                <PlayerDetail
                  label="Toddler League Player Detail"
                  {...routerProps}
                />
              )}
            />

            <Route
              exact path="/teams/:id"
              render={(routerProps) => (
                <TeamDetail label="Team Detail" {...routerProps} />
              )}
            />
            <Route exact path="/players" component={PlayerList} />
            <Route exact path="/teams" component={TeamList} />
            <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
}

