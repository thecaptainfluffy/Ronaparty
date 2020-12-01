
import './RonaParty.css';
import './FirebaseInitialization';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './pages/fragments/header';
import Game from './pages/fragments/game';
import Scoreboard from './pages/fragments/scoreboard';
import Admin from './pages/admin';
import Sandbox from './pages/sandbox'
import GuestRegister from './pages/guest-register/guest-register'

function RonaParty() {
  return (
    <div className="wrapper">
      
      <Router>
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/sandbox">
            <Sandbox />
          </Route>
          <Route path="/guest-register">
            <GuestRegister />
          </Route>

          <Route path="/">
          <Header />
            <main className="gameWrapper">
              <section id="gameView">
                <Game />
                <Scoreboard />
              </section>
            </main>
          </Route>
        </Switch>
        </Router>
        
    </div>
  );
}

export default RonaParty;
