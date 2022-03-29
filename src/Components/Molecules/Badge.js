function Badge(props) {

    const {skills, position} = props;
    console.log("no length", skills, position)
    //console.log("length", ability.length)

    Badge.defaultProps = {
        skills:[],
        position:"",
    }

    return (
    <div className="w-full h-1/3">
    <div>{position}</div>

    <div className="flex">
      {skills &&
        skills.map((item) => {
          return (
            <div className="m-1 h-1/5">
              <img
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

export default Badge;