import React from "react";
import ProductCard from "../../components/molecules/ProductCard/ProductCard.component.tsx";
import Heading from "../../components/atoms/Typography/Heading.component.tsx";
import useFetchProducts from "../../../hooks/useFetchProducts.ts";
import Loading from "../../components/atoms/Loading/Loading.component.tsx";
import { ProductListProps, ProductsProps } from "./template.types.tsx";

export function WomensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Women's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/women's clothing"
        descriptionBackgroundColor="#FF5E84"
      />
    </div>
  );
}

export function MensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Men's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/men's clothing"
        descriptionBackgroundColor="#2BD9AF"
      />
    </div>
  );
}

const Products: React.FC<ProductsProps> = ({
  url,
  descriptionBackgroundColor,
}) => {
  const { loading, data } = useFetchProducts(url);

  return (
    <div>
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        <ProductList
          products={data || []}
          descriptionBackgroundColor={descriptionBackgroundColor}
        />
      )}
    </div>
  );
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  descriptionBackgroundColor,
}) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
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

export default ProductList;
