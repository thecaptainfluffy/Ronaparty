import { useState, useEffect } from 'react';
import './game.css';
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
const auth = firebase.auth();
const database = firebase.database();


function Game() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subscriber = database;
    subscriber.ref('/log_entries').on("child_added", snapshot => {
        if(auth.currentUser.uid === snapshot.val().userId) {
            setCount(snapshot.val().data);
        }
    })
    return () => subscriber;
}, [])

  return (
    <div class="theGame">
      <h1>This is the game</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click here motherfuckah!</button>
    </div>
  );
}

export default Game;
