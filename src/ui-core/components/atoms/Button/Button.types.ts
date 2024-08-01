import { Product } from "../../../../models/Product";

export interface WatchlistButtonProps {
  itemId: Product["id"];
  itemName: Product["title"];
  itemPrice: Product["price"];
  itemImage: Product["image"];
}
