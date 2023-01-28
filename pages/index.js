import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "./layout";
import Product from "./product";
import { getAllProductsDb } from "./api/products";
import ProductCard from "@/components/productcard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ isSuccess, products }) {
  return (
    <Layout>
      <section id="products">
        <div
          class="grid grid-cols-1 space-y-7 bg-white
        md:space-y-0 md:space-x-0 md:grid-cols-3"
        >
          {isSuccess ? (
            <>
              {products.map((product) => {
                return (
                  <>
                    <ProductCard product={product} />
                  </>
                );
              })}
            </>
          ) : (
            <>
              <h1 className="text-xl font-roboto text-center">
                Something Went Wrong
              </h1>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  console.log("regenerated");
  let response = await getAllProductsDb();
  console.log(response);

  return {
    props: {
      products: response["message"],
      isSuccess: response["success"],
    },
    revalidate: 43200, // In seconds
  };
}
