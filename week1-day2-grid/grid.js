function drawGrid(numXGrid, numYGrid){
    let xSpacing = width/numXGrid; //width of screen divied of location of the x postion
    let ySpacing = height/numYGrid;//height of screen divied of location of the y postion
    noFill();
    stroke(150);
    for( let j=0; j<numYGrid; j++){
      for(let i = 0; i<numXGrid; i++){
    rect(i *  xSpacing, j * ySpacing, xSpacing, ySpacing);// giving 4 parametres
        }
    }
    return "grid drawn";
}