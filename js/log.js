/**
 * Created by Paco on 27.3.2015 г..
 */
var Log = (function() {
    function Log(x, y) {
        this.width= 120;
        this.height = 40;
        this.velocity = 2; //1 block
        this.position = new Vector2(x, y);

        this.animation = new Animation(this.width, this.height, 2, 0, 1, 'assets/images/spritemap.png', 1, 0, 0); //we need sprite for log here, @param see framework.js

        this.boundingBox = new Rectangle(x, y, this.width, this.height); //The boundaries of the object to check collision with player
    }

    Log.prototype.update = function () {
        this.position.x += this.velocity;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
        if (this.position.x > 480){
            this.position.x = -100;
            this.animation.position.set(this.position.x, this.position.y);
            this.boundingBox.x = this.position.x;
            this.boundingBox.y = this.position.y;
            this.animation.update();
        }
    };

    Log.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Log;

}());