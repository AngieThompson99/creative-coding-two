function drawBoxes(numBoxes, boxWidth, boxHeight, boxSpacing){
    if(numBoxes>20){ //condition
        // comparator is == whereas = is setting the value
        console.log("too many boxes");
        return "too many boxes"; // given the parametres you gave
    }
    fill(0, 200, 0);
    noStroke();
    for( let i=0; i<numBoxes; i++){
    rect(i*boxSpacing, 30, boxWidth, boxHeight);// giving 4 parametres
    }
    return "boxes drawn";
}