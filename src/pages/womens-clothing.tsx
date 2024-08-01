import React from "react";
import ProductCard from "../ui-core/components/molecules/ProductCard/ProductCard.component";
import Heading from "../ui-core/components/atoms/Typography/Heading.component";
import useFetchProducts from "../hooks/useFetchProducts";
import Loading from "../ui-core/components/atoms/Loading/Loading.component";
import { Product } from "../models/Product";

interface ProductsProps {
  url: string;
  descriptionBackgroundColor: string;
}

interface ProductListProps {
  products: Product[];
  descriptionBackgroundColor: string;
}

export default function WomensClothing() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
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
