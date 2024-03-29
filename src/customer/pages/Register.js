import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

const initialValues = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  cpassword: "",
};

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCPasswordVisibility = () => {
    setShowCPassword(!showCPassword);
  };
  const registerSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter email address"),
    firstname: Yup.string().required("Please enter first name"),
    lastname: Yup.string().required("Last name cannot be left blank"),
    password: Yup.string().required("Please enter password"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone: Yup.string().required("Please enter phone number"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: async (values) => {
        console.log(values);
        try {
          const response = await fetch(
            "https://da73-154-160-30-34.ngrok-free.app/ecommerceservices/register/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams(values),
            }
          );

          if (!response.ok) {
            console.error("Error:", response.message);
          } else {
            const responseData = await response.json();
            console.log("Response:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen bg-[#247158] ">
        <div className="flex flex-row bg-white w-[65%] rounded-lg p-1">
          <div className="w-[50%]">
            <img
              className="w-[100%] "
              src="./asset/register.jpg"
              alt="Registration"
            />
          </div>

          <div className="flex flex-col w-[50%] p-5 justify-center">
            <h1 className="text-4xl text-[#247158] text-center mb-5">
              Create Account
            </h1>
            <div className=" flex flex-col text-left">
              <input
                type="text"
                placeholder="enter first name"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="firstname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
              />
              {touched.firstname && errors.firstname ? (
                <small className="text-red-500">{errors.firstname}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left">
              <input
                type="text"
                placeholder="enter last name"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="lastname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
              />
              {touched.lastname && errors.lastname ? (
                <small className="text-red-500">{errors.lastname}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left">
              <input
                type="email"
                placeholder="enter email"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <small className="text-red-500">{errors.email}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left ">
              <input
                type="text"
                placeholder="enter phone number"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
              />
              {touched.phone && errors.phone ? (
                <small className="text-red-500">{errors.phone}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="enter password"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              {showPassword ? (
                <BiShow
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-2 text-xl"
                />
              ) : (
                <BiHide
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-2 text-xl"
                />
              )}

              {touched.password && errors.password ? (
                <small className="text-red-500">{errors.password}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left relative">
              <input
                type={showCPassword ? "text" : "password"}
                placeholder="confirm your password"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="cpassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpassword}
              />

              {showCPassword ? (
                <BiShow
                  onClick={toggleCPasswordVisibility}
                  className="absolute top-2 right-2 text-xl"
                />
              ) : (
                <BiHide
                  onClick={toggleCPasswordVisibility}
                  className="absolute top-2 right-2 text-xl"
                />
              )}

              {touched.cpassword && errors.cpassword ? (
                <small className="text-red-500">{errors.cpassword}</small>
              ) : null}
            </div>

            <div>
              <button
                type="submit"
                className="text-white rounded-md mt-3 bg-[#247158] font-bold w-full p-2"
              >
                Register
              </button>
              <p className="text-gray-500 ">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#2e8b36]">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
