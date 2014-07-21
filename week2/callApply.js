/*
call/apply 함수는 단순히 대상 인스턴스를 실행 시점에 결합하기 때문에 이와 같은 에러가 발생하는 것입니다. 
call 은 이미 만들어져 있는 함수를 부를 때 쓰인다. 이 때 this를 쓸 수 있는데 this는 현재 오브젝트와 calling 오브젝트를 참조한다. 
설명이 어려워보이는데, 예제 코드들을 살펴본 바, 재귀처럼 함수.call(this, a, b)를 하면 콜이 쓰인 자기 자신 함수를 실행하고, 뒤에 있는 인자를 주어 실행시키는 방식인듯 하다. 
나머지 인자는 apply와 달리 각각 나열된다. 
apply 함수는 비슷한 기능을 하되 뒤에 결합하는데 쓰는 인자가 문자열 배열 형식이다. 
*/

function Product(name, price) {
  this.name = name;
  this.price = price;

  return this;
}

function Food(name, price) {
  // 이 예제는 상속관련 하는 곳에서 주로 사용하는 패턴인데요.
  // 일반적이고 쉬운 call예제는 아닙니다.
  // 수업시간에 배운 call,apply에 대한 활용(context를 바꿔서 함수를 실행한다)는 것만 잘 기억하세요.
  Product.call(this, name, price);
  this.category = 'food';
  this.type = "delicious";
}

var cheese = new Food('feta', 5);
