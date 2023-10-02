import React from "react";
import closeIcon from "../Assets/icon-close.svg";

export const SideMenu = (props) => {
  return (
    <div className="fixed z-30 top-0 left-0 w-[60vw] h-[100vh] bg-white p-5 shadow-[1px_1px_1px_1px_#eee]">
      <div
        className="hover:cursor-pointer mb-4"
        onClick={() => props.menuState((prev) => !prev)}
      >
        <img
          className="object-contain max-w-full"
          src={closeIcon}
          alt="close-Icon"
        />
      </div>
      <div className="links">
        <ul className="list-none font-medium">
          {props.links.map((e) => {
            return (
              <li className="py-4 text-black" key={e}>
                <a href="#"> {e} </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SideMenu;
