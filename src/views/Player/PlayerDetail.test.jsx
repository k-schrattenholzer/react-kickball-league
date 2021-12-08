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

  const playerName = await screen.findByText('Hans Olo', {
    exact: false,
  });

  const customLabel = screen.getByText('Team Detail');

  expect(playerName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
} )