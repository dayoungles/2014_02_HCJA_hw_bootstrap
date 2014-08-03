
var func = {
	checkWindow :this,//여기서의 this는 window를 가리키고 있다. 
	getName: function(){
		return this.name;//이 함수 안에서 name은 가리키는 곳이 없음. 그러나 call 되면서 인자로 받은 example을 this로 받아 name을 찾아냄. 
	},
	setName: function(newName){
		this.name = newName;//example이 this.
	},
	getType: function(){
		return this.type;//example이 this.
	}
	
}

var example = {name: "test", type: "function"}
func.getType.call(example);
func.checkWindow;