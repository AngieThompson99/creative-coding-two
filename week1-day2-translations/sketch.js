///let angel; // declaring a variable, //defines variable by let
//angel = 22; // assigning a variable
//let sonia = 21; // declaring and assigning a variable

//function whatAge(){ // declaring a function
   // console.log("they're age is");
//}
//whatAge(3); // calling a function // function with parametres


let showBoxes = true; // BOOLEAN

let numBoxes =5;
let boxSpacing = 14;
let boxWidth = 10;
let boxHeight =20;

let space = 0;
let xOffset = 40;
let yOffset = 40;
let numSquares =5;
let squareHeight =20;
let squareWidth =20;

function setup(){ // gets called once ,, defines function by function
console.log("test");
createCanvas(500, 500); //function with a parameter
background(0, 0 , 200);//RGB
if(showGrid ==true){
    drawGrid(numxGrid, numyGrid);
}

}

function draw() // calls every framerate
{
   fill(255, 0, 0);
   rect(100,100,50,50);
}
