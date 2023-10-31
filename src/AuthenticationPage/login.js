import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-screen h-screen justify-around items-center bg-[#186049]">
        <div className="flex-2 mb-4 w-[50%]">
          <div className="bg-white p-20">hello</div>
        </div>
        <div className="flex-2 mb-4 w-[50%] ">
          <div className="p-4 rounded-md w-full bg-white ">
            <h3 className="p-2 m-2 text-center text-[#186049] text-4xl">
              Login here
            </h3>
            <input
              type="email"
              placeholder="enter email"
              className="block p-2 mb-2 rounded w-[100%] outline outline-1 outline-gray-200"
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
              className="block rounded w-[100%] p-2 mb-2 outline outline-1 outline-gray-200"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <small className="text-red-500">{errors.password}</small>
            ) : null}
            <button
              className="w-full p-2 text-white rounded-md bg-[#186049]"
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

export default Login;
