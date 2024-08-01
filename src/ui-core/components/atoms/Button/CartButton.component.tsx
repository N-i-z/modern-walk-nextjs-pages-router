import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import useCart from "../../../../hooks/useCart";
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
    // isSignedIn,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart(itemId, itemName, itemPrice, itemImage);

  return (
    <div className="flex justify-center items-center gap-4 mt-2 mb-4">
      {isInCart ? (
        <div className="flex items-center">
          <button
            onClick={() => decreaseCartQuantity(itemId)}
            className="h-12 w-12 flex items-center justify-center bg-white text-black border-none rounded cursor-pointer hover:bg-gray-300 "
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="pb-1 ml-4 mr-4">{cartQuantity}</span>
          <button
            onClick={() => increaseCartQuantity(itemId)}
            className="h-12 w-12 flex items-center justify-center bg-white text-black border-none rounded cursor-pointer hover:bg-gray-300 "
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => removeFromCart(itemId)}
            className="pb-1 h-12 w-12 ml-2 bg-none text-black border-none rounded cursor-pointer hover:animate-vibrate"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleCartToggle}
          // disabled={!isSignedIn}
          className={`h-12 w-12 flex items-center justify-center border-none rounded cursor-pointer transition-colors hover:bg-gray-300 ${
            isInCart ? "bg-gray-400 text-black" : "bg-white text-black"
          }`}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      )}
    </div>
  );
};

export default CartButton;
