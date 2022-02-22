//Bar chart using loops and translations!

//let data = [1200, 8600, 2200, 3100, 2200, 2550, 1000];

let data = [
    { value: 26, label: "Oranges" },
    { value: 32, label: "Apples" },
    { value: 43, label: "Bananas" },
    { value: 16, label: "Pears" }
]

//console.log(data[1]);
//console.log(data[2].label)


let scalledData = [];

let colors;
let margin = 30;
let spacing = 15;
let chartWidth = 300;
let chartHeight = 300;
let maxValue;
let posX = 100;
let posY = 450;

let numTicks = 10;
let tickLength = 5;
//Remember bimdas for expressions 

let remainingSpace = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = remainingSpace / data.length;

let tickSpace = chartHeight / numTicks;
let tickIncrement;
let showValues;


function setup() {
    createCanvas(500, 500);
    background(0);
    colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

    let listValues = data.map(function(x) { return x.value })

    maxValue = max(listValues);
    tickIncrement = int(maxValue / numTicks);


    for (let i = 0; i < data.length; i++) {
        let newValue = map(data[i].value, 0, maxValue, 0, chartHeight);
        scalledData.push(newValue);
    }
}

function draw() {
    background(60);

    push();
    translate(posX, posY);

    

    drawTicks();

    translate(margin, 0);
    drawBars();

    translate(-margin, 0);

    drawAxis()
    pop();

}
    function scaleData(_num){

    }

    function drawAxis(){
        // y axis
        strokeWeight(1);
        stroke(1);
        line(0, 0, 0, -chartHeight);

        // x Axis
        strokeWeight(1);
        stroke(1);
        line(0, 0, chartWidth, 0);
    }


    
function drawBars() {
    textSize(12);
    textAlign(LEFT, BOTTOM) ;
    for (let i = 0; i < data.length; i++) {
    fill(colors[i % colors.length]) ;
    strokeWeight(0);
    rect(i * (barWidth + spacing), 0, barWidth, scaleData(-data[i].value));

    if(showValues){
        noStroke();
        fill(255);
        textSize(12)
        textAlign(CENTER, BOTTOM)
        text(data[i].value, i * (barWidth + spacing) + barWidth /2, scaleData(-data[i].value) - 3);
    }
    
    noStroke();
    
    fill(255);
    textSize(12)
    textAlign(CENTER, BOTTOM)
    text (datal[i].value, i * (barWidth + spacing) + barWidth / 2, 20) ;
}
}

function drawTicks() {
    textSize(12);
    textAlign(RIGHT, CENTER);
    for (let i = 0; i <= numTicks; i++) {
        stroke(255, 100);
        strokeWeight(1);
        line(0, i * -tickSpace, -tickLength, i * -tickSpace);

        stroke(255, 40);
        strokeWeight(1);
        textSize(10)
        text(i * tickIncrement, chartWidth, -i * tickSpace);
     }
    }
