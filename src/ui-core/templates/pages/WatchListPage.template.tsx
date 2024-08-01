import React, { useContext } from "react";
import { WatchlistContext } from "../../../context/WatchListContext";
import { Heading } from "../../components";
import "./index.css";
import { WatchlistItemCard } from "../../components";

const Watchlist: React.FC = () => {
  const { watchlist } = useContext(WatchlistContext) || { watchlist: [] };

  return (
    <div>
      <Heading variant="h2">My Watchlist</Heading>
      <div className="watchlist-container">
        {watchlist.length === 0 ? (
          <h3 className="empty-message">Your watchlist is empty</h3>
        ) : (
          <div className="watchlist-item-container">
            {watchlist.map((item) => (
              <WatchlistItemCard
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
