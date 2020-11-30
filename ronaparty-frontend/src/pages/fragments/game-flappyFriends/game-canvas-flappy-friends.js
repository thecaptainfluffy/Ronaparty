/**
 * Highest file in game FlappyFriends
 * 
 * Call this in *module-gameView to launch game!
 * 
 * Holds the gameloop
 */


import Canvas from './canvas'



function GameCanvasFlappyFriends() {

  
  let speed = 840
  let speed1 = 600

  function gameLoop(ctx, frameCount) {
    let random = Math.floor(Math.random() * 800) + 1;
    let random1 = Math.floor(Math.random() * 60) + 1;
    let random2 = Math.floor(Math.random() * 200) + 1;
    speed1--
    speed--
    if(speed === -40){
      speed = 840
    }

    if(speed1 === -40){
      speed1 = 600
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ff0000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.001)**2, 0, 2*Math.PI)
    ctx.fill()

    ctx.fillRect( random, 40, 40, 40)
    ctx.fillStyle = '#00ff00'
    ctx.fillRect( speed, 200, 40, 40)
    ctx.fillStyle = '#ff00ff'
    ctx.fillRect( speed, speed1, 40, 40)
    ctx.fillStyle = '#0fff'
    ctx.fillRect( speed, speed1, 40, 40)
    ctx.fillStyle = '#ff0f0f'
    ctx.fillRect( speed1, speed, 40, 40)
    
  }
  
  
  return (
    <div id="game-canvas-flappy-friends">
      <Canvas draw={gameLoop} />
    </div>
  );
}

export default GameCanvasFlappyFriends;