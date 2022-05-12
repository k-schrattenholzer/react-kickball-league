import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, MemoryRouter, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import PlayerDetail from './PlayerDetail';
import EditPlayer from './EditPlayer';

const player = {
  id: 9,
  created_at: "2021-12-11T01:20:11.221034+00:00",
  name: "Danke",
  position: "Beite",
  team_id: 1,
  teams: {
    city: 'FancyTown',
    created_at: '2021-12-11T01:20:11.221034+00:00',
    id: 1,
    name:"Identity Theft Is A Joke",
    state: 'USA'
  }
};

const mockTeamList = [
  {
    "id": 2,
    "created_at": "2021-12-09T01:20:48+00:00",
    "name": "Identity Theft Is Not A Joke",
    "city": "Accidentally",
    "state": "MD"
},
{
  "id": 1,
  "created_at": "2021-12-09T01:20:26+00:00",
  "name": "Sleepy lil Babies",
  "city": "AnyTown",
  "state": "USA"
},
{
  "id": 4,
  "created_at": "2021-12-09T23:19:39.034983+00:00",
  "name": "The Mean Nightingales",
  "city": "Bluff",
  "state": "AK"
},
{
  "id": 7,
  "created_at": "2021-12-10T20:31:07.208933+00:00",
  "name": "test de;ete",
  "city": "tew",
  "state": "teart"
}
]

  const server = setupServer(
    rest.get(
      "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/teams",
      (req, res, ctx) => {
        return res(ctx.json(mockTeamList));
      }
    ),
    rest.post(
      "https://taxuyhefnqzlzgfywsdj.supabase.co/rest/v1/teams",
      (req, res, ctx) => {
        return res(ctx.json([mockTeamList]));
      }
    ),
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
  
  it.only("should edit player, and redirect to the player detail page", async () => {
    const history = createMemoryHistory();
    history.push("/players/edit/:id");
  
    render(
      <MemoryRouter initialEntries={['/players/edit/9']}>
       <Switch>
          <Route exact path="/players/edit/:id">
            <EditPlayer />
          </Route>
          <Route exact path="/players/:id" component={PlayerDetail} />
       </Switch>
      </MemoryRouter>
    );

    
    await waitForElementToBeRemoved(()=> screen.queryByText(/fetching the toddler in question.../i))
  
    await screen.findByText('Danke')
    
    
    const nameInput = screen.getByLabelText(/name/i);
    const positionInput = screen.getByLabelText(/position/i);
    const teamIdInput = screen.getByLabelText(/team/i);
    // const teamIdOption = screen.getByRole('option', {name: 'The Mean Nightingales' })
    const submitBtn = screen.getByText(/add toddler player/i)
    
    userEvent.type(nameInput, "Shein");
    userEvent.type(positionInput, "CEO");
    userEvent.selectOptions(teamIdInput, screen.getByText('The Mean Nightingales'));
    userEvent.click(submitBtn);
    
    await screen.findByText("team state");
  });