import React from 'react'
import CategoryCard from './categoryCard'
import ProductCard from '../../components/productCard'
import OrdersTable from '../HomePageContent/Store/orders'
import { Link } from 'react-router-dom'

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
      <div className="bg-white py-3 shadow-sm rounded-md overflow-x-hidden scrollbar-hide overflow-y-auto ">
        <div className=" text-lg text-[#247158] mb-3 px-5">
          <h1>Category chosen name</h1>
        </div>
        <Link to="/product-details">
          <div className="flex flex-wrap gap-3 px-5 justify-between">
            <ProductCard />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Products
