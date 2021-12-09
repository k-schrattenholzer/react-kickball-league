import { useState } from 'react';

export default function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('Handle Submit is werkin helllll yeah brotherrr')
  }

  return (
    <>
      <fieldset>
        <legend>Add a Team</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">team-name: </label>
          <input
            id='name'
            name={name}
            type="text"
            onChange={({ target }) => setName(target.value)} />

          <label htmlFor="city">city: </label>
          <input
            id='city'
            name={city}
            type="text"
            onChange={({ target }) => setCity(target.value)} />

          <label htmlFor="state">state: </label>
          <input
            id='state'
            name={state}
            type="text"
            onChange={({ target }) => setState(target.value)} />

          <input type="submit" value='add team' />
        </form>
      </fieldset>
    </>
  )
}
