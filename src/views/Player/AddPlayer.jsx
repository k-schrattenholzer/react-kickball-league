import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { createPlayer} from "../../services/players.js"
import { getTeams } from '../../services/teams.js';

export default function AddPlayer() {
  
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState(null);
  const [teams, setTeams] = useState([]);

  const history = useHistory();
  
  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();   
    const res = await createPlayer({ name, position, teamId });
    history.push(`/players/${res[0].id}`);
  }
  
  return (
    <>
      <fieldset>
        <legend>Add a Player</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name: </label>
          <input
            id='name'
            name={name}
            type="text"
            onChange={({ target }) => setName(target.value)} />

          <label htmlFor="position">position: </label>
          <input
            id='position'
            name={position}
            type="text"
            onChange={({ target }) => setPosition(target.value)} />

          <label htmlFor="team">team: </label>
          <select
            onChange={({ target }) => setTeamId(target.value)}>
              {teams.map((team) => 
              <option 
                value={team.id}
                key={team.id}
                >
                  {team.name}
                </option>)}
          </select>
          
          {/* <input
            id='team'
            name={teamId}
            type="text"
            onChange={({ target }) => setTeamId(target.value)} /> */}

          <input type="submit" value='add toddler player' />
        </form>
      </fieldset>
    </>);
}
