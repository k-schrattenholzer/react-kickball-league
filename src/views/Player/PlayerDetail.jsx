import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayerById } from "../../services/players.js"

export default function PlayerDetail({ label, match }) {
  const playerId = match.params.id;

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  
  

  useEffect(() => {
    getPlayerById(playerId)
    .then((resp) => {
      setPlayer(resp)}).finally(() => setLoading(false));
  }, [playerId]);

  console.log(player);

  if (loading) return <h1>lookin for the toddler in question</h1>;

  return (
    <div>
      <h6>{label}</h6>
      <ul>
        <li>name: {player.name}</li>
        <li>position: {player.position}</li>
        <li>team: {player.teams.name}</li>
        <li>team state: {player.teams.state}</li>
      </ul>
    </div>
  )
}
