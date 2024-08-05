import React from "react";
import { WatchlistItemCardProps } from "./WatchlistItemCard.types";
import { Button } from "../../atoms/Button/button";
import { Eye, EyeOff } from "lucide-react";
import useWatchlist from "../../../../hooks/usewatchlist";
import Image from "next/image";

const WatchlistItemCard: React.FC<WatchlistItemCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  const { isInWatchlist, handleWatchlistToggle, isSignedIn } = useWatchlist(
    title, // itemId
    title, // itemName
    price, // itemPrice
    image // itemImage
  );

  return (
    <div className="card bg-white rounded-[50px] w-[420px] h-[550px] max-w-[800px] m-2 mb-12 flex flex-col justify-between items-center shadow-lg overflow-hidden">
      <div className="card-title max-w-xs mx-12 mt-6 text-center">
        <h3 className="text-center text-2xl font-bold text-gray-900 truncate">
          {title}
        </h3>
      </div>
      <div>
        <Image
          className=" transition-transform duration-300 ease-in-out m-5 hover:scale-110"
          src={image}
          alt={title}
          height={400}
          width={200}
          layout="fixed"
        />
      </div>
      <div className="description">
        <h4 className="text-blue-600 text-2xl font-bold text-center m-0">{`Rs ${price}`}</h4>
        <br />
        <div className="button-container flex justify-center">
          <Button
            variant="card"
            size="icon"
            onClick={handleWatchlistToggle}
            disabled={!isSignedIn}
            className={` mb-2 ${
              isInWatchlist ? "bg-gray-400 text-black" : "bg-white text-black"
            }`}
          >
            {isInWatchlist ? <EyeOff size={24} /> : <Eye size={24} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistItemCard;
