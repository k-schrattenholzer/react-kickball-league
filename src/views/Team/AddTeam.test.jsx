import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import AddTeam from "./AddTeam";
import TeamDetail from "./TeamDetail.jsx";

const team = {
  id: 4,
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

it.only("should add a team, and redirect to the full team list", async () => {
  const history = createMemoryHistory();
  history.push("/teams/new");

  render(
    <Router history={history}>
      <Route path="/teams/new">
        <AddTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  );

  const nameInput = screen.getByLabelText(/name/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);

  userEvent.type(nameInput, "Big Nice-Smelling Adults");
  userEvent.type(cityInput, "Nowhere");
  userEvent.type(stateInput, "US");

  await screen.findByText("Stinky Little Babies");
});
