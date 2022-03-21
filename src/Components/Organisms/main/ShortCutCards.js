function ShortCutCards(props) {
  return (
    <div
      className={`flex w-1/3 h-3/4 bg-[${props.bg}] rounded-xl p-[1rem] m-[1rem]`}
    >
      <div className="flex flex-col flex-wrap w-3/4">
        <div className="text-base text-white h-1/2">{props.text}</div>
        <div className="bg-white rounded-[3.125rem] w-1/3 text-[0.75rem] p-2 content-center">
          바로가기 ➡
        </div>
      </div>

      <div className="w-1/4 h-3/4">
        <img src={props.img} alt={""}></img>
      </div>
    </div>
  );
}

export default ShortCutCards;
