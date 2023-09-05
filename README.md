# [ Week 2 ] Github React repository Issue viewer

<img src = https://camo.githubusercontent.com/431cb39804ef7c333ffa8b0dfec7e24581654e84e3c8bcf91f64a43158c3156c/68747470733a2f2f7374617469632e77616e7465642e636f2e6b722f696d616765732f6576656e74732f323930392f62333539313861362e6a7067 />

## 프로젝트 소개

- Github REST API를 활용하여 개발한 프로젝트로 react repository의 issue 목록을 확인할 수 있습니다.

- 진행 기간 : 2023.08.29 ~ 2023.08.31

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/react markdown-brown?style=for-the-badge&logo=npm">

### Convention

<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm">

## 실행 방법

- 이 프로젝트는 GitHub의 REST API를 사용하고 있으므로, GitHub Personal Access Token이 없는 요청은 시간당 60회로 제한됩니다. 로컬에서의 원활한 실행을 위해 토큰 생성 후, `.env` 파일에 `REACT_APP_API_KEY = 발급받은 토큰` 과 같이 설정해주어야 합니다.

```
$ git clone git@github.com:kimdonggu42/wanted-preonboarding-week-2-assignment.git

$ npm install

$ npm start
```

## 디렉토리 구조

```
📦 src
 ┣ 📂 assets
 ┃ ┣ 📂 images
 ┃ ┗ 📂 styles
 ┣ 📂 components
 ┣ 📂 hooks
 ┣ 📂 pages
 ┣ 📂 utils
 ┣ 📜 App.tsx
 ┗ 📜 index.tsx
```

## 작업 내용

### 1. IntersectionObserver API를 활용한 Infinite Scroll 적용

- 관심사 분리를 위해 Infinite Scroll 기능을 custom hook으로 분리하였습니다.

- useInfiniteScroll hook은 issues를 불러오는 getIssues() 함수와 page 번호를 인자로 받아 target이 관찰될 때마다 callback 함수를 실행합니다.

### 2. Error Boundary를 이용한 선언적인 에러 처리

- 더 나은 사용자 경험을 위해 렌더링 중 throw된 에러를 catch 하여 에러 발생 시 custom fallback UI를 보여주도록 했습니다.

### 3. 중첩 라우팅을 활용한 페이지 레이아웃화

- 메인 페이지와 issue 상세 페이지에서 Header를 공통적으로 사용하기 위해 Router 외부에서 렌더링 시 에러 페이지에서도 Header가 보이기 때문에 Header를 레이아웃화 시켰습니다.

- HeaderLayout 컴포넌트에서 Header를 렌더링하고 Outlet으로 children을 받아 메인 페이지와 issue 상세 페이지에서는 Header를 공통적으로 사용하되 에러 페이지에서는 안 보이도록 했습니다.

## 작동 화면

|                                                **이슈 목록/상세 화면**                                                 |                                                    **무한 스크롤**                                                     |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| <img width="360px" src="https://github.com/kimdonggu42/saveme/assets/115632555/69d6d751-da59-4ab3-93a2-9df9e8758181"/> | <img width="360px" src="https://github.com/kimdonggu42/saveme/assets/115632555/1aadbbef-f15a-4ad8-87aa-3142dfdaec7b"/> |
|                                                     **에러 화면**                                                      |
| <img width="360px" src="https://github.com/kimdonggu42/saveme/assets/115632555/b20d060c-62cf-48db-8f27-bf9d5e852af3"/> |
