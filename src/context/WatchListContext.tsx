import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { WatchlistContextProps, WatchlistItemProps } from "./Context.types";
import { useUser } from "@clerk/clerk-react";

export const WatchlistContext = createContext<
  WatchlistContextProps | undefined
>(undefined);

export const WatchlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [watchlist, setWatchlist] = useState<WatchlistItemProps[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const savedWatchlist = localStorage.getItem(`watchlist_${user.id}`);
      if (savedWatchlist) {
        setWatchlist(JSON.parse(savedWatchlist));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`watchlist_${user.id}`, JSON.stringify(watchlist));
    }
  }, [watchlist, user]);

  const addToWatchlist = (item: WatchlistItemProps) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, item]);
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((item) => item.id !== id)
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = (): WatchlistContextProps => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
};
