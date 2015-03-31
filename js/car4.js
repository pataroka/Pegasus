/**
 * Created by Paco on 27.3.2015 г..
 */
var Car4 = (function() {
    function Car4(x, y) {
        this.width= 40;
        this.height = 40;
        this.velocity = 2; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 1, 0, 1, 'assets/images/spritemap.png', 1, 1, 1); //we need sprite for car here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    Car4.prototype.update = function () {
        this.position.x -= this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x - 5;
        this.boundingBox.y = this.position.y - 5;
        this.animation.update();
        if (this.position.x < -40){
            this.position.x = 490;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x - 5;
            this.boundingBox.y = this.position.y - 5;
            this.animation.update();
        }
    };

    Car4.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Car4;

}());