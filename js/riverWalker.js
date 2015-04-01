/* Frogger have to ride some woods and turtles in the river */

var FrogOnObject = (function() {
	function FrogOnObject() {
		
	}
	
	FrogOnObject.prototype.update = function() {
		riverObjects.forEach(function(element){
			element.rided = false;
			if(element.boundingBox.intersects(player.boundingBox) 
			  && ((element.position.y <= player.position.y + 5) && 
			  (element.position.y >= player.position.y - 5))) {
				element.rided = mounted = true;
				if(Math.floor(element.position.y / 40) == 4 
				   || Math.floor(element.position.y / 40) == 7) {
				   	if (element.animation.cropPostion.x != 306) {
				   		player.position.x -= element.velocity;
				   	};				
				} else {
						player.position.x += element.velocity;
				}

				player.boundingBox.x = player.position.x;
			}
		});
	}
	
	return FrogOnObject;
}());