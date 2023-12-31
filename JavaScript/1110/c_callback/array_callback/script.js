console.log('---forEach()---');
// 콜백함수를 사용하는 함수 :  forEach()

/*
forEach() 메소드
  : 순회 메소드
    >> 배열의 각 요소에 대해서 제공된 callback함수를 오름차순 인덱스 순서로 한 번씩 호출
  : 배열이 가지고 있는 함수(메소드)로써 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출
  - 배열이 가지고 있는 메소드 중에서 콜백함수를 활용하는 메소드의 형태
    : function(value, index, array) { }
    : 3가지 매개 변수를 몯 사용할 필요 X
*/
const members = [273, 52, 103, 32, 57];
members.forEach(function(value, index, array) {
  console.log(`${index}번재 요소 : ${value}`);
})

console.log('---map()---');
/* 콜백함수를 활용하는 함수 : map()
  : 콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수
  : 수정 시 사용 (CRUD)
  */
//배열의 모든 값을 제곱하여 새로운 배열을 생성
let numbers = [273, 52, 103, 32, 57];
numbers = numbers.map(function(value) {
  return value * value;
});
numbers.forEach(console.log);

console.log('---filter()---');
/* 콜백함수를 활용하는 함수 :  filter()
  : 콜백함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
  : 삭제 시 사용 (CRUD)
*/
const filters = [0, 1, 2, 3, 4, 5];
const evenNumbers = filters.filter(function (value) {
  return value % 2 === 0;
});

console.log(`원래 배열 :  ${filters}`);
console.log(`짝수만 추출한 배열 :  ${evenNumbers}`);