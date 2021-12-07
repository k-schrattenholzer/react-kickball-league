import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTeamById } from "../../services/teams.js"

export default function TeamDetail({ label, match }) {
  const teamId = match.params.id;

  console.log(match.params);

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  
  

  useEffect(() => {
    getTeamById(teamId)
    .then((resp) => {
      setTeam(resp)}).finally(() => setLoading(false));
  }, [teamId]);

  console.log(team);

  if (loading) return <h1>fetching baby team</h1>;

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
