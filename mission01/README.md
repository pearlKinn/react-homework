# 프론트엔드 스쿨 6기 리액트 과제

## 파일 구성
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜vite.svg
 ┣ 📂components
 ┃ ┗ 📜Button.jsx
 ┣ 📂layout
 ┣ 📂pages
 ┣ 📂styles
 ┃ ┣ 📜Button.module.css
 ┃ ┗ 📜global.css
 ┣ 📂utils
 ┃ ┣ 📜currency.js
 ┃ ┣ 📜getNode.js
 ┃ ┣ 📜getRandomMinMax.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜numberWithComma.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
##  아토믹(atomic) 컴포넌트를 설계
로그인 버튼의 상태 3가지를 컴포넌트로 구현해 보았다. [피그마 바로가기](https://www.figma.com/file/t81dSxypT6IjJBWwc1tp6b/atomic-component?type=design&node-id=0%3A1&mode=dev)<br>
![](https://velog.velcdn.com/images/pearlx_x/post/c2c83459-1652-4c67-a74c-4f1e0d43a39a/image.png)
- DEFAULT
- HOVER
- ON CLICK

순서대로 기본 상태, 호버됐을 때, 클릭되었을 때를 나타낸다
### 결과물
![](https://velog.velcdn.com/images/pearlx_x/post/21369bde-6f43-471b-a78c-fea0b898ab43/image.png)