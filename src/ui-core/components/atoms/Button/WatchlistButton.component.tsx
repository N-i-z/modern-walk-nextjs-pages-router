import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useWatchlist from "../../../../hooks/usewatchlist";
import "./Button.component.css";
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
      className={`watchlist-button ${isInWatchlist ? "in-watchlist" : ""}`}
    >
      <FontAwesomeIcon icon={isInWatchlist ? faEyeSlash : faEye} />
    </button>
  );
};

export default WatchlistButton;
