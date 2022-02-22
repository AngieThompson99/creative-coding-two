let data2021 =[ // array of objects data 2021
    { label: 'Apples', value: 12},
    { label: 'Bananas', value: 15},
    { label: 'Oranges', value: 43},
    { label: 'Peaches', value: 22},
];
let data2022 =[ // 2022 data for array of object

    { label: 'Apples', value: 20},
    { label: 'Bananas', value: 15},
    { label: 'Oranges', value: 50},
    { label: 'Peaches', value: 32},
    
];
let colors

let chart01; // dning the variable chart01
let chart02; // dining the variable chart01

function setup(){

    createCanvas(1200, 1000);
    background(50);
    colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

                        //data, title, posX, posY, chartWidth, chartHeight, showValues
    chart01 = new BarChart(data2021)
    
    //chart01.rotateLabels=false;



    chart02 = new BarChart_h(data2022)
    chart02.posX=400
   

} // end of setup

function draw(){
    background(50);

    chart01.updateValues()
    chart01.render()

    chart02.updateValues()
    chart02.render()

   

} // end of draw
