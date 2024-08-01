import React from "react";
import CategoryTile from "../../../components/atoms/CategoryTile/CategoryTile.component.tsx";
import { Category } from "../../../../enums/category.ts";

const Categories: React.FC = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex gap-12">
        <CategoryTile
          className="men-background"
          category={Category.MensClothing}
          url="/mens-clothing"
        />
        <CategoryTile
          className="women-background"
          category={Category.WomensClothing}
          url="/womens-clothing"
        />
      </div>
    </div>
  );
};

export default Categories;
