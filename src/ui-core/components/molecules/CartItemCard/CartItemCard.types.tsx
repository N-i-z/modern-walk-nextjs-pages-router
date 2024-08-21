import { Product } from "../../../../models/Product";

export interface CartItemCardProps {
  id: Product["id"];
  title: Product["title"];
  image: Product["image"];
  price: Product["price"];
  quantity: number;
}
