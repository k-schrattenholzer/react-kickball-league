import { useEffect, useState } from "react"
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


  if (loading) return <h1>lookin for the toddler in question</h1>;

  return (
    <div>
      <h6>{label}</h6>
      <article className="PlayerDetail">
        <p>
          <b>{player.name}</b>
        </p>
        <p>
          <b>position </b>
          {player.position}
        </p>
        <p>
          <b>team </b>
          {player.teams.name}
        </p>
        <p>
          <b>team state </b>
          {player.teams.state}
          </p>
      </article>
    </div>
  )
}
