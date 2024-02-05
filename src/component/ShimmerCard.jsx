const ShimmerCard = () => {
    return (
      <div className="w-[210px] bg-gray-200 flex justify-center items-center h-[270px]  flex-col">
        <div className="w-[210px] h-[150px] bg-slate-500 mb-4 rounded-lg stroke animate"></div>
  
        <div className=" bg-slate-400 flex justify-center items-start gap-2 h-[120px] rounded-lg flex-col w-[210px]">
          <div className="w-10/12 bg-slate-500  ml-4 rounded-lg h-4 stroke animate  "></div>
  
          <div className="flex bg-slate-600 justify-start items-center gap-2 h-4 flex-row w-[210px]">
            <div className="w-4/12 bg-slate-700 ml-8  rounded-lg h-4 stroke animate "></div>
            <div className="w-4/12 bg-slate-700 rounded-lg h-4 stroke animate "></div>
          </div>
  
          <div className="w-4/12 bg-slate-400 rounded-lg h-4 stroke animate "></div>
        </div>
      </div>
    );
  };
  export default ShimmerCard;