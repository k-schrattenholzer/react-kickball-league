export default function EditPlayerForm({
  name,
  position,
  teamId,
  teamList,
  handleSubmit,
  setName,
  setPosition,
  setTeamId
}) {
  return (
    <div>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <legend>edit todder deets</legend>

        <label htmlFor="name">name </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          required
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="position">position </label>
        <input
          id="position"
          name="position"
          type="text"
          value={position}
          required
          onChange={({ target }) => setPosition(target.value)}
        />

        <label htmlFor="teamId">team </label>
        <select onChange={({ target }) => setTeamId(target.value)}>
          {teamList.map((team) => (
            <option value={team.id} key={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <input type="submit" value="add toddler player" />
      </form>
    </div>
  );
}
