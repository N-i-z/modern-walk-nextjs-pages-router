import React from "react";
import { ProductCardProps } from "./ProductCard.types";
import { Button } from "../../atoms/Button/button";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  ShoppingCart,
  Trash,
} from "lucide-react";
import useWatchlist from "../../../../hooks/usewatchlist";
import useCart from "../../../../hooks/useCart";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
  descriptionBackgroundColor,
}: ProductCardProps) => {
  const router = useRouter();

  const { isInWatchlist, handleWatchlistToggle, isSignedIn } = useWatchlist(
    id, // itemId
    title, // itemName
    price,
    image
  );

  const {
    isInCart,
    handleCartToggle,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart(id, title, price, image);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the click is on a button or any of its child elements
    if (
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest(".button-container")
    ) {
      return;
    }
    // Navigate to the product page if the click is not on a button
    router.push(`/${id}`);
  };

  return (
    <div
      className="card bg-white rounded-[50px] w-[420px] h-[550px] max-w-[800px] m-2 mb-12 flex flex-col justify-between items-center shadow-lg overflow-hidden relative z-10 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="card-title max-w-xs mx-12 mt-6 text-center truncate">
        <h3 className="text-2xl text-black font-bold truncate">{title}</h3>
      </div>
      <div>
        <Image
          className="card-image transition-transform duration-300 ease-in-out m-5 object-cover hover:scale-110"
          src={image}
          alt={title}
          height={100}
          width={120}
          layout="fixed"
        />
      </div>
      <div
        className={`card-description w-full h-[250px] p-5 rounded-t-[40px] flex flex-col items-center relative`}
        style={{ backgroundColor: descriptionBackgroundColor }}
      >
        <h4 className="text-priceBlue font-bold text-3xl m-0">{`Rs ${price}`}</h4>
        <br />
        <p className="text-[16px] leading-6 text-center line-clamp-3 mx-8">
          {description}
        </p>
        <div className="button-container flex justify-center items-center gap-4 absolute bottom-2">
          <Button
            variant="card"
            size="icon"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from propagating to the link
              handleWatchlistToggle();
            }}
            disabled={!isSignedIn}
            className={` mb-2 ${
              isInWatchlist ? "bg-gray-400 text-black" : "bg-white text-black"
            }`}
          >
            {isInWatchlist ? <EyeOff size={24} /> : <Eye size={24} />}
          </Button>
          <div className="flex justify-center items-center gap-4 mt-2 mb-4">
            {isInCart ? (
              <div className="flex items-center">
                <Button
                  variant="card"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to the link
                    decreaseCartQuantity(id);
                  }}
                >
                  <ChevronDown />
                </Button>
                <span className="pb-1 ml-4 mr-4">{cartQuantity}</span>
                <Button
                  variant="card"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to the link
                    increaseCartQuantity(id);
                  }}
                >
                  <ChevronUp />
                </Button>
                <Button
                  variant="card"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to the link
                    removeFromCart(id);
                  }}
                  className="bg-transparent hover:bg-transparent hover:animate-vibrate"
                >
                  <Trash className="text-likeblack" />
                </Button>
              </div>
            ) : (
              <Button
                variant="card"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event from propagating to the link
                  handleCartToggle();
                }}
              >
                <ShoppingCart />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
