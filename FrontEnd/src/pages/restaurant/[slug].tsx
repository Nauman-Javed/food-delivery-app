import { Hero, FoodItems } from "@/collection/Restaurant";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(context: any) {
  const { slug } = context.params;

  return {
    props: { slug },
  };
}

const restaurant = ({ slug }: any) => {
  return (
    <main>
      <Layout>
        <Hero slug={slug} />
        <FoodItems slug={slug} />
      </Layout>
    </main>
  );
};

export default restaurant;
