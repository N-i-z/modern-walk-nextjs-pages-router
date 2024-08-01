import React from "react";
import "./ProductCard.component.css";
import { Category } from "../../../../enums/category";
import { ProductCardProps } from "./ProductCard.types";
import WatchlistButton from "../../atoms/Button/WatchlistButton.component";
import CartButton from "../../atoms/Button/CartButton.component";

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
        <div className="button-container">
          <WatchlistButton
            itemId={title}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
          <CartButton
            itemId={title}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
