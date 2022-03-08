import styled from "styled-components";
import {useState} from "react";

const Skill = styled.h1`
  margin-top: 500px;
  margin-left: 1200px;
`;

const Skill2 = styled.h1`
  margin-top: 500px;
  margin-left: 1200px;
`;

function UserInfo() {
  const [skill, setSkill] = useState(1);

  const skillIncrease = () => {
    setSkill(skill + 1);
  }

  const skillDecrease = () => {
    if (skill >= 2) {
      setSkill(skill - 1);
    }
  }

  return (
    <Skill>
      <div>
        <img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=#61DAFB" alt=""/>
        <br/>
        {skill}
        <br/>
        <button onClick={skillIncrease}>+</button>
        <button onClick={skillDecrease}>-</button>
      </div>
      <div>

      </div>
    </Skill>

  );
}

export default UserInfo;