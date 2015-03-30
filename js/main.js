/**
 * Created by usa on 3/24/15.
 */
function createRow (row, objCount) {
    switch (row){
        case 2: for (var i = 1; i <= objCount*4; i++) {
            objects.push(new LogMedium(-200*i, (row + 1)*40));
        } break;
        case 3: for (i = 1; i <= objCount; i++) {
            objects.push(new Turtle(600*i, (row + 1)*40));
        } break;
        case 4: for (i = 1; i <= objCount*3; i++) {
            objects.push(new LogLong(-300*i, (row + 1)*40));
        } break;
        case 5: for (i = 1; i <= objCount*5; i++) {
            objects.push(new LogShort(-120*i, (row + 1)*40));
        } break;
        case 6: for (i = 1; i <= objCount; i++) {
            objects.push(new Turtle(600*i, (row + 1)*40));
        } break;
        case 8: for (i = 1; i <= objCount*3; i++) {
            objects.push(new Truck(480+(240*i), (row + 1)*40));
        } break;
        case 9: for (i = 1; i <= objCount; i++) {
            objects.push(new Car1(-40*i, (row + 1)*40));
        } break;
        case 10: for (i = 1; i <= objCount*2; i++) {
            objects.push(new Car2(480+(160*i), (row + 1)*40));
        } break;
        case 11: for (i = 1; i <= objCount*3; i++) {
            objects.push(new Car3(-160*i, (row + 1)*40));
        } break;
        case 12: for (i = 1; i <= objCount*3; i++) {
            objects.push(new Car4(480+(160*i), (row + 1)*40));
        } break;
    }

}

function livesDrawing(currentLives) {
    for (var l = currentLives; l > 0; l--) {
        lives.push(new Lives(40 * (l + 2.5), canvas.height - 40));
    }
}

function randomCoordinates() {
    var zone = Math.floor(Math.random() * 2);
    var row = Math.floor(Math.random() * 4);
    var col = Math.floor((Math.random() * 11) + 1);

    posX = col * 40;

    if (zone) {
        posY = 120 + row * 40;
    } else {
        posY = 360 + row * 40;
    }

    return posX;
}

function renderAll (ctx){
    bonus.render(ctx);

    for (var i = 0; i < objects.length; i++) {
        objects[i].render(ctx);
    }

    lives.forEach(function(live) {
        live.render(ctx);
    });
}

function updateAll (){
    bonus.update();

    for (var i = 0; i < objects.length; i++) {
        objects[i].update();
    }

    lives.forEach(function(live) {
        live.update();
    });
}

function update(dt){
    this.tick(dt);
    this.render(ctx);
    //requestAnimationFrame(update);

}

function tick(dt){
     //player.movement.right = !!input.right;
     //player.movement.left = !!input.left;
     //player.movement.up = !!input.up;
     //player.movement.down = !!input.down;
    score.update();
    updateAll();
    timer.update();
    player.update(dt);
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    score.render(ctx);
    renderAll(ctx);
    timer.render(ctx);
    player.render(ctx);
}

var lastTime;
var pdt;
function main() {
    var now = Date.now();
    var dt = pdt = (now - lastTime) / 1000.0;

    update(dt);

    lastTime = now;
    requestAnimationFrame(main);
}

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');



//console easter egg for snooping developers
//var Util = {
//    is_webkit: function() {
//        return navigator.userAgent.indexOf("AppleWebKit") > -1;
//    },
//    message: function() {
//        if ( typeof console == "object" ) {
//            if ( Util.is_webkit() ) {
//                console.log( "%cHey! What are you looking under here for?\nDeveloped by Team \"PEGASUS\" https://github.com/pataroka/Pegasus", "color: #359AD8; font-size: 18px; font-family: 'Trebuchet MS', Helvetica, sans-serif;" );
//            } else {
//                console.log( "Hey! What are you looking under here for?\nDeveloped by Team \"PEGASUS\" https://github.com/pataroka/Pegasus" );
//            }
//        }
//    }
//}
//
//// call on page load
//Util.message();

//theme = document.createElement('audio');
//theme.setAttribute('src', 'assets/theme/Bomberman_Stage_Theme.mp3');
//theme.setAttribute('loop', 'true');
//theme.play();

var input = new Input();
attachListeners(input);

var livesCounter = 3;
var lives = [];

var posX, posY;
var bonus = new Bonus(randomCoordinates(), posY);


var timer = new Timer(canvas.width - 60, canvas.height - 15);
var score = new Score(5, canvas.height - 15);

var lvlModifier = 1;

var player = new Player(248, 560, pdt);

var objects = [];

for (var i = 0; i < 13; i++) {
    createRow(i,lvlModifier);

}




livesDrawing(livesCounter);


main();

