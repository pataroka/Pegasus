/* In-game Timer*/

var Timer = (function() {
	function Timer(x, y){
		this.position = new Vector2(x, y);
		this.startingTime = new Date();
		this.startingTimer = (this.startingTime.getHours() * 360
			+ this.startingTime.getMinutes() * 60
			+ this.startingTime.getSeconds());		
	}

	Timer.prototype.update = function() {
		this.currentTime = new Date();
		this.currentTimer = (this.currentTime.getHours() * 360
			+ this.currentTime.getMinutes() * 60
			+ this.currentTime.getSeconds());

		this.timerMinutes = Math.floor((this.currentTimer - this.startingTimer) / 60);
		this.timerSeconds = (this.currentTimer - this.startingTimer) % 60;
		if (this.timerSeconds < 10) {
			this.timerText = this.timerMinutes.toFixed(0) + ":0" + this.timerSeconds.toFixed(0);
			
		} else {
			this.timerText = this.timerMinutes.toFixed(0) + ":" + this.timerSeconds.toFixed(0);
		}
	}

	Timer.prototype.render = function(ctx) {
		ctx.fillStyle = "green";
		ctx.font = "26px sen-serif";
		ctx.fillText(this.timerText, this.position.x, this.position.y);
	};

	return Timer;
}());