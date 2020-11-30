import { useState, useEffect } from 'react';
import './game.css';
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import GameCanvasFlappyFriends from '../game-flappyFriends/game-canvas-flappy-friends'
const auth = firebase.auth();
const database = firebase.database();


function Game() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subscriber = database;
    subscriber.ref('flappybird').on("child_added", snapshot => {
      console.log(snapshot);
      setCount(snapshot.val());
    })
    return () => subscriber;
}, [])

function handleButtonClick() {
  setCount(count + 1);
  database.ref('flappybird').push(count+1);
 // 
}

  return (
    <div class="theGame">
      <GameCanvasFlappyFriends />
    </div>
    
  );
}

export default Game;
