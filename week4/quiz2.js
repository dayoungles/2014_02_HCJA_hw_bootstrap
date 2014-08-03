/*
다음처럼 동작가능하도록 prototype 기반의 코드를 작성하세요.

var oName = new myList();
oName.addName("henry");
oName.getAllNames();            // ["henry"];
oName.addName("john");    
oName.getAllNames();            //["henry", "john"];
oName.removeName("john");  //["henry"]
*/

var myList = function(){
	this.aName=[];// this를 이용하면 쓸 수 있었다. 
}

//myList.prototype.aName=[];//여러 객체를 만들면 다들 여기에 접속하기 떄문에 다 바뀐다. 생성자 안에 넣어야 할듯? 


myList.prototype.addName= function(newName){
	this.aName.push(newName);
}

myList.prototype.getAllNames = function(){
	return this.aName;
}
myList.prototype.removeName= function(exName){
	var index = this.aName.indexOf(exName);
	if(index === -1){
		return;
	}
	this.aName.splice(index, 1);
}

var oName = new myList();
oName.addName("henry");
oName.getAllNames();            // ["henry"];
oName.addName("john");    
oName.getAllNames();            //["henry", "john"];
oName.removeName("john");  //["henry"]