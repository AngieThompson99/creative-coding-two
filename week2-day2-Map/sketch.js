 //7th feb
 //.8th of feb neek week we want the actual value on top of the bar chart, just abouve height
 //
let gridWidth = 400;
let gridHeight = 400;
let data = [100, 225, 325, 150, 350];
let margin = 20;
let spacing = 30;
let tickLength = 5;
let numTicks = 10;
let distTicks = gridHeight / numTicks;
let tickIncrement = gridHeight / numTicks;

let remainingSpace = gridWidth - (margin*2) - (spacing*(data.length-1));
let barWidth = remainingSpace / data.length; 
let barHeight = data.length;
let sortedData;
let sortData = false;
let scaledData = []; // new array where the data is scaled with map function
let colors = [];
let chartHeight = -400;
let chartWidth = 400;

function setup(){ // gets called once ,, defines function by function
    createCanvas(500,500);
    background(0, 80);
    colors = [color('blue'), color('purple'), color('pink')] // array of colors
    if(sortData==true){
        sort(data);
    }
    maxValue = max(data) ;
for (let i=-0; i < data. length; i++) {
    let newValue = map(data[i], 0, maxValue, 0, -chartHeight)
   
    scaledData.push(newValue)
    }
    console.log (data)
    console.log (scaledData)


} // end of setup

function draw(){ // calls every framerate
    /*createCanvas(canvasWidth, canvasHeight); //function with a parameter
    background(0, 150);//RGB
    rect(spacing, -400, barWidth, -100);
    rect(, -400, barWidth, -100);
    rect(30, -400, barWidth, -100); */

   
    
    push ()
    translate(50,450)
    stroke(0);
    strokeWeight(3);
    //y Axis
    line(0,0, 0, chartHeight);
    // x axis
    line(0,0, chartWidth, 0);

    for(let i=0; i<= numTicks; i++){
        stroke(0);
        strokeWeight(2);
        line(0,i * -distTicks,-tickLength, -distTicks * i); 
        
        //tickIncrement Text
        noStroke();
        strokeWeight(2);
        textSize(12);
        textAlign(RIGHT, CENTER)
        text(i*tickIncrement, -tickLength, -distTicks * i)
    }

translate (margin,0); //moving to the left by the value of the margin
    for(let i=0; i<data.length ; i++){
        noStroke();
        fill(colors[i % 3]);
        rect (barWidth * i + (spacing * i), 0, barWidth, -data[i]);// giving 4 parametres
     
        textSize(32);
        text(scaledData[i],(margin * 3) + barWidth * i + (spacing * i), barHeight + margin, 0);
        
    }
    pop ()
        // incrementing x is * by the bar width and the spacing 
        // x moves by the width and the spaxcing each time
        /*for (int i =0; i < data.length; i++)
        {
            for (int j = 0; j < (data.length - 1); j++) // length minus one because we're not including the last number everytime
            {
                if (a[j] > a[j + 1])
                {
                    int temp = a[j]; // temporary variable
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        for int i = 0; i<length; i ++)
        console.log("a[%d] = %d\n", i, a[i]); //modulous
            /*for i from 1 to N
            for j from O to N - 1     // get rid of the last one in the array as its the highest
 // bubble sort algorithm
            if a [j] > a[j + 1]
            swap (a[i] , a[j + 1])
    }*/
    //
    /*stroke(150);
    rect(30, -400, 93.3, -100);
    rect(153.3, -400, 93.3, -200); // two spacing plus one bar width
    rect(276.6, -400, 93.3, -300); // three spacing plus two bar width*/
   
    
}
