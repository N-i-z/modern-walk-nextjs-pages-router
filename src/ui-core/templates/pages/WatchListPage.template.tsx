import React, { useContext } from "react";
import { WatchlistContext } from "../../../context/WatchListContext";
import { Heading } from "../../components";
import { WatchlistItemCard } from "../../components";

const Watchlist: React.FC = () => {
  const { watchlist } = useContext(WatchlistContext) || { watchlist: [] };

  return (
    <div>
      <Heading variant="h2">Your Watchlist</Heading>
      <div className="flex flex-1 items-start pl-8">
        {watchlist.length === 0 ? (
          <h3 className="mt-8 text-center flex items-start pl-[40vw]">
            Your watchlist is empty
          </h3>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-0">
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
