import styled from "styled-components";
import {useState} from "react";
import {Link} from "react-router-dom"

const User = styled.div`
  margin-left: 800px;
  margin-top: 100px;
`

const Profile = styled.div`
  width : 50px;
  height : 50px;
  border-radius: 50%;
  background-color: grey;
`

const Skill1 = styled.h1`
  margin-top: 500px;
  margin-left: 1200px;
`;

const Skill2 = styled.h1`
  margin-top: -136px;
  margin-left: 1310px;
`;

const Skill3 = styled.h1`
  margin-top: -136px;
  margin-left: 1425px;
`;

const Skill4 = styled.h1`
  margin-top: 35px;
  margin-left: 1200px;
`;

const Skill5 = styled.h1`
  margin-top: -136px;
  margin-left: 1310px;
`;

const Skill6 = styled.h1`
  margin-top: -136px;
  margin-left: 1425px;
`;


function UserInfo() {
  const [room, setRoom] = useState('')

  const [skill1, setSkill1] = useState(1);
  const [skill2, setSkill2] = useState(1);
  const [skill3, setSkill3] = useState(1);
  const [skill4, setSkill4] = useState(1);
  const [skill5, setSkill5] = useState(1);
  const [skill6, setSkill6] = useState(1);

  const skillIncrease1 = () => {
    setSkill1(skill1 + 1);
  }

  const skillDecrease1 = () => {
    if (skill1 >= 2) {
      setSkill1(skill1 - 1);
    }
  }

  const skillIncrease2 = () => {
    setSkill2(skill2 + 1);
  }

  const skillDecrease2 = () => {
    if (skill2 >= 2) {
      setSkill2(skill2 - 1);
    }
  }

  const skillIncrease3 = () => {
    setSkill3(skill3+ 1);
  }

  const skillDecrease3 = () => {
    if (skill3 >= 2) {
      setSkill3(skill3 - 1);
    }
  }

  const skillIncrease4 = () => {
    setSkill4(skill4 + 1);
  }

  const skillDecrease4 = () => {
    if (skill4 >= 2) {
      setSkill4(skill4 - 1);
    }
  }

  const skillIncrease5 = () => {
    setSkill5(skill5 + 1);
  }

  const skillDecrease5 = () => {
    if (skill5 >= 2) {
      setSkill5(skill5 - 1);
    }
  }

  const skillIncrease6 = () => {
    setSkill6(skill6 + 1);
  }

  const skillDecrease6 = () => {
    if (skill6 >= 2) {
      setSkill6(skill6 - 1);
    }
  }

  return (
    <div>
      <div>
        <User>
          <h1><Profile/>박영승</h1>
          <h5>프론트앤드 개발자</h5>
          <button>
            메세지 보내기
          </button>
        </User>
      </div>
      <Skill1>
        <div>
          <img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=#61DAFB" alt=""/>
          <br/>
          {skill1}
          <br/>
          <button onClick={skillIncrease1}>+</button>
          <button onClick={skillDecrease1}>-</button>
        </div>
      </Skill1>

      <Skill2>
        <div>
          <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt=""/>
          <br/>
          {skill2}
          <br/>
          <button onClick={skillIncrease2}>+</button>
          <button onClick={skillDecrease2}>-</button>
        </div>
      </Skill2>

      <Skill3>
        <div>
          <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=#764ABC" alt=""/>
          <br/>
          {skill3}
          <br/>
          <button onClick={skillIncrease3}>+</button>
          <button onClick={skillDecrease3}>-</button>
          <br/>
        </div>
      </Skill3>

      <Skill4>
        <div>
          <img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=#61DAFB" alt=""/>
          <br/>
          {skill4}
          <br/>
          <button onClick={skillIncrease4}>+</button>
          <button onClick={skillDecrease4}>-</button>
        </div>
      </Skill4>

      <Skill5>
        <div>
          <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt=""/>
          <br/>
          {skill5}
          <br/>
          <button onClick={skillIncrease5}>+</button>
          <button onClick={skillDecrease5}>-</button>
        </div>
      </Skill5>

      <Skill6>
        <div>
          <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=#764ABC" alt=""/>
          <br/>
          {skill6}
          <br/>
          <button onClick={skillIncrease6}>+</button>
          <button onClick={skillDecrease6}>-</button>
        </div>
      </Skill6>
    </div>


  );
}

export default UserInfo;