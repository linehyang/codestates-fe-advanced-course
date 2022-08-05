# Codestates-FE-Advanced-Course 사전 과제

## 완성된 GIF 파일 및 배포 링크
 - GIF 파일
<br>
 
![ezgif com-gif-maker](https://user-images.githubusercontent.com/83056347/183034570-8f83f5d0-4091-4c29-9a4f-0c5dbb6d3ebd.gif)

- 배포 링크 : https://codestates-fe-advanced-course-nu.vercel.app/

----

## 프로젝트 실행 방법

```bash
$ yarn 
$ yarn dev

```

----

## 사용한 스택 목록
### Next.js

- CSR에 대비 빠른 로딩과 SSG, SSR을 쉽게 구현할 수 있도록 지원

### TypeScript

- 개발 생산성을 높이기 위해 사용
  - 오타로 인해 발생할 수 있는 오류들을 타입 추론을 통해 사전에 잡아냄
  - 사전(컴파일 시점)에 오류를 잡아줘서, 불필요한 디버깅 시간 단축

### styled-components
- 스타일을 마크업과 비즈니스 로직과 같은 파일에 작성하여, 관심사별 응집도를 높이기 위해 사용
- classname을 사용하지 않고 스타일을 줄 수 있어 classname의 중복으로 인한 문제를 사전에 방지하기 위해 사용
- props를 전달하여 동적으로 스타일링하기 위해 사용


----

## 구현한 기능 목록(Software Requirement Specification)
1. 게시물 리스트
2. 게시물 상세 페이지
3. 게시물 리스트 페이지네이션
4. 헤더 로고 클릭시 메인화면 이동 

----

## 구현 방법 혹은 구현하면서 어려웠던 점
1. 페이지네이션
  - 코드스테이츠 파이널프로젝트에서 페이지네이션을 사용 할 당시에는 서버로부터 페이지 및 각 페이지에 렌더링 할 게시물을 전달받아 프론트에서 뿌려주기만 하였는데 이번과제에서는 페이지네이션을 위한 로직을 직접 구현해야 하기 했으므로 페이지네이션 구현 로직에 대해 많은 고민을 함
2. SSR
  - 실제 게시판의 경우 빌드시 페이지를 만들어 놓는 SSG를 사용하게 되면 게시글이 새롭게 추가되었을 경우에 빌드가 되지 않았다면 해당 게시물이 사용자에게 보여지지 않기 때문에 SSR을 사용.
  
----

## Wireframe

figma 링크 : https://www.figma.com/file/2QCmNWSYTHKViLCLuQe3Gp/CodeStates-FE-Advanced?node-id=0%3A1


----

## 과제를 진행하면서 고민했던 점들

### 컨벤션
- 일관된 커밋 규칙
  - Feat : 새로운 기능 추가
  - Fix : 버그 수정
  - Docs : 문서 수정
  - Refact : 코드 리팩토링
  - Style : 코드 의미에 영향을 주지 않는 변경 사항
  - Chore : 빌드 부분 혹은 패키지 매니저 수정 사항
  - Add : 기타 내용 추가
- CSS property 순서를 정함 (position -> sizing -> font -> 기타)

### 접근성
- 시멘틱한 HTML 작성을 위해 `table`태그를 사용하여 게시판 리스트 구현 

  
  
