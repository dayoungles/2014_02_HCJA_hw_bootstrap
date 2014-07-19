
var obj = {
	strTexts: "은 정말 맛이 없어요 ",
	 registerEvents : function(name){
		 console.log(name + this.strTexts);
	 }
};

var list = document.getElementById("list");

list.addEventListener("click", function(e){
	var name = e.target.innerHTML;
	obj.registerEvents(name);
});


