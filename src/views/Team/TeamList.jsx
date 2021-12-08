import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams.js';

function TeamList() {

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <div>
      <h4>top 6 baby teams (nationally ranked)</h4>
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
