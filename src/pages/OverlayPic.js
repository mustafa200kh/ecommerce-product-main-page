import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Svgs
import closeIcon from "../Assets/icon-close.svg";
import nextIcon from "../Assets/icon-next.svg";
import prevIcon from "../Assets/icon-previous.svg";

const OverlayPic = (props) => {
  const state = useSelector((state) => state.product);
  const [currentIndex, setCurrentIndex] = useState(props.index);

  // Handlers
  const handlePrevClick = () => {
    currentIndex == 0
      ? setCurrentIndex(3)
      : setCurrentIndex((prev) => (prev -= 1));
  };
  const handleNextClick = () => {
    currentIndex == 3
      ? setCurrentIndex(0)
      : setCurrentIndex((prev) => (prev += 1));
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)]">
      <div className="w-[400px] mx-auto">
        {/* closeIcon  */}
        <div className="relative p-5">
          <img
            src={closeIcon}
            alt="close-icon"
            className="absolute right-0 top-[10px] invert-[1] brightness-0 cursor-pointer"
            onClick={() => {
              props.control((prev) => !prev);
            }}
          />
        </div>
        {/* Main Image  */}
        <div className="w-full relative mb-5">
          <div
            className="absolute left-[-20px] top-[50%] w-10 h-10 element-center bg-white rounded-full cursor-pointer"
            onClick={() => {
              handlePrevClick();
            }}
          >
            <img src={prevIcon} alt="prev-icon" className="max-w-full" />
          </div>
          <div
            className="absolute right-[-20px] top-[50%] w-10 h-10 element-center bg-white rounded-full cursor-pointer"
            onClick={() => {
              handleNextClick();
            }}
          >
            <img src={nextIcon} alt="" className="max-w-full" />
          </div>
          <img
            src={state.images[currentIndex]}
            alt="p-image"
            className="max-w-full h-[400px] rounded-2xl"
          />
        </div>
        <div className="flex justify-between">
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
                    setCurrentIndex(index);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverlayPic;
