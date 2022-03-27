function ShortCutCards(props) {
  const { _onClick } = props;

  ShortCutCards.defaultProps = {
    _onClick: () => {},
  };

  return (
    <div
      className={`flex w-[33.75rem] h-[10.5rem] mx-[0.875rem] bg-[${props.bg}] rounded-xl p-[1.75rem] cursor-pointer`}
      onClick={_onClick}
    >
      <div className="flex flex-col flex-wrap w-3/4 ml-[1.25rem]">
        <div className="text-base text-white h-1/2 w-[17rem]">
          <strong className="text-[1.273rem]">{props.text}</strong>
        </div>
        <div className="bg-white rounded-[3.125rem] w-[6.921rem] h-[2.375rem] mt-[0.625rem] text-[0.75rem] py-[0.625rem] px-[1rem]">
          <p>
            바로가기
            <i className="fa-solid fa-arrow-right pl-[1.25rem]"></i>
          </p>
        </div>
      </div>

      <div className="w-1/4 h-3/4 mr-[1.25rem]">
        <img src={props.img} alt={""}></img>
      </div>
    </div>
  );
}

export default ShortCutCards;
