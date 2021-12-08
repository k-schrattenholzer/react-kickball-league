import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTeamById } from "../../services/teams.js"

export default function TeamDetail({ label, match }) {
  const teamId = match.params.id;

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getTeamById(teamId)
    .then((resp) => {
      setTeam(resp)}).finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>looking for toddler teams</h1>;

  return (
    <div>
      <h6>{label}</h6>
      <h4>{team.name}</h4>
      {team.players.map((player) => {
        return (
          <li key={player.id}>
            <Link to={`players/${player.id}`} className='App-link'>
              {player.name}
            </Link>
          </li>
        )
      })
      }
    </div>
  )
}
