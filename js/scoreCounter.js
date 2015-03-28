/* In-game Score Counter*/

var Score = (function() {
	function Score(x, y) {
		this.position = new Vector2(x, y);
		this.scoreCounter = 777;

	}

	Score.prototype.update = function() {
		
	}

	Score.prototype.render = function(ctx) {
		ctx.fillStyle = "green";
		ctx.font = "26px sen-serif";
		ctx.fillText("Score: " + this.scoreCounter, this.position.x, this.position.y);
	}

	return Score;
}());