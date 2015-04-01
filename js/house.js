/* frog house */

var House = (function() {
	function House(x, y) {
		this.width = 48;
		this.height = 50;
		this.position = new Vector2(x, y);
		this.houseReached = false;

		this.animation = new Animation(this.width, this.height, 0, 0, 1, 'assets/images/frogHouse.png', 0, 0, 1);		
		this.boundingBox = new Rectangle(x, y - 20, this.width, this.height);
	}

	House.prototype.update = function() {
		this.animation.position.set(this.position.x, this.position.y);
		this.animation.update();

		if (this.houseReached) {
			
		} else {
			if (this.boundingBox.intersects(player.boundingBox) 
				&& (player.position.x >= this.position.x - 20 
				&& player.position.x <= this.position.x + 40)) {
				this.housesReached = true;
                player.houseReached += 1;
				score.scoreCounter += 200;
			};
		}
	}

	House.prototype.render = function(ctx) {
		if(this.houseReached) {
			this.animation.draw(ctx);
		}
	}

	return House;
}());