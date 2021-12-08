import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeamList from './TeamList'

it('should render teamList', async () => {
  const { container } = render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
    );
  const teamName = await screen.findByText(/Stumptown/)
  expect(teamName).toBeInTheDocument();
})