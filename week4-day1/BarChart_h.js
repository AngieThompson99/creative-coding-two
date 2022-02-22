class BarChart_h{
    constructor(_data){
        this.data = _data;
        this.posX = 50;
        this.posY = 450;
        this.showLabels = true;
        this.showValues = true;
        this.rotateLabels= true;
        this.margin = 10;
        this.spacing = 5;
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.numTicks = 5;
        this.tickLength = 5;
        this.remainingSpace;
        this.barWidth;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;

        this.updateValues();
    }
   

    updateValues() {
        this.remainingSpace = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartHeight / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = int(this.maxValue / this.numTicks);
    }

    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawBars();
        this.drawAxis();
        pop()
    }

    drawTicks() {

        textSize(12);
        textAlign(RIGHT, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(1);
            line(i * this.tickSpace,0 , -i * -this.tickSpace, this.tickLength);

            stroke(255, 40);
            strokeWeight(1);
            line(i * this.tickSpace, 0,  -i * -this.tickSpace, -this.chartWidth);

            noStroke();
            fill(255, 100);
            textAlign(CENTER);
            text(i * this.tickIncrement, i * this.tickSpace, 15);
        }
    }

    drawAxis() {
        translate(0, 0)
            //y Axis
        strokeWeight(1);
        stroke(255);
        line(0, this.margin, 0, -this.chartHeight+this.margin);
        //x Axis
        strokeWeight(1);
        stroke(255);
        line(0, this.margin, this.chartWidth, this.margin);
    }

    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
        return newValue;
    }

    drawBars() {
        translate(0, -this.margin) // changed 
        for (let i = 0; i < this.data.length; i++) {
            fill(colors[i % colors.length]);
            strokeWeight(0);
            rect(0, i * (-this.barWidth - this.spacing), this.scaledData(this.data[i].value), -this.barWidth + this.margin); // i changed barWidth to minus

            if (this.showValues) { // VALUES OF EACH BAR
                noStroke();
                fill(255);
                textSize(12);
                textAlign(CENTER, TOP);
                text(this.data[i].value, 0, i * (-this.barWidth - this.spacing), this.scaledData(this.data[i].value), -this.barWidth );
            }

            if (this.showLabels) { // LABELS OF EACH BAR
                if(this.rotateLabels){
                    angleMode(DEGREES)
                    push()
            
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(LEFT, TOP);
                    translate(-10, i * (-this.barWidth - this.spacing) - this.barWidth ); // LABELS
                    rotate(90)
                    text(this.data[i].label, (this.barWidth/4), 0);
                    
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].label, i * (this.barWidth + this.spacing) + this.barWidth / 2, 25);
                }
                
            }

        }
    }


}