import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Heading } from "../../components";
import "./index.css";
import { CartItemCard } from "../../components";

const Cart: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [] };

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <Heading variant="h2">Your Cart</Heading>
      <div className="cart-container">
        {cart.length === 0 ? (
          <h3 className="empty-message">Your cart is empty</h3>
        ) : (
          <div className="cart-item-container">
            {cart.map((item) => (
              <CartItemCard
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-footer">
          <hr />
          <p className="total-price">Total Price: Rs {total.toFixed(2)}</p>
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
