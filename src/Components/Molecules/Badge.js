function Badge(props) {

    const {skills, position} = props;

    Badge.defaultProps = {
        skills:[],
        position:"",
    }

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

    function skillColorDesignator() {

      switch (getRandom(2, 10)) {
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
    <div className="w-full">
    <div>{position}</div>

    <div className="flex">
      {skills &&
        skills.map((item, idx) => {
          return (
            <div className="m-1" key={idx}>
              <img
                src={`https://img.shields.io/badge/${item}-${skillColorDesignator()}?style=for-the-badge&logo=${item}&logoColor=white`}
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