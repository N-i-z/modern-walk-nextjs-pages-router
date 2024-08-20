import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "../models/Product";
import Heading from "../ui-core/components/atoms/Typography/Heading.component";
import Image from "next/image";
import { Button } from "../ui-core/components/atoms/Button/button";
import useCart from "../hooks/useCart";
import useWatchlist from "../hooks/usewatchlist";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  ShoppingCart,
  Trash,
} from "lucide-react";

// Fetch all product IDs to generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const products: Product[] = await res.json();

    // Map product IDs to paths
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return {
      paths,
      fallback: false, // Set to 'blocking' or 'true' for ISR
    };
  } catch (error) {
    console.error("Failed to fetch product paths:", error);
    return {
      paths: [],
      fallback: false, // or 'blocking' depending on your needs
    };
  }
};

// Fetch product data based on ID for static generation
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const product: Product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(`Failed to fetch product with id ${params?.id}:`, error);
    return {
      notFound: true, // Return 404 page if there is an error
    };
  }
};

interface ProductPageProps {
  product: Product;
}

// Render the product details page
const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const { isInWatchlist, handleWatchlistToggle, isSignedIn } = useWatchlist(
    product.id, // itemId
    product.title, // itemName
    product.price,
    product.image
  );

  const {
    isInCart,
    handleCartToggle,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart(product.id, product.title, product.price, product.image);

  return (
    <>
      <div className="max-w-[75vw] truncate">
        <Heading variant="h2">{product.title}</Heading>
      </div>
      <div className="px-32 flex">
        <Image
          src={product.image}
          alt={product.title}
          height={500}
          width={350}
          layout="fixed"
        />
        <span className="px-32 py-10">
          <h4 className="text-priceBlue font-bold text-2xl mb-4">
            {product.price}
          </h4>
          <p className="text-lg">{product.description}</p>
          <div className="button-container flex items-center gap-4 mt-4">
            <Button
              variant="card"
              size="icon"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from propagating to the link
                handleWatchlistToggle();
              }}
              disabled={!isSignedIn}
              className={` mb-2 ${
                isInWatchlist ? "bg-gray-400 text-black" : "bg-white text-black"
              }`}
            >
              {isInWatchlist ? <EyeOff size={24} /> : <Eye size={24} />}
            </Button>
            <div className="flex justify-center items-center gap-4 mt-2 mb-4">
              {isInCart ? (
                <div className="flex items-center">
                  <Button
                    variant="card"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to the link
                      decreaseCartQuantity(product.id);
                    }}
                  >
                    <ChevronDown />
                  </Button>
                  <span className="pb-1 ml-4 mr-4">{cartQuantity}</span>
                  <Button
                    variant="card"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to the link
                      increaseCartQuantity(product.id);
                    }}
                  >
                    <ChevronUp />
                  </Button>
                  <Button
                    variant="card"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to the link
                      removeFromCart(product.id);
                    }}
                    className="bg-transparent hover:bg-transparent hover:animate-vibrate"
                  >
                    <Trash className="text-likeblack" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="card"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to the link
                    handleCartToggle();
                  }}
                >
                  <ShoppingCart />
                </Button>
              )}
            </div>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProductPage;
