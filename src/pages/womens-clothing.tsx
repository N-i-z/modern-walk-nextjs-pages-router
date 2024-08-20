import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductCard from "../ui-core/components/molecules/ProductCard/ProductCard.component";
import Heading from "../ui-core/components/atoms/Typography/Heading.component";
import { Product } from "../models/Product";

interface ProductsProps {
  products: Product[];
  descriptionBackgroundColor: string;
}

export default function WomensClothing({
  products,
  descriptionBackgroundColor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Women's Clothing</Heading>
      </div>
      <ProductList
        products={products}
        descriptionBackgroundColor={descriptionBackgroundColor}
      />
    </div>
  );
}

const ProductList: React.FC<ProductsProps> = ({
  products,
  descriptionBackgroundColor,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          descriptionBackgroundColor={descriptionBackgroundColor}
          category={product.category}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );

    if (!res.ok) {
      console.error("Failed to fetch products:", res.statusText);
      return {
        notFound: true, // or handle the error as you wish
      };
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Received non-JSON response");
      return {
        notFound: true,
      };
    }

    const products: Product[] = await res.json();

    return {
      props: {
        products,
        descriptionBackgroundColor: "#FF5E84",
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      notFound: true, // or handle the error as you wish
    };
  }
};
