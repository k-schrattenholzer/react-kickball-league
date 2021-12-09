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
      <Link to={'/teams/new'}>add your team</Link>
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
    </div>
  )
}

export default TeamList
