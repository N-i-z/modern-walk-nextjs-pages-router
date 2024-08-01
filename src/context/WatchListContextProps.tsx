import { Product } from "../models/Product";

export interface WatchlistItemProps {
  id: Product["id"];
  name: Product["title"];
  image: Product["image"];
  price: Product["price"];
}

export interface WatchlistContextProps {
  watchlist: WatchlistItemProps[];
  addToWatchlist: (item: WatchlistItemProps) => void;
  removeFromWatchlist: (id: string) => void;
}
