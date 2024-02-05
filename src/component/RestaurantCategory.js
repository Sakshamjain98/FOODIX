import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy,index ,current}) => {
  const handleClick = () => {
    if(index==current){
      setShowIndex(null);
    }else{
      setShowIndex(index);
    }
  };

  return (
    <div>
      {/*Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "
        onClick={handleClick}
      >
        <div
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
