
var obj = {
	strTexts: "은 정말 맛이 없어요 ",
	 registerEvents : function(name){
		 console.log(name + this.strTexts);
	 }
};

var list = document.getElementById("list");

// 의도는 아래 코드가 위 registerEvents안으로 옮겨가고 그 곳에서 사용할 때 THIS문제를 해결하는 거였어요.
// 지금도 동작은 되는 거 같지만, THIS가 가리키는 부분을 BIND로 수정할 수 있다는 점은 알고 있으리라 생각되요.
// 이 문제는 코드가 위로 옮겨진 후에는 bind로 수정가능하답니다.
list.addEventListener("click", function(e){
	var name = e.target.innerHTML;
	obj.registerEvents(name);
});

