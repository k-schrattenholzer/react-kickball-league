export default function EditTeamForm({
  name,
  city,
  state,
  handleSubmit,
  setName,
  setCity,
  setState,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <form>
        <legend></legend>
        <label htmlFor="name">team name </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          required
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="city">city </label>
        <input
          id="city"
          name="city"
          type="text"
          value={city}
          required
          onChange={({ target }) => setCity(target.value)}
        />

        <label htmlFor="state">state </label>
        <input
          id="state"
          name="state"
          type="text"
          value={state}
          required
          onChange={({ target }) => setState(target.value)}
        />

        <input type="submit" aria-label="Edit" value="update team" />
      </form>
    </div>
  );
}
