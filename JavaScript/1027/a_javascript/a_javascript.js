// 자바 스크립트 주석 (단축키 : command + /)

/*
! 자바 스크립트 소개

    - HTML
        : 웹 콘텐츠를 구성하고 의미를 부여하는 데 사용하는 마크업 언어
    - CSS
        : HTML 콘텐츠에 스타일을 적용하는 데 사용하는 스타일 규칙 언어
    - JavaScript
        : 서버나 웹에서 작동하는 프로그램을 만드는 등 웹의 모든 부분을 다룰 수 있는 스크립팅 언어이자 프로그래밍 언어
! 자바스크립트의 활용
    1. 웹 클라이언트 애플리케이션 개발
        사용자가 웹 요소를 제어하는 웹 사이트의 User Interface 부분에 활용 가능

        - User Interface : 메뉴, 텍스트, 팝업 등 사용자가 사이트를 편리하게 사용할 수 있도록 하는 모든 디자인 요소
        - Web Application : 다양한 기능을 가진 웹 페이지
            ex. 별도의 설치 없이 웹 브라우저 만으로도 해당 애플리케이션 기능 사용 가능한 웹

    2. 웹 서버 어플리케이션 개발 (백앤드)
        Node.js 개발로 자바스크립트로도 웹 서버 어플리케이션 개발 가능

    3. 모바일 애플리케이션 개발
        안드로이드 - JAVA, KOTLIN
        IOS - SWIFT
        - REACT : '페이스북'에서 자바스크립트로 모든 모바일 운영체제에서 사용 가능한 리엑트 네이티브 개발

! 자바스크립트의 버전
    ECMAScript 표준 - JS의 새로운 기능과 동작을 정의
    ECMAScript 2015 (ES6) 
    ESNext - ES6 이루에 계속 업데이트 되고 있는 버전

! 자바스크립트의 특징
    1. 동적 언어
        : JS가 실행되는 시점에서 해석되는 언어
    2. 객체 기반
        : 객체를 사용하여 데이터와 함수를 묶을 수 있는 언어
    3. 이벤트 기반
        : 이벤트 기반 프로그래밍 지원
            사용자의 행동(클릭, 키보드 입력, 마우스 이동 등) 에 따라 코드가 실행되는 방식

! 자바스크립의 주요 기능
    1. 
*/

const button = document.querySelector('button');

button.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    button.textContent = `Player 1 : ${name}`;
}