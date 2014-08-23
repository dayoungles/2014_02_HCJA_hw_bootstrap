
var count=0;

var moveRight = function() {

	var elBackboards = document.getElementsByClassName("list");
	var move;
	var len = elBackboards.length;
	
	for(var i = 0; i<len; i++){
		var item = elBackboards[i];
		//1,2,3번에 따라서 좌, 우로 이동방향과 속도를 결정해야한다.
		var name = item.className;
		
		console.log(name);
		if(name.indexOf("left") != -1){
			if(name.indexOf("slow") != -1) {
				move = -5;
			} else {
				move = -8;
			}
		} else {
			move = 5;
		} 
		
		for(var j = 0; j < item.children.length; j++){
			var style = window.getComputedStyle(item.children[j]);
			var leftValue = style.left;
			console.log(leftValue);
			leftValue = parseInt(leftValue) + move;
			item.children[j].style.left = leftValue+"px";
		}

	}


};
var timer = setInterval(function() {
		moveRight();
		count++;
		if(count===1000)	clearInterval(timer);
		
	},100 );
	
	
var split = function() {
	//화면 width를 구한다. 지금은 퍼센테이지로 설정되어 있어서, 언제 left값이 -45%가 되는지 확인할 수 없다.
	//li첫번째 요소가 -45%까지 가면, 떼서 옮긴다. 
	var width = screen.width;
	var liBackboards = document.getElementsByClassName("backboard");
	for(var i = 0; i < liBackboards.length; i++){
		var elBackboard = liBackboards[i];
		var style = window.getComputedStyle(elBackboard);
		var left = style.left;
/*
		if(left <){
			//여기에서 떼서 붙인다. 
		}
*/
	}
	 
}



