function drawBoxes{
    fill(0, 200, 0);
    noStroke();
    for( let i=0; i<numSquares; i++){
         //1st row
  
   
    
    rect(i*space + xOffset, yOffset, squareWidth, squareHeight);// 1 x, y, width, height 
    }
}