import { Hero, Ordering, PopularRestaurant, Testimonial } from "@/collection";
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        <PopularRestaurant />
        <Ordering />
        <Testimonial />
      </Layout>
    </main>
  );
}
