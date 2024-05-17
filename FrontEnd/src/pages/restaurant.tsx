import { Discount } from "@/collection/Restaurant/Discount/Discount";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

const restaurant = () => {
  return (
    <main>
      <Layout>
        <Discount />
      </Layout>
    </main>
  );
};

export default restaurant;
