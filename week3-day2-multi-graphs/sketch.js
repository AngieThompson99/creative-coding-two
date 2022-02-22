let data2021 =[ // array of objects data 2021
    { name: 'Apples', total: 12},
    { name: 'Bananas', total: 15},
    { name: 'Oranges', total: 43},
    { name: 'Peaches', total: 22},
];

let data2022 =[ // 2022 data for array of object

    { name: 'Apples', total: 20},
    { name: 'Bananas', total: 15},
    { name: 'Oranges', total: 50},
    { name: 'Peaches', total: 32},
    
];
let salesPerson =[ // Salesperson Array of objects

    { name: 'Angie', total: 42},
    { name: 'Sonia', total: 36},
    { name: 'John', total: 12},
    { name: 'Juan', total: 15},
    { name: 'Tariq', total: 27},
    { name: 'Kittikat', total: 24},
    { name: 'Danil', total: 45},
    { name: 'Ros', total: 72},
    { name: 'Tomy', total: 6},

];
let chart01; // dning the variable chart01
let chart02; // dning the variable chart01
let chart03; // dning the variable chart01
function setup(){

    createCanvas(800, 500);
    background(50);

                        //data, title, posX, posY, chartWidth, chartHeight, showValues
    chart01 = new Barchart(data2022, "fruit sales 2022", 50, 200, 250, 130, true)
    chart02 = new Barchart(data2021, "fruit sales 2021", 400, 200, 250, 130, true)// 400 across from 2022
    chart03 = new Barchart(data2022, "top salesperson", 50, 450, 600, 100, false) // 250 down from 2022

} // end of setup

function draw(){
    background(50);

    chart01.update()
    chart01.render()

    chart02.update()
    chart02.render()

    chart03.update()
    chart03.render()

} // end of draw
