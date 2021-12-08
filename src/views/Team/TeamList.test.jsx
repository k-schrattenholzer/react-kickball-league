import { render } from "@testing-library/react";
import TeamList from './TeamList'

it('should render teamList', () => {
  const { container } = render(<TeamList />);
  expect(container).toMatchSnapshot();
})