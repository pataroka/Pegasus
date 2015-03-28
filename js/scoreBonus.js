/* Score bonus item */

var Bonus = (function() {
	function Bonus(x, y) {
		this.width = 32;
		this.height = 32;
		this.position = new Vector2(x, y);
		
		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/bonus.png', 0, 0, 1);		
		this.boundingBox = new Rectangle(x, y, this.width, this.height);
	}

	Bonus.prototype.update = function() {
		this.animation.position.set(this.position.x, this.position.y);
		this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
		this.animation.update();
	};

	Bonus.prototype.render = function(ctx) {
		this.animation.draw(ctx);
	};

	return Bonus;
}());