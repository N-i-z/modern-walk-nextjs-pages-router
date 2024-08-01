import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.component.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../../context/CartContext";

export const Navbar = () => {
  const { cartQuantity } = useCart();

  return (
    <div className="navbar">
      <div className="homelink">
        <Link to="/" className="logo-container">
          <img className="logo" src="/image/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="pagelink">
        <Link to="/mens-clothing">Men</Link>
        <Link to="/womens-clothing">Women</Link>
        <SignedIn>
          <Link to="/watchlist" className="watchlist-icon">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </SignedIn>
        <SignedIn>
          <Link to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartQuantity > 0 && (
              <div className="cart-badge">
                {cartQuantity > 99 ? "99+" : cartQuantity}
              </div>
            )}
          </Link>
        </SignedIn>
      </div>
      <div className="auth-buttons">
        <SignedOut>
          <div className="sign-in-button">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
