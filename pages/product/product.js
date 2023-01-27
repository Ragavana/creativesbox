import ProductCard from "@/components/productcard";
import Image from "next/image";

function Product() {
  return (
    <>
      <section id="products">
        <div class="grid grid-cols-1 px-4 space-y-10 bg-white
        md:space-y-0 md:space-x-0 md:m-2 md:grid-cols-3">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
      </section>
    </>
  );
}

export default Product;
