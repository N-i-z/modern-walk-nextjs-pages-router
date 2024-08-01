import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import useCart from "../../../../hooks/useCart";
import "./Button.component.css";
import { CartButtonProps } from "./Button.types";

const CartButton: React.FC<CartButtonProps> = ({
  itemId,
  itemName,
  itemImage,
  itemPrice,
}) => {
  const {
    isInCart,
    handleCartToggle,
    isSignedIn,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart(itemId, itemName, itemPrice, itemImage);

  return (
    <div className="cart-button-container">
      {isInCart ? (
        <div className="quantity-controls">
          <button
            onClick={() => decreaseCartQuantity(itemId)}
            className="quantity-button"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="quantity">{cartQuantity}</span>
          <button
            onClick={() => increaseCartQuantity(itemId)}
            className="quantity-button"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => removeFromCart(itemId)}
            className="remove-button"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleCartToggle}
          disabled={!isSignedIn}
          className={`cart-button ${isInCart ? "in-cart" : ""}`}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      )}
    </div>
  );
};

export default CartButton;
