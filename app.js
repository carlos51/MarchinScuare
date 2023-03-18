function grind(space){
    let n = round(width/space);
    let x = 0,y = 0;
    let rows = [];
/*
    for (let row = 0; row < n; row++) {
        line(0, y, width, y);
        line(x, 0, x, height);
        x += space;
        y += space;
    }
*/
    for (let row = 0; row < n+1; row++) {
        //randomSeed(row);
        for (let column = 0; column < n+1; column++) {
            rows.push(random(1));
    
        }
        //print(rows);
        vertexGrind.push(rows);
        rows = [];
        
    }

    for (let row = 0; row < vertexGrind.length; row++) {
        for (let column = 0; column < vertexGrind[0].length; column++) {

            push();
            strokeWeight(vertexGrind[row][column] * 10);

            point(column*space, row * space);
            pop();
            
        }

    }

    for (let row = 0; row < vertexGrind.length - 1; row++) {
        let y = row * space;
        for (let column = 0; column < vertexGrind[0].length - 1; column++) {
            let x = column * space;


            let a = createVector(x + space * .5, y);
            let b = createVector(x + space, y + space * .5);
            let c = createVector(x + space * .5, y + space);
            let d = createVector(x, y + space * .5);
            
            let state = getState(
                round(vertexGrind[row][column]),
                round(vertexGrind[row][column+1]),
                round(vertexGrind[row+1][column+1]),
                round(vertexGrind[row+1][column])
                
            );
            switch (state) {
                case 1:
                  drawLine(c, d);
                  break;
                case 2:
                  drawLine(b, c);
                  break;
                case 3:
                  drawLine(b, d);
                  break;
                case 4:
                  drawLine(a, b);
                  break;
                case 5:
                  drawLine(a, d);
                  drawLine(b, c);
                  break;
                case 6:
                  drawLine(a, c);
                  break;
                case 7:
                  drawLine(a, d);
                  break;
                case 8:
                  drawLine(a, d);
                  break;
                case 9:
                  drawLine(a, c);
                  break;
                case 10:
                  drawLine(a, b);
                  drawLine(c, d);
                  break;
                case 11:
                  drawLine(a, b);
                  break;
                case 12:
                  drawLine(b, d);
                  break;
                case 13:
                  drawLine(b, c);
                  break;
                case 14:
                  drawLine(c, d);
                  break;
              }

        }
        
    }

}

function drawLine(a,b){
    line(a.x,a.y,b.x,b.y);
}
function getState(a, b, c, d) {
    return a * 8 + b * 4 + c * 2 + d * 1;
  }
var vertexGrind = [];


function setup(){
    createCanvas(600,600);
}
function draw(){
    frameRate(0);
    background("lightgray");
    grind(20);

}