/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { getPlayers, deletePlayerById } from "../../services/players.js"
import './Player.css'

//comment 

export default function PlayerList() {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState([]);

  const history = useHistory();

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await getPlayers();
    setPlayers(res);
    setLoading(false);
  }

  const handleDelete = async ({ id, name }) => {
    const pleaseDelete = confirm(`Please confirm you would like to delete ${name}`);
    
    if (pleaseDelete) {
      await deletePlayerById(id);
      await loadPlayers();
  };
}

  const handleEdit = async ({ id }) => {
    history.push(`/players/edit/${id}`)
  }

  if (loading) return <h1>fetching the players</h1>;

  return (
    <div className='PlayerList'>
      <h4>top players</h4>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`players/${player.id}`} className='App-link'>
                {player.name}
              </Link>
              <button
                type='button'
                onClick={() => handleEdit({ id: player.id })}
                >edit</button>
                <button 
                type="button" 
                onClick={() => handleDelete({ id: player.id, name: player.name })}>
                  delete the bb</button>
            </li>
          )
        })
        }
      </ul>
      <Link to={'/players/new'} className='App-link Link'>don't see your toddler? add here</Link>
    </div>
  )
}
