import React from "react";
import Link from "next/link";
import type { CategoryTileProps } from "./CategoryTile.types";
import { Category } from "../../../../enums/category";

const CategoryTile = ({ category, url, className }: CategoryTileProps) => {
  const backgroundColor =
    category === Category.MensClothing
      ? "bg-menBackground hover:bg-menBackgroundHover"
      : "bg-womenBackground hover:bg-womenBackgroundHover";

  return (
    <div
      className={`flex justify-center items-center transition duration-200 ease-in-out transform rounded-[2vw] w-[46vw] h-[30vh] gap-[1vw] ${backgroundColor} ${className} z-20`}
    >
      <Link href={url} className="text-white no-underline text-7xl text-center">
        <b>{category}</b>
      </Link>
    </div>
  );
};

export default CategoryTile;
