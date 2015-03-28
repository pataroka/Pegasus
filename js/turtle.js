/**
 * Created by Paco on 27.3.2015 г..
 */
var Turtle = (function() {
    function Turtle(x, y) {
        this.width= 40;
        this.height = 40;
        this.velocity = 3; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 4, 0, 1, 'assets/images/spritemap.png', 1, 0, 0); //we need sprite for turtle here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    Turtle.prototype.update = function () {
        this.position.x -= this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
        if (this.position.x < 0){
            this.position.x = 600;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x;
            this.boundingBox.y = this.position.y;
            this.animation.update();
        }
    };

    Turtle.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Turtle;

}());