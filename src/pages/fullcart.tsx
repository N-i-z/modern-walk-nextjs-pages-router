import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Heading } from "../ui-core/components";
import { FullCartItemCard } from "../ui-core/components";
import { Button } from "../ui-core/components/atoms/Button/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui-core/components/molecules/AlertDialog/alert-dialog";

const FullCart: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [] };

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Heading variant="h2">Your Cart</Heading>
      <div className="flex flex-1 flex-col items-center">
        {cart.length === 0 ? (
          <h3 className="flex items-start mt-8 text-center">
            Your cart is empty
          </h3>
        ) : (
          <div className="flex flex-col items-center w-full gap-6 mt-5">
            {cart.map((item) => (
              <div className="w-full max-w-3xl">
                <FullCartItemCard
                  key={item.id}
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
        <div className="bg-white p-5 border-t border-gray-300 sticky bottom-0 flex justify-center gap-3 items-center shadow-md">
          <p className="text-lg font-bold mr-2">
            Total Price: Rs {total.toFixed(2)}
          </p>
          <div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="primaryDanger">Clear Cart</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to clear your cart? This action will
                    remove all items from your cart and cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>
                    <Button onClick={clearCart}>Continue</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <Button variant="secondary">Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default FullCart;
