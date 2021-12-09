import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams.js';
import './Team.css'

function TeamList() {

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp)).finally(setLoading(false));
  }, []);

  if (loading) return <h1>fetching the teams</h1>;

  return (
    <div className="TeamList">
      <h4>our fav teams</h4>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`teams/${team.id}`} className='App-link'>
                {team.name}
              </Link>
            </li>
          )
        })
        
      }
      </ul>
      <Link to={'/teams/new'} className='App-link Link'>don't see your team? add it</Link>
    </div>
  )
}

export default TeamList
