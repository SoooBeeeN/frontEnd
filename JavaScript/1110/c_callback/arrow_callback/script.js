// 자바스크립트 콜백 함수 - 화살표 함수

/*
(매개변수) => return... 
(매개변수) => {
  ...
}

- 기본함수와 화살표함수의 차이
  : this 키워드가 지칭하는 대상이 다르다
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 기본적인 콜백함수에서의 화살표함수의 형태
// array = array.map((value) => value * value);
// console.log(array);

// 배열의 메소드와 화살표 함수
array.filter((value) => value % 2 === 0)
      .map((value) => value * value)
      .forEach((value) => {console.log(value)});
// >> 어떤 메소드가 리턴하는 값을 기반으로 함수를 줄줄이 사용 >> 메소드 체이닝

// 자바스크립트 콜백 함수 - 타이머 함수
// : 특정시간 | 특정 시간 이후에 콜백 함수를 호출
// : 타이머 함수의 시간 단위 >> 밀리초 (1000ms = 1s)
/*
  1. setTimeout(함수, 시간)
  : 특정 시간 후에 함수를 한 번 호출
*/
  setTimeout(() => {
    console.log('3초후에 실행됩니다.')
  }, 3000);
/*
  2. setInterval(함수, 시간)
    : 특정 시간마다 함수를 호출
*/
  let count = 0;
  setInterval(() => {
    console.log(`2초마다 실행됩니다. (${count}번째)`);
    count++;
  }, 2000);
/*
  타이머를 종료하고 싶을 때
  clearTimeout()함수, clearInterval()함수 사용
  1. clearTimeout(타이머ID)
    : setTimeout() 함수로 설정된 타이머 제거
  2. clearInterval(타이머ID)
    : setInterval() 함수로 설정된 타이머 제거
  >> 타이머ID : setTimeout()함수와 setInterval()함수를 호출 시 리턴값으로 나오는 숫자
*/
setTimeout(() => {
  console.log('타이머를 종료합니다.');
}, 5000);