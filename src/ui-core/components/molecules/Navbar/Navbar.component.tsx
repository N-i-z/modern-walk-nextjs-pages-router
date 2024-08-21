import React, { useContext } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ShoppingCart, Eye, X, Expand } from "lucide-react";
import { CartContext, useCart } from "../../../../context/CartContext";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../organisms/Drawer/drawer";
import { Button } from "../../atoms/Button/button";
import { CartItemCard } from "../CartItemCard";
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
} from "../AlertDialog/alert-dialog";
import { ScrollArea, ScrollBar } from "../../atoms/ScrollArea/scroll-area";
import Image from "next/image";

export const Navbar = () => {
  const { cart, cartQuantity } = useCart();
  const { clearCart } = useContext(CartContext) || { cart: [] };

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="sticky z-50 top-0 w-full h-20 bg-gradient-to-r from-lightWomenBackground to-lightMenBackground flex justify-between items-center shadow-md">
      <div className="mr-0 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="logo"
            width={140}
            height={140}
            className="mt-1 transition-transform duration-300 transform hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex items-end font-bold gap-12 ml-auto lg:text-xl lg:gap-8">
        <Link
          href="/components"
          className="text-white text-3xl transition-opacity duration-300 hover:opacity-70"
        >
          Components
        </Link>
        <Link
          href="/mens-clothing"
          className="text-white text-3xl transition-opacity duration-300 hover:opacity-70"
        >
          Men
        </Link>
        <Link
          href="/womens-clothing"
          className="text-white text-3xl transition-opacity duration-300 hover:opacity-70"
        >
          Women
        </Link>
        <SignedIn>
          <Link
            href="/watchlist"
            className="relative text-white text-3xl transition-opacity duration-300 hover:opacity-70"
          >
            <Eye size={44} />
          </Link>
        </SignedIn>

        <div>
          <Drawer>
            <DrawerTrigger className="relative top-2 text-white transition-opacity duration-300 hover:opacity-70 cursor-pointer mr-3">
              <ShoppingCart size={42} />
              {cartQuantity > 0 && (
                <div className="absolute top-5 right-[-0.625rem] bg-lightWomenBackground text-white rounded-full p-1 text-xs">
                  {cartQuantity > 99 ? "99+" : cartQuantity}
                </div>
              )}
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="ml-5">Your Cart</DrawerTitle>
                <DrawerClose asChild>
                  <Link href="/fullcart">
                    <Button
                      variant="card"
                      size="icon"
                      className="bg-transparent absolute top-4 right-20 hover:bg-slate-300 "
                    >
                      <Expand size="20" />
                    </Button>
                  </Link>
                </DrawerClose>

                <DrawerClose>
                  <Button
                    variant="secondaryDanger"
                    size="icon"
                    className="absolute top-4 right-8 bg-likeWhite hover:bg-dangerRed"
                  >
                    <X className="text-main" />
                  </Button>
                </DrawerClose>
                <ScrollArea className="h-[990px] w-[610px] rounded-md border-none">
                  <DrawerDescription>
                    <div className="flex-1 grid place-items-center overflow-y-auto">
                      {cart.length === 0 ? (
                        <h3 className="mt-8 text-center">Your cart is empty</h3>
                      ) : (
                        <div className="grid items-center w-full ml-5 gap-2 mt-4 mb-24">
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
                  </DrawerDescription>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </DrawerHeader>
              <DrawerFooter>
                <p className="text-base font-bold mr-4">
                  Total Price: Rs {total.toFixed(2)}
                </p>
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="primaryDanger">Clear Cart</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to clear your cart? This action
                          will remove all items from your cart and cannot be
                          undone.
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

                <Button
                  variant="secondary"
                  // onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="flex items-center mr-4 ml-4 h-10">
        <SignedOut>
          <div className="flex items-center justify-center h-8 w-16 bg-transparent border-none rounded-md cursor-pointer font-bold text-white bg-teal-400 hover:bg-teal-600 hover:text-white transition-colors duration-300">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="w-8 h-auto">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
