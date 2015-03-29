/**
 * Created by usa on 3/29/15.
 */

var startButton = new Image();
startButton.src = 'assets/images/Start_Game_Sprite.png';
ctx.drawImage(startButton, -150, 50, 800, 600);
document.getElementById('start-button').onclick = function () {
    startGame();
};

function startGame() {
    update();
}