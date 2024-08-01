import React from "react";
import { CartItemCardProps } from "./CartItemCard.types";
import useCart from "../../../../hooks/useCart";
import { Button } from "../../atoms/Button/button";
import { ChevronDown, ChevronUp, ShoppingCart, Trash } from "lucide-react";

const FullCartItemCard: React.FC<CartItemCardProps> = ({
  id,
  title,
  image,
  price,
  quantity,
}) => {
  const {
    isInCart,
    handleCartToggle,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart(id, title, price, image);

  const totalPrice = price * quantity;

  return (
    <div className="flex justify-between items-center bg-white rounded-3xl w-[120%] h-auto max-w-[1000px] p-6 m-2 shadow-boxNormal hover:shadow-boxHover">
      <div className="flex ">
        <img
          className="w-24 object-cover rounded-lg mr-4"
          src={image}
          alt={title}
        />
        <div className=" p-7 justify-center items-center ml-[3rem]">
          <h3 className="text-xl text-black font-bold max-w-[25rem] break-words truncate text-justify">
            {title}
          </h3>
          <p className="text-lg text-blue-500 font-bold text-justify">{`Rs ${totalPrice.toFixed(
            2
          )} `}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-2 mb-4">
        {isInCart ? (
          <div className="flex items-center">
            <Button
              variant="card"
              size="icon"
              onClick={() => decreaseCartQuantity(id)}
            >
              <ChevronDown />
            </Button>
            <span className="pb-1 ml-4 mr-4">{cartQuantity}</span>
            <Button
              variant="card"
              size="icon"
              onClick={() => increaseCartQuantity(id)}
            >
              <ChevronUp />
            </Button>
            <Button
              variant="card"
              size="icon"
              onClick={() => removeFromCart(id)}
              className="bg-transparent hover:bg-transparent hover:animate-vibrate"
            >
              <Trash className="text-likeblack" />
            </Button>
          </div>
        ) : (
          <Button variant="card" size="icon" onClick={handleCartToggle}>
            <ShoppingCart />
          </Button>
        )}
      </div>
    </div>
  );
};

export default FullCartItemCard;
