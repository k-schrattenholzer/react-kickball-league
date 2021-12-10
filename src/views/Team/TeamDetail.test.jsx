import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TeamDetail from "./TeamDetail.jsx";

it('should render a detail view of the selected team', async () => {
  render(
    <MemoryRouter>
      <TeamDetail label='Team Detail' match={{ params: {id:'2'}}}/>
    </MemoryRouter>
  );

  screen.getByText('looking for toddler teams');

  const teamName = await screen.findByText('Identity Theft Is Not A Joke', {
    exact: false,
  });

  const customLabel = screen.getByText('Team Detail');

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
} )