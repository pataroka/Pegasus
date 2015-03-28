/**
 * Created by Paco on 27.3.2015 г..
 */
var Car = (function() {
    function Car(x, y) {
        this.width= 76;
        this.height = 76;
        this.velocity = 10; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 1, 0, 1, 'assets/images/spritemap.png', 1, 0, 0); //we need sprite for car here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    Car.prototype.update = function () {
        this.position.x += this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
    };

    Car.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Car;

}());