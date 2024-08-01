import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../../components/molecules/ProductCard/ProductCard.component.tsx";
import Loading from "../../../components/atoms/Loading/Loading.component.tsx";
import { Product } from "../../../../models/Product.tsx";
import { Category } from "../../../../enums/category.ts";

const FlashSale: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [MensClothing, setMensCloting] = useState<Product[]>([]);
  const [WomensClothing, setWomensClothing] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get("https://fakestoreapi.com/products/category/men's clothing"),
        axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        ),
      ])
      .then(
        axios.spread((menRes, womenRes) => {
          const MensClothing: Product[] = menRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: Category.MensClothing,
            }));
          const WomensClothing: Product[] = womenRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: Category.WomensClothing,
            }));
          setMensCloting(MensClothing);
          setWomensClothing(WomensClothing);
        })
      )
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderAlternateProducts = () => {
    const alternateProducts: Product[] = [];
    const maxLength = Math.max(MensClothing.length, WomensClothing.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < MensClothing.length) {
        alternateProducts.push(MensClothing[i]);
      }
      if (i < WomensClothing.length) {
        alternateProducts.push(WomensClothing[i]);
      }
    }
    return alternateProducts;
  };

  return (
    <div className="flex items-center justify-center min-h-[600px]">
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1vw] ml-[0.75vw] -mt-[7px]">
          {renderAlternateProducts().map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
              descriptionBackgroundColor={
                product.category === Category.MensClothing
                  ? "#2BD9AF"
                  : "#FF5E84"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashSale;
