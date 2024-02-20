import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart =()=>{
    const dispatch = useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }
    const cartItems= useSelector((store)=> store.cart.items);
    return <>
    <div className="text-center m-4 p-4 ">
        <h1 className="text-5xl font-bold">Cart</h1>
        <div className="m-auto w-6/12 ">
            <ItemList items={cartItems}></ItemList>
        </div>
        <button className="p-2 m-2 bg-black text-white rounded-md"
        onClick={handleClear}>Clear Cart</button>

        {cartItems.length==0 && <h1>Cart is empty, Add Items to the cart!</h1>}
    </div>
    
    </>
}

export default Cart;