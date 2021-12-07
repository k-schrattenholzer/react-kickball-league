import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayerById } from "../../services/players.js"

export default function PlayerDetail({ label, match }) {
  const playerId = match.params.id;

  console.log(match.params);

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  
  

  useEffect(() => {
    getPlayerById(playerId)
    .then((resp) => {
      setPlayer(resp)}).finally(() => setLoading(false));
  }, [playerId]);

  console.log(player);

  if (loading) return <h1>fetching baby team</h1>;

  return (
    <div>
      {/* <h6>{label}</h6> */}
      <h4>{player.name}</h4>
      
    </div>
  )
}
