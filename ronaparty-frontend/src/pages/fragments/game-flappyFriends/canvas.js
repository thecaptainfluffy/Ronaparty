/**
 * Sets width and height for th canvas
 *  */ 


import useCanvas from './useCanvas'

function Canvas(props) {  
  
  const {draw} = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} width={800} height={600}/>
}

export default Canvas