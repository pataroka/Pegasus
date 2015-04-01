/**
 * Created by Paco on 27.3.2015 г..
 */
var Truck = (function() {
    function Truck(x, y) {
        this.width= 80;
        this.height = 40;
        this.velocity = 1.5; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 0, 3, 1, 'assets/images/cars/sprites.png', 1, 3, 1); //we need sprite for truck here, @param see framework.js

        this.boundingBox = new Rectangle(x+2, y+2, this.width-4, this.height-4); //The boundaries of the object to check collision with player
    }

    Truck.prototype.update = function () {
        this.position.x -= this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x+2;
        this.boundingBox.y = this.position.y+2;
        this.animation.update();
        if (this.position.x < -60){
            this.position.x = 660;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x+2;
            this.boundingBox.y = this.position.y+2;
            this.animation.update();
        }
    };

    Truck.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Truck;

}());