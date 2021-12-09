export default function AddTeam() {
  return (
    <>
      <fieldset>
        <legend>Add a Team</legend>
        <form action="">
          <label htmlFor="name">team-name: </label>
          <input id='name' name='name' type="text" />

          <label htmlFor="city">city: </label>
          <input id='city' name='city' type="text" />

          <label htmlFor="state">state: </label>
          <input id='state' name='state' type="text" />

          <input type="submit" value='add team' />
        </form>
      </fieldset>
    </>
  )
}
