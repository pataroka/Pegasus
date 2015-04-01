/**
 * Created by usa on 3/25/15.
 */
var Player = (function() {
    function Player(x, y, pdt) {
        this.width = 40;
        this.height = 40;
        this.dead = false;
        this.position = new Vector2(x, y);
        //this.movement = {left : false, right : false, up : false, down : false};
        this.velocity = 38;
        this.animation = new Animation(this.width, this.height, 0, 0, 3, 'assets/images/player/player_sprite.png', 3, 3, 1);

        //The boundaries for player, check for colide with enemies
        this.boundingBox = new Rectangle(x-2, y-2, this.width-5, this.height-5);
    }

    Player.prototype.update = function () {
        //if (this.movement.left) {
        //    this.position.x  -= this.velocity * dt; //move 1 block to left
        //    console.log('left');
        //} else if (this.movement.right) {
        //    this.position.x += this.velocity * dt; // move 1 block to right
        //    console.log('right');
        //} else if (this.movement.up) {
        //    this.position.y -= this.velocity * dt;
        //    console.log('up');
        //} else if (this.movement.down) {
        //    this.position.y += this.velocity * dt;
        //    console.log('down');
        //}
        if (this.dead){
            this.animation = new Animation(this.width, this.height, 0, 10, 1, 'assets/images/spritemap.png', 1, 11, 1);
            this.velocity = 0;
        }
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x-2;
        this.boundingBox.y = this.position.y-2;
        this.animation.update();
    };

    Player.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Player;
}());