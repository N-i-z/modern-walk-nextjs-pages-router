import { Category } from "../../../../enums/category";

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category.MensClothing | Category.WomensClothing;
  descriptionBackgroundColor: string;
}
