import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

export default function AdminLogin() {
  const adminloginSchema = Yup.object().shape({
    email: Yup.string().required("Please enter store name"),
    password: Yup.string().required("Please enter password"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: adminloginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[50%] p-5">
        <div className="flex justify-center items-center">
          <div className="p-4 rounded-md justify-center bg-white w-full">
            <h3 className="p-2 m-2 text-center text-[#247158] text-4xl">
              Login
            </h3>
            <input
              type="email"
              placeholder="enter email"
              className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
            />
            {touched.email && errors.email ? (
              <small className="text-red-500">{errors.email}</small>
            ) : null}
            <input
              type="password"
              placeholder="enter password"
              className="block rounded w-full p-2 mb-2 outline outline-1 outline-gray-200"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <small className="text-red-500">{errors.password}</small>
            ) : null}
            <button
              className="w-full p-2 text-white rounded-md bg-[#247158]"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
