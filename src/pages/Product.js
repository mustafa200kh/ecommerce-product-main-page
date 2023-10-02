import React from "react";
// reducers
import { addToCart } from "../rtk/slices/cart-slice";
// svgs
import cartIcon from "../Assets/icon-cart.svg";
// Hooks
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import OverlayPic from "./OverlayPic";

export const Product = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [currentIndex, setcurrentIndex] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [overlay, setOverlay] = useState(false);

  // handle count of products
  const handleCountDecrement = () => {
    setProductCount((prev) => {
      return productCount > 0 ? (prev -= 1) : prev;
    });
  };
  const handleCountIncrement = () => {
    setProductCount((prev) => (prev += 1));
  };

  // displaying the overlay or not
  const handleoverlay = () => {
    if (window.innerWidth > 576) {
      setOverlay((prev) => !prev);
    }
  };
  return (
    <>
      {overlay && <OverlayPic index={currentIndex} control={setOverlay} />}
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-around sm:items-center">
        <div className="slider mb-8 sm:mb-0 sm:basis-[30%]">
          <div className="main mb-3">
            <img
              src={state.images[currentIndex]}
              alt="product-image"
              className="rounded-2xl hover:cursor-pointer max-h-full"
              onClick={() => {
                handleoverlay();
              }}
            />
          </div>
          <div className="thumb flex justify-between items-center">
            {state.thumb.map((e, index) => {
              return (
                <div
                  key={e}
                  //   border-[1px] border-solid border-primaryColor
                  className="basis-[20%]"
                >
                  <img
                    src={e}
                    alt="thumbnails-image"
                    // opacity-30
                    className="rounded-2xl hover:cursor-pointer"
                    onClick={() => {
                      setcurrentIndex(index);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="info p-3 sm:p-0 sm:basis-[45%]">
          <h3 className="text-primaryColor font-semibold mb-5">
            {state.company}
          </h3>
          <h2 className="text-2xl sm:text-[40px] mb-5 font-bold">
            {" "}
            {state.name}
          </h2>
          <p className="text-[#777] mb-4"> {state.description}</p>
          <div className="flex items-start gap-3 mb-4 sm:mb-0">
            <p className="font-bold text-2xl"> {state.price}$ </p>
            <p className="text-primaryColor bg-[#ffefdf] rounded-lg px-1">
              {state.discount}%
            </p>
            <p className="block text-[#ddd] line-through sm:hidden">
              {state.oldPrice}$
            </p>
          </div>
          <p className="text-[#ddd] line-through mb-5 hidden sm:block">
            {state.oldPrice}$
          </p>
          <div className="flex flex-col sm:flex-row">
            <div className="basis-[30%] flex items-center mb-4 sm:mb-0">
              <button
                onClick={() => {
                  handleCountDecrement();
                }}
                className="p-2 bg-[#eee] text-primaryColor font-bold rounded-tl-lg rounded-bl-lg "
              >
                -
              </button>
              <p className="px-5 py-2 font-bold bg-[#eee] flex-1 sm:flex-grow-0 text-center">
                {productCount}
              </p>
              <button
                onClick={() => {
                  handleCountIncrement();
                }}
                className="p-2 bg-[#eee] text-primaryColor font-bold rounded-tr-lg rounded-br-lg"
              >
                +
              </button>
            </div>
            <button
              className="p-2 sm:p-0 basis-[50%] text-center w-full rounded-lg transition-all duration-200 hover:opacity-50 bg-primaryColor text-white shadow-[2px_8px_8px_4px_#ffefdf]"
              onClick={() => {
                dispatch(addToCart({ ...state, quantity: productCount }));
              }}
            >
              {/* <img
                  src={cartIcon}
                  alt="cart"
                  className="text-white w-5 h-5 max-w-full object-contain"
                /> */}
              <span> Add to cart </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
