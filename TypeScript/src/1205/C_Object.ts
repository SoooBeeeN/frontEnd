{
//! 객체 타입

//! 1. 오브젝트 '리터럴'
//  : 실제 객체 데이터 정의
//  : 구분자로 쉼표(,) 사용 가능
//  : 객체 이름을 소문자로 시작

// 객체 타입 정의
//  : 구분자로 쉼표 뿐만 아니라 세미콜론(;)도 사용 가능
//  : 타입 이름을 대문자로 시작
const user: {
  name: string;
  height: number;
} = {
  name: 'Lee',
  height: 169
}
console.log(user.name);
console.log(user['height']);

//! 2. 구조적 타이핑
//  : 객체의 타입을 그 구조나 멤버에 의해서 결정하는 방식
//  : 객체의 형태가 같다면, 같은 타입으로 간주

// 덕 타이핑(duck typing)
//  : 객체의 실제 타입보다는 객체가 가진 속성과 메소드가 어떤 타입에 맞느냐가 중요
type Person = {
  name: string;
  age: number;
}
function greet(person: Person) {
  console.log(`Name: ${person.name} / Age: ${person.age}`);
}
// Person 타입이 명시적으로 구현되지 않은 객체 생성
const a = {name: 'a', age: 30}; // Person과 구조가 같기 때문에 Person으로 취급
const b = {name: 'b', age: 20, job: 'developer'}; // 정상작동: job속성을 무시한 채로 Person으로 취급
const c = {name: 'c'};

// 함수 호출
greet(a);
greet(b);
// greet(c); //Error ('age' 속성이 '{ name: string; }' 형식에 없지만 'Person' 형식에서 필수입니다.)

//! 3. 중첩된 객체 타입
//  : 객체 내부에 또 다른 객체를 포함하는 형태
//  : 복잡한 데이터를 조직화하고 관리하기 용이

//  예시) 사용자 프로필과 주소 정보를 포함하는 중첩된 객체 타입을 정의
type Address = {
  street: string;
  city?: string;
  zipCode: string;
}
type UserProfile = {
  username: string;
  email?: string;
  address?: Address;
}
let userA: UserProfile = {
  username: 'Kim',
  email: 'abcdef',
  address: {
    street: '123 St',
    city: 'Busan',
    zipCode: '12345'
  }
}
console.log(userA.username);

function isAddress(user: UserProfile) {
  // 중첩된 객체 속성을 옵셔널 하는 경우 해당 객체를 생략하는 경우를 대비하여 오류를 발생
  // 오류를 방지하기 위해서 조건문 사용
  if (user.address) {
    console.log(user.address.street);
  }
}
isAddress(userA);

}

/*
4. 인덱스 서명
  : 객체의 모든 속성에 대해 타입을 정의하지 않고
    키와 값의 타입만을 정의하여 객체의 구조를 유연하게 지정하는 방법
  : 객체의 속성에 동적으로 접근할 수 있는 기능
  
  - 장점
    1) 유연성 :  정해진 속성 이름 없이 다양한 속성을 객체에 추가 가능
    2) 동적 데이터 처리 :  런타임에 키와 값을 결정 가능

  - 사용법
    : 객체의 타입 정의 시 대괄호[]를 사용하여 선언
*/
type UserRecord = {
  // [propertyName: indexType]: valueType;
  // 문자열 키를 가지며, 각 키의 값도 문자열 타입으로 지정되어야 한다.
  [key: string]: string;
}
let users: UserRecord = {
  name: 'kim',
  age: '20',
  true: 'true'
}
users['firstName'] = 'KIM';
console.log(users.firstName);