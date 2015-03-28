/* Player lives counter + image drawing */

var Lives = (function() {
	function Lives(x, y) {
		this.width = 32;
		this.height = 32;
		this.position = new Vector2(x, y);
		

		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/frogHeart.png', 0, 0, 1);
		
	};

	Lives.prototype.update = function() {
		this.animation.position.set(this.position.x, this.position.y);
		this.animation.update();
	};

	Lives.prototype.render = function(ctx) {
		this.animation.draw(ctx);
	};

	return Lives;
}());