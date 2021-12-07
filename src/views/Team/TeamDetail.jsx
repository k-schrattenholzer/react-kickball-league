import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTeamById } from "../../services/teams.js"

export default function TeamDetail({ label, match }) {
  const { teamId } = match.params;
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(null);
  
  useEffect(() => {
    getTeamById(teamId)
    .then((resp) => setTeam(resp)).finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>fetching baby team</h1>;

  return (
    <div>
      TEAM DETAIL View
    </div>
  )
}
