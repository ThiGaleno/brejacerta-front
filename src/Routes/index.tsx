import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../Pages';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.Home />
        </Route>
        <Route path="/about/:id">
          <Pages.About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
