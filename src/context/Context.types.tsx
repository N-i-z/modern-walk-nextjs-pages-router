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

export interface CartItemProps {
  id: Product["id"];
  name: Product["title"];
  image: Product["image"];
  price: Product["price"];
  quantity: number;
}

export interface CartContextProps {
  cart: CartItemProps[];
  addToCart: (item: CartItemProps) => void;
  removeFromCart: (id: string) => void;
  getItemQuantity: (id: Product["id"]) => number;
  increaseCartQuantity: (id: Product["id"]) => void;
  decreaseCartQuantity: (id: Product["id"]) => void;
  cartQuantity: number;
  clearCart: () => void;
}

export interface DrawerContextProps {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
