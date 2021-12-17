import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
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
  team_id: 1,
  teams: {
    city: 'Nowhere',
    created_at: '2021-12-11T01:20:11.221034+00:00',
    id: 1,
    name:"Identity Theft is Not A Joke",
    state: 'JK'
  }
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

it.only("should add a player, and redirect to the player detail", async () => {
  const history = createMemoryHistory();
  history.push("/players/new");

  render(
    <Router history={history}>
      <Route path="/players/new">
        <AddPlayer />
      </Route>
      <Route exact path="/players/:id" component={PlayerDetail} />
    </Router>
  );
  
  screen.getByText('Add a Player', {exact: false })
  
  const nameInput = screen.getByLabelText(/name/i);
  const positionInput = screen.getByLabelText(/position/i);
  const teamInput = screen.getByLabelText(/team/i);
  const submitBtn = screen.getByLabelText(/AddPlayerBtn/i)
  
  userEvent.type(nameInput, "FunnyMan");
  userEvent.type(positionInput, "CEO");
  userEvent.type(teamInput, "1");
  userEvent.click(submitBtn);
  
  await waitForElementToBeRemoved(()=> screen.queryByText(/lookin for the toddler in question/i))

  await screen.findByText("FunnyMan", {exact: false});
});
