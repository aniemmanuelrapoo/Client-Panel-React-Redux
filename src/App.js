import './App.css';
import Appnavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Appnavbar />
        <div className="container">
        <Switch>
            <Route exact path="/"><Dashboard /></Route>
            {/* <Route exact path="/about"><About /></Route>
            <Route exact path="/test"><Test /></Route>
            <Route><NotFound /></Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
