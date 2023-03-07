let canvas = document.getElementById("kanvas");
let ctx = canvas.getContext("2d");

let player1 = new hraci(
    -15,60,50,100,"#fff",6,14,-0.3,0,true,false
);
let player2 = new hraci(
    40,50,50,100,"#e4a7a7",6,14,-0.3,0,true,false
);

let block1 = new tiles(200, -150, 250, 30, "red");
let block2 = new tiles(400, 150, 250, 30, "red");
let block3 = new tiles(-400, 150, 250, 30, "red");
let block4 = new tiles(200, 250, 250, 30, "red");
let block5 = new tiles(-180, -100, 100, 30, "red");
let block6 = new tiles(-40, -400, 250, 30, "red");


function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player1.move();
    player2.move();
    blocks();
    drawPlayer(player1);
    drawPlayer(player2);
    //console.log(player1.canvasPos().y);
}
setInterval(Update, 16);

function drawPlayer(hrac) {
    ctx.fillStyle = hrac.color;
    ctx.fillRect(
        hrac.canvasPos().x,
        hrac.canvasPos().y,
        hrac.width,
        hrac.height
    );
}

function drawTiles(blok) {
    ctx.fillStyle = blok.color;
    ctx.fillRect(
        blok.canvasPos().x,
        blok.canvasPos().y,
        blok.width,
        blok.height
    );
}

function blocks() {
    drawTiles(block1);
    drawTiles(block2);
    drawTiles(block3);
    
    player1.kolize(block1);
    player1.kolize(block2);
    player1.kolize(block3);
    player2.kolize(block1);
    player2.kolize(block2);
    player2.kolize(block3);

    
}

// let intervalInMilliseconds = 1; // change this to watever value you like
// let activeInterval = undefined;
// function lvl1() {
//     if (activeInterval) {
//          clearInterval(activeInterval);
//     }
//     drawTiles(block1);
//     drawTiles(block2);
//     drawTiles(block3);
//     activeInterval = setInterval(lvl1, intervalInMilliseconds);
// }
// function lvl2() {
//     if (activeInterval) {
//          clearInterval(activeInterval);
//     }
//     drawTiles(block1);
//     drawTiles(block2);
//     drawTiles(block3);
//     activeInterval = setInterval(lvl2, intervalInMilliseconds);
// }
// function lvl3() {
//     if (activeInterval) {
//          clearInterval(activeInterval);
//     }
//     drawTiles(block1);
//     drawTiles(block4);
//     drawTiles(block5);
//     drawTiles(block6);
//     activeInterval = setInterval(lvl3, intervalInMilliseconds);
// }