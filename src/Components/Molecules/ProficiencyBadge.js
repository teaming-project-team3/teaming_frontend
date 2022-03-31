function ProficiencyBadge(props) {
  const { ability, skills, position } = props;
  console.log("no length", skills, position);
  //console.log("length", ability.length)

  ProficiencyBadge.defaultProps = {
    ability: [],
    skills: [],
    position: "",
  };

  function colorDesignator(item) {
    switch (item.time + item.rate) {
      case 2:
        return "61DAFB";
      case 3:
        return "A100FF";
      case 4:
        return "0ABF53";
      case 5:
        return "FF5A00";
      case 6:
        return "E6526F";
      case 7:
        return "00979D";
      case 8:
        return "EC1C24";
      default:
        return "F9DC3E";
    }
  }

  function skillColorDesignator(item) {
    switch (item.time + item.rate) {
      case 2:
        return "FF6550";
      case 3:
        return "9999FF";
      case 4:
        return "31A8FF";
      case 5:
        return "3DDC84";
      case 6:
        return "D70010";
      case 7:
        return "DDE072";
      case 8:
        return "0078D7";
      default:
        return "FF6384";
    }
  }

  return (
    <div className="w-full m-3 h-fit">
      <div className="text-base border-b-2 font-notoB w-fit">{position}</div>

      <div className="flex h-fit">
        {ability &&
          ability.map((item, idx) => {

            const color = colorDesignator(item);

            return (
              <div key={idx} className="m-1 h-fit">
                <img
                  src={`https://img.shields.io/badge/${item.name}-${color}?style=for-the-badge&logo=${item.name}&logoColor=white`}
                  alt={""}
                ></img>
              </div>
            );
          })}
      </div>

      <div className="flex">
        {skills &&
          skills.map((item, idx) => {

            const color = skillColorDesignator(item);

            return (
              <div key={idx} className="m-1 h-fit">
                <img
                  src={`https://img.shields.io/badge/${item.name}-${color}?style=for-the-badge&logo=${item.name}&logoColor=white`}
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
