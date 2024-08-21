import React from "react";
import type { LoadingProps } from "./Loading.types";

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="w-100 flex justify-center items-center h-20 bg-#f5f5f5 text-7xl font[#333] font-bold">
      <h1>{message}</h1>
    </div>
  );
};

export default Loading;
