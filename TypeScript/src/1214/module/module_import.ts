// B_module.ts에서 정의된 add, substract 함수를 사용
//  : 내보내기 파일의 기능명과 동일하게 사용
import { add, substract } from '../B_module';

// import시 중괄호를 제외하는 경우는 default 기능임을 자동으로 인식
//  : default 기능은 이름을 사용하는 파일에서 임의지정이 가능
import Calc from '../B_module';

console.log(add(5, 3));
console.log(substract(5, 3));

const calculate = new Calc();
console.log(calculate.add(5, 6));