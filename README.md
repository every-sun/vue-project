## 아뮤즈 프론트엔드 과제1

### 화면
#### 1. 사용자 목록(홈)
<img width="1399" alt="스크린샷 2022-08-04 오후 5 45 02" src="https://user-images.githubusercontent.com/110370264/182804674-9910e493-8200-4c9e-99bc-aa7269f9351d.png">

   
#### 2. 사용자 게시글 목록
<img width="1448" alt="스크린샷 2022-08-04 오후 5 42 14" src="https://user-images.githubusercontent.com/110370264/182803951-61a33ca6-fc84-42d3-8d8b-146781d2d1e1.png">


#### 3. 게시글 디테일 페이지
<img width="1403" alt="스크린샷 2022-08-04 오후 5 43 16" src="https://user-images.githubusercontent.com/110370264/182804331-d623554f-9dec-4ef9-94b8-f45ad700c598.png">


#### 폴더구조
<img width="332" alt="스크린샷 2022-08-04 오후 5 47 05" src="https://user-images.githubusercontent.com/110370264/182804923-fbc79bd8-ff48-43d0-8271-db0542ce1bf5.png">
  
  * public : index.html이 들어있음 
  * src > api : api 요청 하는 함수
  * src > components : 화면을 구성하는 컴포넌트
  * src > router : 라우터 
  * src > store : vuex 스토어
  * src > views : 뷰 파일들 (유저 목록 페이지(홈), 게시글 목록 페이지, 게시글 디테일 페이지) 
  * src > index.css : 글로벌 스타일
  * src > App.vue에서 라우터 적용
  * src > main.js : App을 생성하고 id="app"인 div에 마운트, 라우터, vue 스토어 적용 
