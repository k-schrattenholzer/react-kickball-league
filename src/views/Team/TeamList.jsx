/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteTeamById, getTeams } from "../../services/teams.js";
import "./Team.css";

//commment to test deploy

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const loadTeams = async () => {
    const res = await getTeams();
    setTeams(res);
    setLoading(false);
  }
  
  const handleDelete = async ({ id, name}) => {
    const pleaseDelete = confirm(`Please confirm you would like to delete ${name}`);
    
    if (pleaseDelete) {
      await deleteTeamById(id);
      await loadTeams();
  };
}

  const handleEdit = async ({ id }) => {
    history.push(`/teams/edit/${id}`)
  }
  
  useEffect(() => {
    loadTeams();
  }, []);

  if (loading) return <h1>fetching the teams</h1>;

  return (
    <div className="TeamList">
      <h4>our fav teams</h4>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
              <button
                type='button'
                onClick={() => handleEdit({ id: team.id })}
                >edit</button>
              <button 
                type="button" 
                onClick={() => handleDelete({ id: team.id, name: team.name })}>
                  delete team</button>
            </li>
          );
        })}
      </ul>
      <Link to={"/teams/new"} className="App-link Link">
        don't see your team? add it
      </Link>
    </div>
  );
}

export default TeamList;
