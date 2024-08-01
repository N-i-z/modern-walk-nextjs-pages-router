import { useContext, useEffect, useState } from "react";
import { WatchlistContext } from "../context/WatchListContext";
import { useUser } from "@clerk/clerk-react";
import { WatchlistItemProps } from "../context/WatchListContextProps";

const useWatchlist = (
  itemId: string,
  itemName: string,
  itemPrice: number,
  itemImage: string
) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(
    WatchlistContext
  ) || {
    watchlist: [],
    addToWatchlist: (item: WatchlistItemProps) => {},
    removeFromWatchlist: (id: string) => {},
  };
  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setIsInWatchlist(watchlist.some((item) => item.id === itemId));
  }, [watchlist, itemId]);

  const handleWatchlistToggle = () => {
    if (!isSignedIn) return;

    if (isInWatchlist) {
      removeFromWatchlist(itemId);
    } else {
      addToWatchlist({
        id: itemId,
        name: itemName,
        price: itemPrice,
        image: itemImage,
      });
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return { isInWatchlist, handleWatchlistToggle, isSignedIn };
};

export default useWatchlist;
