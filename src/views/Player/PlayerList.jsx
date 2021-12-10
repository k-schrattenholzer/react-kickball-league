import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { getPlayers } from "../../services/players.js"
import './Player.css'

export default function PlayerList() {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp)).finally(setLoading(false));
  }, []);

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
            </li>
          )
        })
        }
      </ul>
      <Link to={'/players/new'} className='App-link Link'>don't see your toddler? add here</Link>
    </div>
  )
}
