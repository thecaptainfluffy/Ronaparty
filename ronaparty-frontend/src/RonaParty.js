
import './RonaParty.css';
import Header from './pages/fragments/header';
import Game from './pages/fragments/game';
import Scoreboard from './pages/fragments/scoreboard';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBl36rakV03k8D402CviQjmKz5WStarzwI",
  authDomain: "southern-bonsai-296312.firebaseapp.com",
  databaseURL: "https://southern-bonsai-296312.firebaseio.com",
  projectId: "southern-bonsai-296312",
  storageBucket: "southern-bonsai-296312.appspot.com",
  messagingSenderId: "913653511898",
  appId: "1:913653511898:web:64abdca949ad01481357e3",
  measurementId: "G-H9W1JZ6RSP"
};

firebase.initializeApp(firebaseConfig);

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
