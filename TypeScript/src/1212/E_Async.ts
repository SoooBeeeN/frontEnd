{
//! Async와 Await
//  : 프로미스를 기반으로 비동기 작업을 보다 간편하게 작성하는 방법
//  async함수 내에서 await 키웓를 사용하여 비동기 작업의 결과를 기다림

//  사용방법
//  async 함수 내부에서만 await를 사용 할 수 있다.
//  : await는 프로미스 결과를 기다리는데 사용
//  : 동기코드와 유사한 형태로 비동기 코드를 작성

//  함수가 비동기적으로 동작함을 나타냄
async function fetchUserData() {
  // 정상적으로 실행되는 코드 블럭
  // try-catch 블록을 사용하여 await 표현식에서 발생할 수 있는 예외를 캡쳐
  try {
    // 비동기적인 작업의 결과를 기다림
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const data = await response.json();
    console.log('사용자 데이터: ', data);
  } catch (error) {
    console.error('데이터 요청 중 요류: ', error);
  }
}
fetchUserData();

// 비동기 코드의 타입 안전성
interface UserData {
  id: number;
  name: string;
  [key: string]: any;
}

async function fetchData(): Promise<UserData> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if(!response.ok) {
    throw new Error('데이터 요청 실패');
  }
  return await response.json() as UserData;
}
fetchData()
  .then(data => console.log('사용자 데이터: ', data))
  .then(error => console.error('ERROR: ', error));

// 실제 비즈니스 요구에 대한 비동기 처리 코드
//  : 게시물을 페이지별로 불러오기

//  페이지 번호와 페이지당 게시물의 수를 인자로 받는 비동기 함수 정의
//  : 기본으로 한 페이지당 게시물의 수는 10으로 설정
async function fetchPostsByPage(page: number, limit: number = 10): Promise<any[]> {
  try {
    // 요청 전달
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);

    // 응답 상태가 ok가 아닌 경우 - 에러
    if(!response.ok) {
      throw new Error('데이터 요청 실패');
    }

    // 응답 데이터를 JSON 형태로 변환하여 반환
    return await response.json();

  } catch (error) {
    console.error('ERROR: ', error);
    return [];
  }
}

// 함수 호출
// then을 사용하여 비동기 작업이 완료된 후에 게시물을 콘솔에 출력
fetchPostsByPage(1, 5).then(posts => console.log('페이지 1의 게시물: ', posts));
}