import React from "react";
import { CartItemCardProps } from "./CartItemCard.types";
import CartButton from "../../atoms/Button/CartButton.component";

const FullCartItemCard: React.FC<CartItemCardProps> = ({
  id,
  title,
  image,
  price,
  quantity,
}) => {
  const totalPrice = price * quantity;

  return (
    <div className="flex justify-between items-center bg-white rounded-3xl w-[120%] h-auto max-w-[1000px] p-6 m-2 shadow-lg">
      <div className="flex ">
        <img
          className="w-24 h-auto object-cover rounded-lg mr-4"
          src={image}
          alt={title}
        />
        <div className="flex flex-col p-7 justify-center items-center">
          <h3 className="text-xl text-black font-bold max-w-[33rem] break-words">
            {title}
          </h3>
          <p className="text-lg text-blue-500 font-bold ">{`Rs ${totalPrice.toFixed(
            2
          )} `}</p>
        </div>
      </div>
      <CartButton
        itemId={id}
        itemName={title}
        itemImage={image}
        itemPrice={price}
      />
    </div>
  );
};

export default FullCartItemCard;
