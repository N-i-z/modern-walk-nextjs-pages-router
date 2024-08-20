import React from "react";
import ProductCard from "../ui-core/components/molecules/ProductCard/ProductCard.component";
import Heading from "../ui-core/components/atoms/Typography/Heading.component";
import Loading from "../ui-core/components/atoms/Loading/Loading.component";
import { GetServerSideProps } from "next";
import { Product } from "../models/Product";

interface MensClothingProps {
  products: Product[];
}

export default function MensClothing({ products }: MensClothingProps) {
  if (!products) {
    return <Loading message="Loading..." />;
  }

  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Men's Clothing</Heading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            descriptionBackgroundColor="#2BD9AF"
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const products: Product[] = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};
