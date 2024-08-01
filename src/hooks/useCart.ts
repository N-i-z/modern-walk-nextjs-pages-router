import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useUser } from "@clerk/nextjs";
import { CartItemProps } from "../context/Context.types";

const useCart = (
  itemId: string,
  itemName: string,
  itemPrice: number,
  itemImage: string
) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CartContext) || {
    cart: [],
    addToCart: (item: CartItemProps) => {},
    removeFromCart: (id: string) => {},
    getItemQuantity: (id: string) => 0,
    increaseCartQuantity: (id: string) => {},
    decreaseCartQuantity: (id: string) => {},
  };
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setIsInCart(cart.some((item) => item.id === itemId));
  }, [cart, itemId]);

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(itemId);
    } else {
      addToCart({
        id: itemId,
        name: itemName,
        price: itemPrice,
        image: itemImage,
        quantity: 1,
      });
    }
    setIsInCart(!isInCart);
  };

  const cartQuantity = isInCart ? getItemQuantity(itemId) : 0;

  return {
    isInCart,
    handleCartToggle,
    isSignedIn,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  };
};

export default useCart;
