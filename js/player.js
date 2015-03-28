/**
 * Created by usa on 3/25/15.
 */
var Player = (function() {
    function Player(x, y) {
        this.width = 76;
        this.height = 76;
        this.position = new Vector2(x, y);
        this.movement = {left : false, right : false, up : false, down : false}
        this.velocity = 76;
        this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/spritemap.png', 1, 0, 0);

        //The boundaries for player, check for colide with enemies
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Player.prototype.update = function () {
        if (this.movement.left) {
            this.position.x  -= this.velocity; //move 1 block to left
        } else if (this.movement.right) {
            this.position.x += this.velocity; // move 1 block to right
        }

        if (this.movement.up) {
            this.position.y -= this.velocity;
        } else if (this.movement.down) {
            this.position.y += this.velocity;
        }

        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
    };

    Player.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Player;

}());