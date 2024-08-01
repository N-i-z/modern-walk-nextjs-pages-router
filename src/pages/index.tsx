import React from "react";
import { FlashSale } from "../ui-core/templates/sections";
import { Categories } from "../ui-core/templates/sections";
import { Heading } from "../ui-core/components";

const Home = () => (
  <div className="home-page">
    <Heading variant="h2">Flash Sale</Heading>
    <FlashSale />
    <Heading variant="h2">Categories</Heading>
    <Categories />
  </div>
);

export default Home;
