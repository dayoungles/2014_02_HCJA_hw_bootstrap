var elArrows= document.getElementsByClassName("arrow");
var len = elArrows.length;

var page= document.getElementsByClassName("whole_page");
var ulImgList = document.getElementsByClassName("img_list");
var current_page = document.getElementsByClassName("current_page");



for(var i =0; i< elArrows.length; i++){
	var newI= Math.floor(i/2);
	page[newI].innerHTML = ulImgList[newI].children.length;
	(function(i){
	var newI= Math.floor(i/2);
		
		elArrows[i].addEventListener("click", function(e) {
			//클린된 타겟의 클래스 네임을 확인해서 right면 ul의레프트 값을 옮겨준다. 
			var PAGE_DIR, LI_DIR;
			console.log("호"+ i);
			var className= e.target.parentNode.className;//className: "arrow right/left"
			console.log(className);
			var style = window.getComputedStyle(ulImgList[newI]);
	
			style = style.left;
			console.log(style);
	
			if(className.indexOf("right") != -1){
				LI_DIR = -700;
				PAGE_DIR = 1;
	
			} else {
				LI_DIR = 700;
				PAGE_DIR = -1;
			}
			style = parseInt(style)+ LI_DIR + "px";
			var page = current_page[newI].innerHTML;
			console.log(page);
			page = parseInt(page) + PAGE_DIR;
			current_page[newI].innerHTML = page;
			ulImgList[newI].style.left = style;
		});
	})(i);
}

