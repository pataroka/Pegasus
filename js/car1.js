/**
 * Created by Paco on 27.3.2015 г..
 */
var Car1 = (function() {
    function Car1(x, y) {
        this.width= 40;
        this.height = 40;
        this.velocity = 6; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 0, 3, 1, 'assets/images/cars/sprites.png', 1, 4, 1); //we need sprite for car here, @param see framework.js

        this.boundingBox = new Rectangle(x+8, y+4, this.width-16, this.height-8); //The boundaries of the object to check collision with player
    }

    Car1.prototype.update = function () {
        this.position.x += this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x+8;
        this.boundingBox.y = this.position.y+4;
        this.animation.update();
        if (this.position.x > 480){
            this.position.x = -100;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x+8;
            this.boundingBox.y = this.position.y+4;
            this.animation.update();
        }
    };

    Car1.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Car1;

}());