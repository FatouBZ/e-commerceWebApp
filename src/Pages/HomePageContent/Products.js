import React from 'react'
import CategoryCard from './categoryCard'
import ProductCard from '../../components/productCard'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
      <div className="bg-white p-2 shadow-sm rounded-md">
        <div className="text-lg text-[#247158] mb-3">
          <h1>Categories</h1>
          <hr></hr>
        </div>
        <div className="flex justify-start gap-4">
          <CategoryCard />
        </div>
      </div>
      <div className="bg-white p-2 shadow-sm rounded-md">
        <div className=" text-lg text-[#247158] mb-3">
          <h1>Category chosen name</h1>
        </div>
        <Link to="/product-details">
          <div className="flex flex-wrap justify-start gap-3">
            <ProductCard />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Products
