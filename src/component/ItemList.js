import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex flex-col sm:flex-row justify-between"
        >
          <div className="w-full sm:w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId !== undefined && (
            <div className="w-full sm:w-3/12 relative mt-2 sm:mt-0">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full rounded-md"
              />
              <button
                className="absolute bottom-2 right-2 p-2 rounded-lg bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
