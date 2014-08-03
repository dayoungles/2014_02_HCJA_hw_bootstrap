/*사용법
객체를 하나 만들어서, 객체 안에  함수나 오브젝트들을 만들어서 마치 클래스처럼 쓸 수 있도록 하는 것.
전역공간의 충돌을 막음. 

장점
전역변수가 늘어나면서 발생할 수 있는 문제들을 사전에 예방할 수 있음. 
클래스처럼 private와 public을 나누어서 함수와 변수 등을 구분해서 사용 가능함. 

*/

var dayg = function(machine){
	var machine = machine;
	var object = {
		phone: "iphone5s",
		laptop: "macbookpro"
	}
	var getMachine = function(){
		return machine;
	}
	var getPhone = function(){
		return object.phone;
	}
	
	var setPhone = function(phone) {
		object.phone = phone;
	}
	var getLaptop = function() {
		return object.laptop;
	}
	var setLaptop = function(laptop) {
		object.laptop = laptop;
	}
	
	return {
		getMachine: getMachine,
		

		getPhone: getPhone,

		getLaptop: getLaptop,
		setPhone:setPhone,
		setLaptop:setLaptop

	}
}

var machine= dayg("test");

