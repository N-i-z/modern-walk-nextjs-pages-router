import React from "react";
import { ProductCardProps } from "./ProductCard.types";
import WatchlistButton from "../../atoms/Button/WatchlistButton.component";
import CartButton from "../../atoms/Button/CartButton.component";

const ProductCard = ({
  title,
  image,
  price,
  description,
  category,
  descriptionBackgroundColor,
}: ProductCardProps) => {
  return (
    <div className="card bg-white rounded-[50px] w-[420px] h-[550px] max-w-[800px] m-2 mb-12 flex flex-col justify-between items-center shadow-lg overflow-hidden relative z-10">
      <div className="card-title max-w-xs mx-12 mt-6 text-center truncate">
        <h3 className="text-2xl text-black font-bold truncate">{title}</h3>
      </div>
      <div>
        <img
          className="card-image w-auto h-[190px] transition-transform duration-300 ease-in-out m-5 object-cover hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div
        className={`card-description w-full h-[250px] p-5 rounded-t-[40px] flex flex-col items-center relative`}
        style={{ backgroundColor: descriptionBackgroundColor }}
      >
        <h4 className="text-bluep font-bold text-3xl m-0">{`Rs ${price}`}</h4>
        <br />
        <p className="text-[16px] leading-6 text-center line-clamp-3 mx-8">
          {description}
        </p>
        <div className="button-container flex justify-center items-center gap-4 absolute bottom-2">
          <WatchlistButton
            itemId={title}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
          <CartButton
            itemId={title}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
