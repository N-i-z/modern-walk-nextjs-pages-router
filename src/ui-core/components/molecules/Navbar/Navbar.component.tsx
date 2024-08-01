import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../../context/CartContext";
import { Cart } from "../../organisms/CartDrawer";

export const Navbar = () => {
  const { cartQuantity } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="sticky z-50 top-0 w-full h-20 bg-gradient-to-r from-lightWomenBackground to-lightMenBackground flex justify-between items-center shadow-md">
      <div className="mr-0 flex items-center">
        <Link to="/" className="flex items-center">
          <img
            className="mt-1 w-36 h-auto transition-transform duration-300 transform hover:scale-110"
            src="/image/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-end font-bold gap-12 ml-auto lg:text-xl lg:gap-8">
        <Link
          to="/mens-clothing"
          className="text-white text-3xl transition-opacity duration-300 hover:opacity-70"
        >
          Men
        </Link>
        <Link
          to="/womens-clothing"
          className="text-white text-3xl transition-opacity duration-300 hover:opacity-70"
        >
          Women
        </Link>
        <SignedIn>
          <Link
            to="/watchlist"
            className="relative text-white text-3xl transition-opacity duration-300 hover:opacity-70"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </SignedIn>
        <div
          className="relative text-white text-3xl transition-opacity duration-300 hover:opacity-70 mr-4 cursor-pointer"
          onClick={handleCartToggle}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartQuantity > 0 && (
            <div className="absolute top-5 right-[-0.625rem] bg-lightWomenBackground text-white rounded-full p-1 text-xs">
              {cartQuantity > 99 ? "99+" : cartQuantity}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center mr-4 ml-4 h-10">
        <SignedOut>
          <div className="flex items-center justify-center h-8 w-16 bg-transparent border-none rounded-md cursor-pointer font-bold text-white bg-teal-400 hover:bg-teal-600 hover:text-white transition-colors duration-300">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="w-8 h-auto">
            <UserButton />
          </div>
        </SignedIn>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Navbar;
