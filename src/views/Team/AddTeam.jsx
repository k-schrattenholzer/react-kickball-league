import { useState } from 'react';

export default function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <>
      <fieldset>
        <legend>Add a Team</legend>
        <form action="">
          <label htmlFor="name">team-name: </label>
          <input
            id='name'
            name='name'
            type="text"
            onChange={(e) => setName(e.target.value)} />

          <label htmlFor="city">city: </label>
          <input
            id='city'
            name='city'
            type="text"
            onChange={(e) => setCity(e.target.value)} />

          <label htmlFor="state">state: </label>
          <input
            id='state'
            name='state'
            type="text"
            onChange={(e) => setState(e.target.value)} />

          <input type="submit" value='add team' />
        </form>
      </fieldset>
    </>
  )
}
