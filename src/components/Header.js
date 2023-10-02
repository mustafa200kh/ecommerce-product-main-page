import React, { useState } from "react";
import { useSelector } from "react-redux";

// Images , Icons
import logo from "../Assets/logo.svg";
import menuIcon from "../Assets/icon-menu.svg";
import cartIcon from "../Assets/icon-cart.svg";
import avatar from "../Assets/image-avatar.png";

// Componenets
import SideMenu from "./SideMenu";
import Cart from "./Cart";

const Header = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  // to contorl the side menu
  const [menuOpen, isMenuOpen] = useState(false);
  // to control the cart menu
  const [cartOpen, setCart] = useState(false);

  //
  const cartState = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto sm:mb-10 border-b-[1px] border-b-solid border-b-[#eee]">
      {menuOpen && <SideMenu links={links} menuState={isMenuOpen} />}
      <div className="flex items-center p-5 md:py-5 md:px-0">
        <div
          className="basis-[10%] md:hidden"
          onClick={() => {
            isMenuOpen((prev) => !prev);
          }}
        >
          <img src={menuIcon} alt="menu-icon" />
        </div>
        <div className="basis-[40%] md:basis-[20%]">
          <a href="#" className="">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="links hidden md:block md:basis-[40%]">
          <ul className="list-none flex items-center gap-5">
            {links.map((e) => {
              return (
                <li
                  className="text-[#999] hover:text-black transition-all duration-200 relative after:content-[''] after:absolute after:bottom-[-26px] after:left-0 after:w-[0px] after:transition-all after:duration-200 after:h-[2px] after:bg-primaryColor after:hover:w-full"
                  key={e}
                >
                  <a href="#"> {e} </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-6 flex-1">
          <div className="w-6 h-6 relative">
            {/* Check If Cart Have To Render */}
            {cartOpen && <Cart />}
            <span className="absolute top-[-10px] right-[-5px] rounded-full text-white text-sm h-5 w-5 text-center bg-primaryColor">
              {cartState.length}
            </span>
            <img
              src={cartIcon}
              alt="cart"
              className="max-w-full cursor-pointer"
              onClick={() => {
                setCart((prev) => !prev);
              }}
            />
          </div>
          <div className="w-9 h-9">
            <img
              src={avatar}
              alt="avatar"
              className="max-w-full rounded-full transition-all duration-200 border-[0px] border-primaryColor border-solid hover:border-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
