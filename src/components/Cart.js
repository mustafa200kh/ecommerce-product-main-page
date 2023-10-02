import React from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../rtk/slices/cart-slice";
// Icons
import deleteIcon from "../Assets/icon-delete.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state);

  const total = state.reduce((acc, e) => {
    acc = acc + e.price * e.quantity;
    return acc;
  }, 0);
  return (
    <div className="fixed top-[90px] left-[50%] translate-x-[-50%] rounded-xl bg-white z-10 w-[95vw] sm:w-[300px] sm:left-[100%] sm:translate-x-[-350px] sm:shadow-[8px_8px_8px_8px_#eee]">
      <h2 className="text-black p-4 border-b-[1px] border-b-[#ddd] border-solid font-semibold mb-4">
        Cart
      </h2>
      {/* Check if The cart is empty or not to render elements */}
      {state.length > 0 ? (
        state.map((e) => {
          return (
            <div
              key={e.name}
              className="flex items-center justify-center gap-3 mb-1 sm:p-2"
            >
              <div className="basis-[20%]">
                <img
                  src={e.images[0]}
                  alt="p-img"
                  className="max-w-full rounded-lg"
                />
              </div>
              <div className="basis-[60%]">
                <p className="text-[#777] font-semibold"> {e.name} </p>
                <p className="text-[#777]">
                  ${e.price} * {e.quantity} ={" "}
                  <span className="text-black">{e.price * e.quantity}$</span>
                </p>
              </div>
              <div
                className="basis-[10%] cursor-pointer"
                onClick={() => {
                  dispatch(removeFromCart(e.id));
                }}
              >
                <img src={deleteIcon} alt="delete-icon" />
              </div>
            </div>
          );
        })
      ) : (
        <div className="element-center p-4 font-semibold text-[#777] min-h-[200px] sm:min-h-[150px]">
          Your Cart Is Empty.
        </div>
      )}

      {/* Check the cart if it is empty or not to render checkout button */}
      {state.length > 0 && (
        <button className="block w-[90vw] sm:w-[95%] ml-auto mr-auto my-5 rounded-xl text-white font-semibold bg-primaryColor text-center p-4 transition-all duration-200 hover:opacity-50">
          CheckOut
        </button>
      )}
    </div>
  );
};
export default Cart;
