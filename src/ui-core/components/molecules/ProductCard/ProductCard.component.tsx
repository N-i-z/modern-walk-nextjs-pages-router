import React from "react";
import "./ProductCard.component.css";
import { Category } from "../../../../enums/category.ts";
import { ProductCardProps } from "./ProductCard.types.tsx";
import WatchlistButton from "../../atoms/Button/WatchlistButton.component.tsx";
const ProductCard = ({
  title,
  image,
  price,
  description,
  category,
  descriptionBackgroundColor,
}: ProductCardProps) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
      <div>
        <img className="card-image" src={image} alt={title} />
      </div>
      <div
        className={`card-description ${
          category === Category.MensClothing
            ? "men-background"
            : "women-background"
        }`}
        style={{ backgroundColor: descriptionBackgroundColor }}
      >
        <h4>{`Rs ${price}`}</h4>
        <br />
        <p>{description}</p>
        <WatchlistButton
          itemId={title}
          itemName={title}
          itemImage={image}
          itemPrice={price}
        />
      </div>
    </div>
  );
};

export default ProductCard;
