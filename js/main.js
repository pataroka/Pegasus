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

var input = new Input();
attachListeners(input);

var player = new Player(canvas.width/2, canvas.height - 80);

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


}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);

}

update();