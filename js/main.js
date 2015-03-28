/**
 * Created by usa on 3/24/15.
 */
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

theme = document.createElement('audio');
theme.setAttribute('src', 'assets/theme/Bomberman_Stage_Theme.mp3');
theme.setAttribute('loop', 'true');
theme.play();

var livesCounter = 3;
var lives = [];

var bonus = new Bonus(canvas.width / 2, canvas.height / 2);

var timer = new Timer(canvas.width - 60, canvas.height - 15);
var score = new Score(5, canvas.height - 15);

var input = new Input();
attachListeners(input);

var player = new Player(240, 560);

var objects = [];


function createRow (rownumber, number) {
    switch (rownumber){
        case 2: for (var i = 1; i <= number; i++) {
            objects.push(new Log(-150*i, rownumber*40));
        } break;
        case 3: for (var i = 1; i <= number; i++) {
            objects.push(new Turtle(600*i, rownumber*40));
        } break;
        case 4: for (var i = 1; i <= number; i++) {
            objects.push(new Log(-150*i, rownumber*40));
        } break;
        case 5: for (var i = 1; i <= number; i++) {
            objects.push(new Log(-150*i, rownumber*40));
        } break;
        case 6: for (var i = 1; i <= number; i++) {
            objects.push(new Turtle(600*i, rownumber*40));
        } break;
        case 9: for (var i = 1; i <= number; i++) {
            objects.push(new Truck(600*i, rownumber*40));
        } break;
        case 10: for (var i = 1; i <= number; i++) {
            objects.push(new Car(-150*i, rownumber*40));
        } break;
        case 11: for (var i = 1; i <= number; i++) {
            objects.push(new Car(-150*i, rownumber*40));
        } break;
        case 12: for (var i = 1; i <= number; i++) {
            objects.push(new Car(-150*i, rownumber*40));
        } break;
        case 13: for (var i = 1; i <= number; i++) {
            objects.push(new Car(-150*i, rownumber*40));
        } break;
    }

}

function livesDrawing(currentLives) {
    for (var l = currentLives; l > 0; l--) {
        lives.push(new Lives(40 * (l + 2.5), canvas.height - 40));
    };   
}


function renderAll (ctx){
    for (var i = 0; i < objects.length; i++) {
        objects[i].render(ctx);
    }

    lives.forEach(function(live) {
        live.render(ctx);
    });

    bonus.render(ctx);
}

function updateAll (){
    for (var i = 0; i < objects.length; i++) {
        objects[i].update();
    }

    lives.forEach(function(live) {
        live.update();
    });

    bonus.update();
}


function update(){
    this.tick();
    this.render(ctx);
    requestAnimationFrame(update);
}

function tick(){
    player.movement.right = !!input.right;
    player.movement.left = !!input.left;
    player.movement.up = !!input.up;
    player.movement.down = !!input.down;
    player.update();
    updateAll();
    timer.update();
    score.update();
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
    renderAll(ctx);
    timer.render(ctx);
    score.render(ctx);
}

for (var i = 0; i < 16; i++) {
    createRow(i,4);

}

livesDrawing(livesCounter);

update();