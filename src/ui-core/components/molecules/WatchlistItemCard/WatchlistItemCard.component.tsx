import React from "react";
import "./WatchlistItemCard.component.css";
import { WatchlistItemCardProps } from "./WatchlistItemCard.types";
import WatchlistButton from "../../atoms/Button/WatchlistButton.component";

const WatchlistItemCard: React.FC<WatchlistItemCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
      <div>
        <img className="watchlist-card-image" src={image} alt={title} />
      </div>
      <div className="description">
        <h4>{`Rs ${price}`}</h4>
        <br />
        <div className="button-container">
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
