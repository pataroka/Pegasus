/**
 * Created by Paco on 27.3.2015 г..
 */
var Car3 = (function() {
    function Car3(x, y) {
        this.width= 40;
        this.height = 40;
        this.velocity = 1; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 1, 1, 1, 'assets/images/spritemap.png', 1, 1, 1); //we need sprite for car here, @param see framework.js

        this.boundingBox = new Rectangle(x-2, y-2, 36, 36); //The boundaries of the object to check collision with player
    }

    Car3.prototype.update = function () {
        this.position.x += this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x-2;
        this.boundingBox.y = this.position.y-2;
        this.animation.update();
        if (this.position.x > 480){
            this.position.x = -40;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x-2;
            this.boundingBox.y = this.position.y-2;
            this.animation.update();
        }
    };

    Car3.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Car3;

}());