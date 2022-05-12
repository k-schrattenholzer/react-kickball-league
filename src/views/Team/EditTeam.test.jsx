import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import TeamDetail from './TeamDetail';
import EditTeam from './EditTeam';

const team = {
  id: 6,
  created_at: "2021-12-11T00:08:53.059937+00:00",
  name: "Stinky Little Babies",
  city: "You Smell",
  state: "So Bad",
  players: [],
};

const server = setupServer(
  rest.get(
    "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json(team));
    }
  ),
  rest.post(
    "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json([team]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it("should edit team, and redirect to the team detail page", async () => {
  const history = createMemoryHistory();
  history.push("/teams/edit/:id");

  render(
    <Router history={history}>
      <Route path="/teams/edit/:id">
        <EditTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  );

  await waitForElementToBeRemoved(()=> screen.queryByText(/fetching the rowdy toddlers.../i))
  screen.getByText('Update Team Info', {exact: false })

  const nameInput = screen.getByLabelText(/name/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const submitBtn = screen.getByLabelText(/Edit/i)

  userEvent.type(nameInput, "Stinky Little Babies");
  userEvent.type(cityInput, "Nowhere");
  userEvent.type(stateInput, "US");
  userEvent.click(submitBtn);

  await screen.findByText("Stinky Little Babies");
});