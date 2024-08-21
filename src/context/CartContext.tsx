import React, { createContext, useState, useContext, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { CartItemProps, CartContextProps } from "./Context.types";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const [cart, setCart] = useState<CartItemProps[]>([]);

  useEffect(() => {
    const savedCart = user
      ? JSON.parse(localStorage.getItem(`cart_${user.id}`) || "[]")
      : JSON.parse(sessionStorage.getItem("cart") || "[]");

    setCart(savedCart);
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
    } else {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (item: CartItemProps) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getItemQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const increaseCartQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseCartQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const contextValue: CartContextProps = {
    cart,
    addToCart,
    removeFromCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
