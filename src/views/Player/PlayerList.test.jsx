import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PlayerList from './PlayerList'

it('should render PlayerList', async () => {
  const { container } = render(
    <MemoryRouter>
      <PlayerList />
    </MemoryRouter>
    );
  const playerName = await screen.findByText(/top players/)
  expect(playerName).toBeInTheDocument();
})