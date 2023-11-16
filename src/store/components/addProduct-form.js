import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  product: "",
  price: "",
  brand: "",
  file: "",
  category: "",
  quantity: "",
  description: "",
  specs: "",
};

export default function AddProduct() {
  const addProductSchema = Yup.object().shape({
    product: Yup.string().required("Please enter product name"),
    price: Yup.string().required("Please enter product price"),
    brand: Yup.string().required("Please enter product brand"),
    file: Yup.string().required("Select a picture of the product"),
    category: Yup.string().required("Select one of the categories"),
    quantity: Yup.string().required("Please enter product quantity"),
    description: Yup.string().required(
      "brief description of the product is needed"
    ),
    specs: Yup.string().required("enter product specifications here"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addProductSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="outline outline-1 outline-gray-200 rounded-md p-5 m-5 bg-white shadow-sm">
          <div className="flex items-center justify-center">
            <h3 className="p-2 m-2 text-left text-[#247158] text-2xl">
              Add Product
            </h3>
          </div>

          <input
            type="text"
            placeholder="enter product name"
            className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
            name="product"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.product}
          />
          {touched.product && errors.product ? (
            <small className="text-red-500">{errors.product}</small>
          ) : null}
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="enter product price"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
              />
              {touched.price && errors.price ? (
                <small className="text-red-500">{errors.price}</small>
              ) : null}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="enter product brand"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
              />
              {touched.brand && errors.brand ? (
                <small className="text-red-500">{errors.brand}</small>
              ) : null}
            </div>
          </div>
          <input
            type="file"
            className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
            name="file"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.file}
          />
          {touched.file && errors.file ? (
            <small className="text-red-500">{errors.file}</small>
          ) : null}
          <div className="flex gap-3">
            <div className="flex-1">
              <select
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
              >
                <option selected hidden disabled>
                  Select Category
                </option>
                <option className="" value={1}>
                  Television
                </option>
                <option className="" value={2}>
                  Television
                </option>
                <option className="" value={3}>
                  Television
                </option>
              </select>
              {touched.category && errors.category ? (
                <small className="text-red-500">{errors.category}</small>
              ) : null}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="enter product quantity"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
              />
              {touched.quantity && errors.quantity ? (
                <small className="text-red-500">{errors.quantity}</small>
              ) : null}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <textarea
                name="description"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200 resize-none"
                cols={5}
                rows={5}
                placeholder="Enter product description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
              />
              {touched.description && errors.description ? (
                <small className="text-red-500">{errors.description}</small>
              ) : null}
            </div>
            <div className="flex-1">
              <textarea
                name="specs"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200 resize-none"
                cols={5}
                rows={5}
                placeholder="Enter product specification"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.specs}
              />
              {touched.specs && errors.specs ? (
                <small className="text-red-500">{errors.specs}</small>
              ) : null}
            </div>
          </div>
          <button
            className="outline w-full bg-[#247158] p-1 text-[#fff] rounded-lg hover:bg-transparent hover:text-[#247158] hover:outline-1 hover:outline-[#247158]"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
