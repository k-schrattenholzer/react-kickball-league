import { useEffect, useState } from "react"
import { getTeamById } from "../../services/teams.js"

export default function TeamDetail({ label, match }) {
  const teamId = match.params.id;

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getTeamById(teamId)
    .then((resp) => {
      console.log(resp)
      setTeam(resp)}).finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return (
                  <>
                    <h1>looking for toddler teams</h1>

                  </>
                  );

  if (team.players.length === 0) 
      return (
        <div>
          <h1>{label}</h1>
          <h4>{team.name}</h4>
          <h3>from {team.city}, {team.state}</h3>
          <p>still waiting on players</p>
        </div>
      );

  return (
    <div className='TeamDetail'>
      <h1>{label}</h1>
      <h4>{team.name}</h4>
      <h3>from {team.city}, {team.state}</h3>
      {team.players.map((player) => {
        return (
          <p key={player.id}>
              {player.name}
          </p>
        )
      })
      }
    </div>
  )
}
