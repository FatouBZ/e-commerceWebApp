import React from "react";
import CategoryCard from "./categoryCard";
import ProductCard from "../../components/productCard";

function Products() {
  return (
    <>
      <div className="bg-white p-2 shadow-sm rounded-md gap-3">
        <div className="text-lg text-[#247158] mb-3">
          <h1>Categories</h1>
          <hr></hr>
        </div>
        <div className="flex justify-start gap-4">
          <CategoryCard />
        </div>
      </div>
      <div className="bg-white p-2 shadow-sm rounded-md overflow-x-hidden scrollbar-hide overflow-y-auto ">
        <div className=" text-lg text-[#247158] mb-3 px-5">
          <h1>Category chosen name</h1>
        </div>
        <div className="flex flex-wrap gap-3  justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default Products;
