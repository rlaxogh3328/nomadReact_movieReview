노마드코더 리액트JS 강의로 만든 영화 정보 제공 사이트입니다.

배운 것들)
1. 코드를 컴포넌트별로 분리하여 별도의 파일로 저장, 관리하기
2. useState() 를 통한 변수의 상태 변화 감지
3. useEffect(()=>{},[]). 화면이 처음 렌더링 될 때 실행되고, 이후 [] 안의 상태변화를 관측하는 변수의 상태가 변화할 때마다 첫번째 인자인 함수가 실행됨
4. cleanUp 함수 : useEffect에서 실행되어 렌더링 된 컴포넌트가 화면 상에서 사라졌을 때(언마운트) 실행되는 함수. 컴포넌트의 언마운트를 명시해주기 위한 개념.
5. map() : 배열을 갖는 변수에 사용 가능한 함수. 각 원소값을 차례로 인수로 받아 map() 안의 동작을 실행함. 이번 프로젝트의 경우에는 fetch()로 받아온 수많은 영화들을 리스트로 나타내는 과정에서 사용함.
6. react-router-dom 을 이용한 화면의 이동
7. props 로 컴포넌트 간에 변수 정보들을 전달하는 방법
8. propTypes = 전달할 props 들의 데이터형을 명시하거나, 제공되지 않았을 때 경고문구가 표시될 수 있도록 하는 실수를 줄여줄 수 있는 도구
9. url에 존재하는 정보들을 fetch()로 가져오기.
10. async / await 문법 => promise / then 과 유사한 용도로 사용 가능하다.   *추가 학습 필요함.*
11. 간단하게나마 구글링을 통해 css를 적용해봄.
12. gh-pages 를 통한 작업물 배포 ( package.json 에 homepage를 추가하고, script에서 deploy, predeploy 명령어를 작성함.
      deploy를 하기 위해선 npm run build를 하는 과정이 필요하고 predeploy는 build 없이 deploy 하는 상황을 방지하고자 build 되어있지 않은 경우 deploy를 입력해도 predeploy가 실행되도록 하였음.


프로젝트 도중 겪은 문제점)

Home 화면에서 Detail 화면으로 넘어가는 경우 url은 바뀌나 화면은 바뀌지 않는 현상 > <Route path="/'> 를 <Route exact path="/"> 로 지정하여 해결함
Detail 화면에서 Home 화면으로 이동(뒤로가기) 하는 경우 uncaught Runtime Error 에러메시지가 뜸 > useEffect 안의 cleanUp 코드를 명시해주어 해결함
