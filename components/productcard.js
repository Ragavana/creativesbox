function ProductCard() {
  return (
    <>
      <div class="item-container group md:p-4">
        <div class="item rounded-lg drop-shadow-2xl bg-white duration-500 group-hover:scale-105">
          <img src="./images/image1.jpg" className="rounded-t-lg w-full"></img>
          <div className="space-y-2 p-4 flex justify-between items-center">
            <div>
              <h1 className="font-alata font-medium">Billing Page</h1>
              <p className="text-xs font-light">31 Mar 2022</p>
            </div>
            <button
              className="font-alata rounded-lg drop-shadow-xl
                 bg-green-300 px-3 py-2 text-white invisible duration-200 group-hover:visible group-hover:scale-105"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
