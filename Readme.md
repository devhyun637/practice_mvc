# Vanilla JS with MVC pattern
- [인프런 실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/dashboard) 강의를 듣고  Vanilla JS로 MVC 패턴을 연습한 코드 저장소입니다.

## 기능 구현 목록
1. 사용자는 검색 폼에 찾고자하는 단어를 검색할 수 있다.
    - [x] [조건] 사용자가 검색하기 전에는 x 버튼이 보이지 않는다.
    - [x] [조건] 사용자가 검색어를 입력하면 x 버튼이 보인다.
    - [x] [조건] 사용자가 검색 전에 x 버튼을 클릭하거나 입력한 것을 모두 삭제하면 입력된 단어를 삭제하고, x 버튼을 숨긴다.
    - [x] [조건] 엔터를 입력하면 검색 결과가 보인다.(컨트롤러에게 위임)

2. 사용자는 검색 결과를 볼 수 있다.
    - [x] [조건] 검색 폼 아래에 검색 결과가 위치한다
    - [x] [조건] 사용자가 검색 이후 x 버튼을 누르면 검색 결과를 삭제한다.

3. 사용자는 탭을 선택할 수 있다.
    - [x] [조건] 탭은 '최근 검색어'와 '추천 검색어'로 이루어져 있다.
    - [x] [조건] 초기에 선택된 탭은 '추천 검색어'이다.
    - [x] [조건] 탭을 선택하면 선택된 탭을 표시한다.

4. 추천 검색어를 선택하면, 추천 검색어 목록을 볼 수 있다.
    - [x] [조건] 추천 검색어는 탭 아래에 위치한다.
    - [x] [조건] 목록에서 검색어를 선택하면 검색 결과 화면으로 이동한다.
    - [x] [조건] 목록에서 검색어를 선택하면 검색 폼에 선택된 추천 검색어가 나타난다.
