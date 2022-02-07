 //7th feb
 
let gridWidth = 400;
let gridHeight = 400;
let data = [120, 240, 60, 180, 90];
let margin = 20;
let spacing = 30;

let remainingSpace = (gridWidth - (margin*2) - (spacing*(data.length-1)));
let barWidth = remainingSpace / data.length; 
let sortedData;
let colors;

function setup(){ // gets called once ,, defines function by function
    createCanvas(500,500);
    background(0, 150);
    colors = [color('blue'), color('purple'), color('pink')] ;// arrsy of colors
    sortedData = sort();

} // end of setup

function draw(){ // calls every framerate
    /*createCanvas(canvasWidth, canvasHeight); //function with a parameter
    background(0, 150);//RGB
    rect(spacing, -400, barWidth, -100);
    rect(, -400, barWidth, -100);
    rect(30, -400, barWidth, -100); */

   
    
    //push ()
    translate(50,450)
    stroke(0);
    strokeWeight(3);
    //y Axis
    line(0,0,0,-400);
    // x axis
    line(0,0,400,0);


translate (margin,0); //moving to the left by the value of the margin
    for(let i=0; i<data.length ; i++){
        noStroke();
        fill(colors);
        rect(i * (barWidth + spacing), 0, barWidth, -data[i]);// giving 4 parametres
        // incrementing x is * by the bar width and the spacing 
        // x moves by the width and the spaxcing each time

    }
    //
    /*stroke(150);
    rect(30, -400, 93.3, -100);
    rect(153.3, -400, 93.3, -200); // two spacing plus one bar width
    rect(276.6, -400, 93.3, -300); // three spacing plus two bar width*/
    //pop ()
    
}
