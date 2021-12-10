import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PlayerDetail from "./PlayerDetail.jsx";

it('should render a detail view of the selected team', async () => {
  render(
    <MemoryRouter>
      <PlayerDetail label='Team Detail' match={{ params: {id:'2'}}}/>
    </MemoryRouter>
  );

  screen.getByText(/toddler in question/);

  const playerPosition = await screen.findByText('position', {
    exact: false,
  });

  const customLabel = screen.getByText('Team Detail');

  expect(playerPosition).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
} )