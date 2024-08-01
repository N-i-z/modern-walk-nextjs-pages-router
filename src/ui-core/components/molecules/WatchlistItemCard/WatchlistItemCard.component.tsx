import React from "react";
import { WatchlistItemCardProps } from "./WatchlistItemCard.types";
import WatchlistButton from "../../atoms/Button/WatchlistButton.component";

const WatchlistItemCard: React.FC<WatchlistItemCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  return (
    <div className="card bg-white rounded-[50px] w-[420px] h-[550px] max-w-[800px] m-2 mb-12 flex flex-col justify-between items-center shadow-lg overflow-hidden">
      <div className="card-title max-w-xs mx-12 mt-6 text-center">
        <h3 className="text-center text-2xl font-bold text-gray-900 truncate">
          {title}
        </h3>
      </div>
      <div>
        <img
          className="w-auto h-[30vh] transition-transform duration-300 ease-in-out m-5 hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="description">
        <h4 className="text-blue-600 text-2xl font-bold text-center m-0">{`Rs ${price}`}</h4>
        <br />
        <div className="button-container flex justify-center">
          <WatchlistButton
            itemId={id}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchlistItemCard;
