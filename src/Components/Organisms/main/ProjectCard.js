import imgDefault from "../../../static/project.jpg";
import tw from "tailwind-styled-components";

const StackStatus = tw.div`
px-2 text-white text-[0.75em] font-noto3 
rounded-2xl bg-[#7545F2] w-fit mr-1
${(props) => (props.num > 0 ? `bg-[#7545F2]` : `bg-[#DC143C]`)};
`;

function ProjectCard(props) {
  const { id, text, stack, profileUrl, nickName, _onClick, img } = props;

  ProjectCard.defaultProps = {
    text: "프로젝트 제목",
    stack: [],
    img: { imgDefault },
    profileUrl: "http://relative-projectURL",
    nickName: "nickName",
    _onClick: () => {},
    id: "id",
  };

  const nameManufacture = (name) => {
    try {
      return name.split("&")[0];
    } catch {
      return name;
    }
  };

  return (
    <div
      onClick={() => {
        _onClick(id);
      }}
      className="flex flex-col overflow-hidden hover:border-blue-200 w-[15.625em] h-[18.750em] ml-[2.250em] bg-white border-2 cursor-pointer rounded-[0.333em] shadow-lg m-2"
    >
      <div className="object-contain object-center overflow-hidden h-2/3">
        <img
          src={img}
          alt={imgDefault}
          className="object-cover w-full h-full overflow-hidden"
        ></img>
      </div>

      <div className="flex flex-col p-[0.813em] items-stretch h-1/3">
        <div className="flex flex-wrap w-full">
          {stack &&
            stack.map((item, idx) => {
              return (
                <StackStatus num={item[2]}>
                  {item[2] > 0 ? item[1] + "✅" : item[1] + "❌"}
                </StackStatus>
              );
            })}
        </div>

        <div className="py-[0.656em] text-black text-[1em] font-notoB truncate ...">
          {text}
        </div>
      </div>
      <div className="flex pl-[0.813em] pb-[1.250em] text-gray-600 text-[0.75em] font-noto2 w-full">
        <img
          src={profileUrl}
          alt={require("../../../static/images/userStats/user_icon.png").default}
          className="flex-initial w-[1.250em] h-[1.250em] rounded-full"
        ></img>
        <p className="flex-initial pl-[0.438em]">{nameManufacture(nickName)}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
