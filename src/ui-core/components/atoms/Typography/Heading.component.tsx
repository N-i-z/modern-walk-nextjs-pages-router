import React from "react";
import { HeadingProps } from "./Heading.types";

const Heading: React.FC<HeadingProps> = ({ variant, children }) => {
  switch (variant) {
    case "h1":
      return <h1 className="font-bold text-likeblack">{children}</h1>;
    case "h2":
      return (
        <h2 className="mt-12 text-3xl text-left ml-12 mb-12 font-bold text-likeblack">
          {children}
        </h2>
      );
    case "h3":
      return <h3 className="font-bold text-likeblack">{children}</h3>;
    case "h4":
      return <h4 className="font-bold text-likeblack">{children}</h4>;
    default:
      return <h1 className="font-bold text-likeblack">{children}</h1>;
  }
};

export default Heading;
