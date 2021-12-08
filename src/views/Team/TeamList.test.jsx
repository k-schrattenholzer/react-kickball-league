import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeamList from "./TeamList.jsx";

it.skip('should render a detail view of the selected team', async () => {
  render(
    <MemoryRouter>
      <TeamList abel='Team List' match={{ params: {id:'2'}}}/>
    </MemoryRouter>
  );

  screen.getByText('looking for toddler teams');

  const teamName = await screen.findByText('Stumptown Lumberjacks', {
    exact: false,
  });

  expect(teamName).toBeInTheDocument();
} )