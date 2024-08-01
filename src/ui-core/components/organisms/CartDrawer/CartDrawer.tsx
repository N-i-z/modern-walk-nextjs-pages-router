import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { Heading, CartItemCard, Drawer } from "../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faTimes,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [] };
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const navigate = useNavigate();

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  const handleExpand = () => {
    setDrawerOpen(false);
    navigate("/full-cart");
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  //handlecheckout logic

  return (
    <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
      <div className="flex flex-col h-full z-50">
        <div className="sticky-top flex justify-end p-2 ">
          <button
            onClick={handleClose}
            className="bg-red-400 text-gray-800 border-none py-2 px-3 cursor-pointer rounded-lg hover:bg-red-600 text-sm"
          >
            <FontAwesomeIcon icon={faTimes} className="" />
          </button>
          <button
            onClick={handleExpand}
            className="bg-gray-300 text-white border-none py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-500 text-sm ml-2"
          >
            <FontAwesomeIcon icon={faExpand} className="" />
          </button>
        </div>
        <Heading variant="h2">Your Cart</Heading>
        <div className="flex-1 flex flex-col items-center overflow-y-auto">
          {cart.length === 0 ? (
            <h3 className="mt-8 text-center">Your cart is empty</h3>
          ) : (
            <div className="flex flex-col items-center w-full gap-2 mt-3">
              {cart.map((item) => (
                <div key={item.id} className="w-full max-w-[30rem]">
                  <CartItemCard
                    id={item.id}
                    title={item.name}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-white p-3 border-t border-gray-300 flex justify-center gap-4 items-center shadow-md">
            <p className="text-base font-bold">
              Total Price: Rs {total.toFixed(2)}
            </p>
            <button
              onClick={clearCart}
              className="bg-womenBackground text-white border-none py-2 px-3 cursor-pointer rounded-lg hover:bg-womenBackgroundHover text-sm"
            >
              Clear Cart
            </button>

            <button
              // onClick={handleCheckout}
              className="bg-menBackground text-white border-none py-2 px-3 cursor-pointer rounded-lg hover:bg-menBackgroundHover text-sm"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              Checkout
            </button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default Cart;
