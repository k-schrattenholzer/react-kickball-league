import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import AddPlayer from "./AddPlayer";
import PlayerDetail from "./PlayerDetail.jsx";

const player = {
  id: 9,
  created_at: "2021-12-11T01:20:11.221034+00:00",
  name: "FunnyMan",
  position: "CEO",
  team_id: 1
};

const server = setupServer(
  rest.get(
    "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/players",
    (req, res, ctx) => {
      return res(ctx.json(player));
    }
  ),
  rest.post(
    "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/players",
    (req, res, ctx) => {
      return res(ctx.json([player]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it.skip("should add a player, and redirect to the full player list", async () => {
  const history = createMemoryHistory();
  history.push("/players/new");

  render(
    <Router history={history}>
      <Route path="/players/new">
        <AddPlayer />
      </Route>
      <Route path="/players/:id" component={PlayerDetail} />
    </Router>
  );

  const nameInput = screen.getByLabelText(/name/i);
  const positionInput = screen.getByLabelText(/position/i);
  const teamInput = screen.getByLabelText(/team/i);

  userEvent.type(nameInput, "FunnyMan");
  userEvent.type(positionInput, "Nowhere");
  userEvent.type(teamInput, "US");

  await screen.findByText("FunnyMan");
});