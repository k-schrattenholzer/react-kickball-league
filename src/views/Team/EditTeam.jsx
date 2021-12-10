/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import EditTeamForm from '../../components/Teams/EditTeamForm.jsx'
import { getTeamById, updateTeamById } from "../../services/teams.js";

export default function EditTeam() {

  const { id } = useParams();
  const [team, setTeam] = useState({});
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true);

	const history = useHistory();

  useEffect(() => {
    getTeamById(id)
        .then((res) => {
          setTeam(res);
          setName(res.name);
          setCity(res.city);
          setState(res.state);
        })
        .finally(() => setLoading(false));
  }, [id])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateTeamById(id, { name, city, state });
    history.push(`/teams/${res[0].id}`);
  }

  if (loading) return <>fetching the rowdy toddlers...</>;

  return (
    <>
      <EditTeamForm
        name={name}
				city={city}
				state={state}
				handleSubmit={handleSubmit}
				setName={setName}
				setCity={setCity}
				setState={setState}
      />
    </>
  )
}
