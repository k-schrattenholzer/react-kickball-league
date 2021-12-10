/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import EditPlayerForm from '../../components/Players/EditPlayerForm.jsx'
import { getPlayerById, updatePlayerById } from "../../services/players.js";
import { getTeams } from "../../services/teams.js";

export default function EditPlayer() {

  const { id } = useParams();
  const [team, setTeam] = useState({});
  const [teamList, setTeamList] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');

	const history = useHistory();
  useEffect(() => {
    getTeams().then((resp) => setTeamList(resp));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updatePlayerById(id, { name, position, teamId });
    confirm(`sure you want to update ${name} andID ${res[0].id}`)
    // history.push(`/players/${res[0].id}`)
  }

  return (
    <>
      <EditPlayerForm 
        name={name}
        position={position}
        teamId={teamId}
        teamList={teamList}
        handleSubmit={handleSubmit}
        setName={setName}
        setPosition={setPosition}
        setTeamId={setTeamId}
      />
    </>
  )
}
