import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeamDetail from "./TeamDetail.jsx";

it('should render a detail view of the selected team', async () => {
  render(
    <MemoryRouter>
      <TeamDetail abel='Team Detail' match={{ params: {id:'2'}}}/>
    </MemoryRouter>
  );

  screen.getByText('looking for toddler teams');

  const teamName = await screen.findByText('Stumptown Lumberjacks', {
    exact: false,
  });

  expect(teamName).toBeInTheDocument();
} )