import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';

export default function Nav() {
  return (
    <Router>
      <Route>
      <Home />

        <div>Nav Bar</div>
      </Route>
      
      <Switch>
        
      </Switch>
    </Router>
  );
}
