function ProficiencyBadge(props) {

    const {ability, skills, position} = props;
    console.log("no length", skills, position)
    //console.log("length", ability.length)

    ProficiencyBadge.defaultProps = {
        ability:[],
        skills:[],
        position:"",
    }

    return (
    <div className="w-full h-1/3">
    <div>{position}</div>

    <div className="flex">
      {ability &&
        ability.map((item, idx) => {
          return (
            <div className="m-1 h-1/5">
              <img
                key={idx}
                src={`https://img.shields.io/badge/${item.name}-3776AB?style=for-the-badge&logo=${item.name}&logoColor=white`}
                alt={""}
              ></img>
            </div>
          );
        })}
    </div>

    <div className="flex">  
      {skills &&
        skills.map((item, idx) => {
          return (
            <div className="w-1/5 m-1 h-1/5">
              <img
                key={idx}
                src={`https://img.shields.io/badge/${item.name}-3776AB?style=for-the-badge&logo=${item.name}&logoColor=white`}
                alt={""}
              ></img>
            </div>
          );
        })}
    </div>
  </div>
  );
}

export default ProficiencyBadge;