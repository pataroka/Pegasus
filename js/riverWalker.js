/* Frogger have to ride some woods and turtles in the river */

var FrogOnObject = (function() {
	function FrogOnObject() {
	
	}
	
	FrogOnObject.prototype.update = function() {
		riverObjects.forEach(function(element){
			if(element.boundingBox.intersects(player.boundingBox) 
			  && ((element.position.y <= player.position.y + 5) && 
			  (element.position.y >= player.position.y - 5))) {
				
				if(Math.floor(element.position.y / 40) == 4 
				   || Math.floor(element.position.y / 40) == 7) {
					player.position.x -= element.velocity;
				} else {
					player.position.x += element.velocity;
				}
				if(player.position.x >= 480) {
					player.position.x -= 480;
					player.boundingBox.x = player.position.x;
				}
				
				if(player.position.x <= 0) {
					player.position.x += 440;
					player.boundingBox.x = player.position.x;
				}
			}
		});
	}
	
	return FrogOnObject;
}());