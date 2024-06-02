import { Hero, FoodItems } from "@/collection/Restaurant";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

const restaurant = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <FoodItems />
      </Layout>
    </main>
  );
};

export default restaurant;
