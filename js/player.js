/**
 * Created by usa on 3/25/15.
 */
var Player = (function() {
    function Player(x, y) {
        this.x = x;
        this.y = y;
        //-? or we can use vector from framework, or by blocks?
        this.movement = {left : false, right : false, up : false, down : false}
        this.velocity = 1; //1 block
        this.animation = new Animation(
            //we need sprite for player here, @param see framework.js
        );

        //The boundaries for player, check for colide with enemies
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Player.prototype.update = function () {
        if (this.movement.left) {
            this.position.x  -= this.velocity; //move 1 block to left
        } else if (this.movement.right) {
            this.position.x += this.velocity; // move 1 block to right
        } else if (this.movement.up) {
            this.position.y -= this.velocity;
        } else if (this.movement.down) {
            this.position.y += this.velocity;
        }

        this.animation.update();
    };

    Player.prototype.render = function(ctx) {
        this.animation.render(ctx);
    };

    return Player;

}());