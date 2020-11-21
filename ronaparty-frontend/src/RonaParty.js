
import './RonaParty.css';
import Header from './pages/fragments/header';
import Game from './pages/fragments/game';
import Scoreboard from './pages/fragments/scoreboard';

function RonaParty() {
  return (
    <div className="wrapper">
      <Header />


      <main className="GameFrame">

        <Game />
        <Scoreboard />
      </main>


    </div>
  );
}

export default RonaParty;
