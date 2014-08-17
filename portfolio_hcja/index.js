
var count=0;

var moveRight = function() {
	var chain = document.getElementsByClassName("chain");
	var len = chain.length;
	var move, style;
	
	for(var i = 0; i< len; i++){
		var item = chain[i];
		style = window.getComputedStyle(item);
		if(i===1){
			move = 10;			
		} else {
			move = -10;
		}
		var leftValue = parseInt(style.left);
		item.style.left = (leftValue+ move) +'px';
		
		var afterMove = window.getComputedStyle(item);
		var afterMoveLeft = afterMove.left;
		console.log(afterMoveLeft);
		if(afterMoveLeft === "0%");
	}
	

};
var timer = setInterval(function() {
		moveRight();
		count++;
		if(count===100)	clearInterval(timer);
	},100 );
	
	
	




