![readme](https://user-images.githubusercontent.com/46555489/161640050-44a6df10-0338-498b-8cb2-17ba3dd5ff58.png)

<!-- 서비스 간략설명  -->

# 🌠TEAMING

- [티밍 바로가기](https://teaming.link)

## FrontEnd 핵심 기능

- `webRTC`
  - 프로젝트 방에서 socket.io를 이용한 webRTC 환경 구축, 화상회의와 채팅 기능
- `socket.io`
  - 실시간 채팅 기능 구현
- `ci/cd`
  - gitHubAction을 이용한 AWS S3 빌드/배포 자동화과정 구축


---

## 👨‍💻 프로젝트 소개

### **프로젝트 기간**

- 2022/03/04 ~ 2022/04/06

### Member
<!-- 
|  Name  |  Position  |                               Link                               |
| :----: | :--------: | :--------------------------------------------------------------: |
| 장석우 | 프론트엔드 |     [https://github.com/jsw4215](https://github.com/jsw4215)     |
| 정민수 |   백엔드   |  [https://github.com/jeongmisnu](https://github.com/jeongmisnu)  |
| 이원진 |   백엔드   | [https://github.com/WON-JIN-LEE](https://github.com/WON-JIN-LEE) |
| 전도현 |   디자인   | [https://www.behance.net/Jeon-Do-Hyeon](https://www.behance.net/8c7e3f9a/appreciated) | -->

|                                                         [장석우](https://github.com/jsw4215)                                            |                                                         [정민수](https://github.com/jeongmisnu)                                                          |                                                      [이원진](https://github.com/WON-JIN-LEE)                                                       |                                                        [전도현](https://www.behance.net/8c7e3f9a/appreciated)                                                         |                                                                                            
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | 
| <img src="https://user-images.githubusercontent.com/46555489/161837676-5a341ff3-5746-47e3-9695-ed2311156346.jpg" alt="프로필 이미지" width="200px"/> |  <img src="https://user-images.githubusercontent.com/46555489/161719951-25b36276-0b36-4f3f-b84e-29d7e7581da0.jpg" alt="프로필 이미지" width="200px"/> | <img src="https://user-images.githubusercontent.com/46555489/161719985-93cbd6ed-399d-4888-9f6c-b883c5ef24c9.jpg" alt="프로필 이미지" width="200px" /> | <img src="https://user-images.githubusercontent.com/46555489/161719970-4e512e8f-5fd9-45b3-8058-7e17b58f89b7.png" alt="프로필 이미지" width="200px" /> 
|                                                                      `Front-End`                                               |                                                                      `Back-End`                                                                       |                                                                      `Back-End`                                                                          |                                                                       `Designer`                                                                       |                                                                      

### Links
- [Home Page](https://teaming.link)
- [Team Notion](https://www.notion.so/Teaming-c266b86faf844358af8b7c1b46c83a1e)
- [Demonstration Video](https://www.youtube.com/watch?v=SSLpx3gzMSg) 1:30
- [Presentation Link](https://www.youtube.com/watch?v=Jh_xhXWulCY) 10:33
<br>

---

## 💎Service Architecture

![프론트엔드 서비스아키텍쳐](https://user-images.githubusercontent.com/55970155/162741204-196a765f-be1e-4e3f-a937-0a581b7bb8c9.png)


---

## 🛠 Tech & Platfrom

### **Front-end**
<p>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <br>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=WebRTC&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-ffffff?style=for-the-badge&logo=socket.io&logoColor=black">
<img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=Amazon AWS&logoColor=white">
<img src="https://img.shields.io/badge/Route53-4A154B?style=for-the-badge&logo=Amazon AWS&logoColor=white">
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">
<img src="https://img.shields.io/badge/GithubAction-181717?style=for-the-badge&logo=GithubAction&logoColor=white">
<br>
</p>

---

## 📘 주요 라이브러리

| 라이브러리    | 설명                                    |  
| ------------- | --------------------------------------- |
| redux       | 전역 상태관리                             |
| tailwindcss       | CSS framework                             |
| socket.io         | 실시간 양방향 통신(webRTC)            |     
| axios    | API 통신                            |
| react-loadable       |  코드 스플리팅             |
| react-intersection-observer   | lazy-loading(무한스크롤)        |
| react-ga | Goole Analytics                        |

---

## 🔥이슈 및 트러블슈팅

<h3 align="center"><b>✏ Trouble Shooting ✏</b></h3>
<br>
<details>
    <summary>
        <b>ajax로 데이터를 받아오고 화면으로 뿌려줄 때, 비동기로 작동하기 때문에 
요소들이 생성되기전에 dom에 접근하게 되어 UI를 다루기가 쉽지 않았습니다. </b>
    </summary>
    <br>해결 : 순차적으로 실행되 접근할 수 있게끔 ajax메서드 안에서 작성해서 해결했습니다.
</details>
<details>
    <summary>
        <b>순환 참조(임포트) 문제
개별 파이썬 파일 작업으로 blueprint를 사용하였는데
ex) app.py <- detail.py
이때 detail에서도 app.py를 임포트 할 경우 에러가 발생하였다. </b>
    </summary>
    <br>해결 : 전역으로 임포트 하지 않고 함수내에서 임포트 하는 방법으로 해결
</details>

---

## more info

<details>
<summary>API 명세서</summary>
<div markdown="1">

![boardAPI](https://user-images.githubusercontent.com/46555489/161772534-9a7b2743-3794-4bad-9431-6dd38f6a0980.PNG)

![authAPI](https://user-images.githubusercontent.com/46555489/161772548-c298d77c-3104-4531-a940-c4595e0b9515.PNG)

![userAPI](https://user-images.githubusercontent.com/46555489/161772555-7c435356-330c-40a1-91dc-0b267301d1bb.PNG)

![projectAPI](https://user-images.githubusercontent.com/46555489/161772564-1c7fab5c-c080-47df-be08-84f916930106.PNG)

</div>


<h3><b>💻 Now Working On.. 💻</b></h3>

<br>

회원가입 -> 로그인 -> 설문조사 -> 메인 -> 메인(실시간 인기 프로젝트 카드) -> 프로젝트상세모달->프로젝트룸->userB상세정보

<br>
<h4><b>📰 Login Page 📰</b></h4>



<br>
<h4><b>📰 SignUp Page 📰</b></h4>


<br>
<h4><b>📰 Survey Page 📰</b></h4>


<br>
<h4><b>📰 Main Page 📰</b></h4>


<br>
<h4><b>📰 Category Main Page 📰</b></h4>

<table width="100%">
    <tr>
        <!-- <td width="50%"><img src="https://user-images.githubusercontent.com/55970155/155251199-671a7011-385b-40d1-8700-5a01f088952b.PNG" /></td> -->
        <td width="50%">
            <h5>Fulfilled</h5>
            <ul>
                <li>init view</li>
                <li>api link with min-su zzang</li>
                <li>Infinity Scroll</li>
            </ul>
            <h5>Pending</h5>
            <ul>
                <li>apply design</li>
            </ul>
            <h5>rejected</h5>
            <ul>
                <li>null</li>
            </ul>
        </td>
    </tr>
</table>

<br>
<h4><b>📰 Create Project Page 📰</b></h4>


<br>
<h4><b>📰 Project Detail Page 📰</b></h4>

<table width="100%">
    <tr>
        <!-- <td width="50%"><img src="https://user-images.githubusercontent.com/55970155/155251199-671a7011-385b-40d1-8700-5a01f088952b.PNG" /></td> -->
        <td width="50%">
            <h5>Fulfilled</h5>
            <ul>
                <li>init view</li>
                <li>apply Markdown viewer</li>
                <li>button to enter-room, using socket</li>
                <li>api link to min-su-zzing</li>
            </ul>
            <h5>Pending</h5>
            <ul>
                <li>apply design</li>
            </ul>
            <h5>rejected</h5>
            <ul>
                <li>null</li>
            </ul>
        </td>
    </tr>
</table>

<br>
<h4><b>📰 Project Room Page 📰</b></h4>

<table width="100%">
    <tr>
        <!-- <td width="50%"><img src="https://user-images.githubusercontent.com/55970155/155251199-671a7011-385b-40d1-8700-5a01f088952b.PNG" /></td> -->
        <td width="50%">
            <h5>Fulfilled</h5>
            <ul>
                <li>init view</li>
                <li>apply Radar Chart, Chart.js</li>
                <li>Other users info view, Radar chart Mouse Hover Event</li>
                <li>slider, react-slick</li>
                <li>socket.io only or socket.io with webRTC data channel N:N chat</li>
                <li>webRTC N:N Video call</li>
                <li>realtime users video status change, using socket</li>
                <li>Audio fixed</li>
            </ul>
            <h5>Pending</h5>
            <ul>
                <li>apply design</li>
                <li>start project button, change the chatting to saving data</li>
            </ul>
            <h5>rejected</h5>
            <ul>
                <li>null</li>
            </ul>
        </td>
    </tr>
</table>

<br>
<h4><b>📰 Personal Detail Page 📰</b></h4>

<br>
<h4><b>📰 My Page 📰</b></h4>


