import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayers } from "../../services/players.js"


export default function PlayerList() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  console.log(players)

  return (
    <div>
      <h4>our favorite babies</h4>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`players/${player.id}`} className='App-link'>
                {player.name}</Link>
            </li>
          )
        })

        }
      </ul>
    </div>
  )
}
