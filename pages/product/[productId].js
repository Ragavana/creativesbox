import { useRouter } from "next/router";
import { getAllProductsDb, getProductsDb } from "../api/products";
import ProductCard from "@/components/productcard";
import Image from "next/image";

function Product({ product, isSuccess }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {isSuccess && product.length >= 1 ? (
        <>
          <>
            <div className="flex flex-col text-center space-y-2 mx-auto font-alata text-zinc-700 md:flex-row md:space-x-5">
              <h1 className="font-bold">{product[0].slug}</h1>
              <h2 className="font-bold">{product[0].title}</h2>
              <p>{product[0].description}</p>
              <Image
                src={product[0].thumbnail}
                alt=""
                placeholder="./images/image1.jpg"
                width="300"
                height="300"
                style={{
                  height: "50% !important",
                  width: "200%",
                  padding: "1rem",
                }}
              />
            </div>
          </>
        </>
      ) : (
        <>
          <h1>Something Went Wrong</h1>
        </>
      )}
    </>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await getProductsDb(params.productId);
  console.log(response);
  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product: response["message"],
      isSuccess: response["success"],
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const response = await getAllProductsDb();
  const isSuccess = response["success"];
  const product = response["message"];
  const paths = product.map((product) => {
    return {
      params: { productId: `${product.slug}` },
    };
  });
  console.log(paths);

    // return {
    //   paths: [{ params: { productId: "83869a5b-dcbc-47dc-80c3-3d9028f21ce9" } }],
    //   fallback: true,
    // };

  return {
    paths: paths,
    fallback: true,
  };
}
