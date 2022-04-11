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

<br>
<details>
    <summary>
        <b>일명 이미지 엑박 문제</b>
        <br><blockquote>SPA인 리액트 그리고 우리 웹 사이트의 특성상, 각 컴포넌트에서 불러오는 이미지의 양이 많습니다. 따라서 간헐적으로 특정이미지가 엑박으로 뜨는 문제가 발생</blockquote></br>
    </summary>
    <br>해결 : CSR 데이터의 부하를 처리해준다면 해결될 것이라는 가설을 세우고, 
  
Loadable 라이브러리를 이용하여 컴포넌트를 렌더링 시점에 비동기적으로 불러오도록 효율적으로 코드를 수정하였습니다. 
  
이후, 
실제 자체 테스트 결과 
3대의 컴퓨터로 10회의 자체 테스트를 진행하였습니다
그 결과 총 260개의 이미지중, 42(16%)개의 이미지 유실율이 발생하였고, 
Loadable을 적용한 결과, 260개 중, 5(2%)개로 유실율이 눈에 띄게 줄어듦을 확인할 수 있었습니다. 

</details>
<details>
    <summary>
        <b>영상채팅 과정에서 오디오 하울링 발생</b>
    </summary>
    <br>해결 : 본인의 오디오도 함께 송출되기 때문에 발생한다는 가설을 세웠고,
               본인의 오디오는 송출되지 않도록 코드를 수정함으로써 서비스의 편의성을 높였습니다.
</details>
<details>
    <summary>
        <b>영상채팅 videoView 동적 추가, 제거</b>
    </summary>
    <br>해결 : React에서 document.querySelector를 사용하게되면, 실제 DOM의 요소를 가져오게 됩니다.

하지만 React는 Virtual DOM을 통해 Real DOM을 그리기 때문에, React가 제어하고있는 Virtual DOM 안에 있는 요소에 접접근하 처리하는 것이 더 적합하다고 판단했습니다.

이에 우리는 useRef를 이용하여 가상돔에 접근해 뷰를 동적으로 생성하였습니다.
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
