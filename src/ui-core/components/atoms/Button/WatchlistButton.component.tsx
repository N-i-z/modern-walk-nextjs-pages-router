import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useWatchlist from "../../../../hooks/usewatchlist";
import { WatchlistButtonProps } from "./Button.types";

const WatchlistButton: React.FC<WatchlistButtonProps> = ({
  itemId,
  itemName,
  itemImage,
  itemPrice,
}) => {
  const { isInWatchlist, handleWatchlistToggle, isSignedIn } = useWatchlist(
    itemId,
    itemName,
    itemPrice,
    itemImage
  );

  return (
    <button
      onClick={handleWatchlistToggle}
      disabled={!isSignedIn}
      className={` mb-2 h-12 w-12 flex items-center justify-center border-none rounded cursor-pointer transition-colors hover:bg-gray-300 ${
        isInWatchlist ? "bg-gray-400 text-black" : "bg-white text-black"
      }`}
    >
      <FontAwesomeIcon icon={isInWatchlist ? faEyeSlash : faEye} />
    </button>
  );
};

export default WatchlistButton;
