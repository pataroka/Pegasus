/**
 * Created by Paco on 27.3.2015 г..
 */
var Truck = (function() {
    function Truck(x, y) {
        this.width= 80;
        this.height = 40;
        this.velocity = 2; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 1, 4, 1, 'assets/images/spritemap.png', 1, 0, 0); //we need sprite for truck here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    Truck.prototype.update = function () {
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

    Truck.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Truck;

}());