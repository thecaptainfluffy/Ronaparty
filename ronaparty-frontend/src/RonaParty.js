
import './RonaParty.css';
import './FirebaseInitialization';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './pages/fragments/header';
import Game from './pages/fragments/game';
import Scoreboard from './pages/fragments/scoreboard';
import Admin from './pages/admin';

function RonaParty() {
  return (
    <div className="wrapper">
     
      <Header />
      <main className="GameFrame">
      <Router>
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Game />
            <Scoreboard />
          </Route>
        </Switch>
        </Router>
        </main>
    </div>
  );
}

export default RonaParty;
