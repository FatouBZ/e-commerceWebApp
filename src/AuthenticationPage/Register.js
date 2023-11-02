import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  return (
    <Formik
      initialValues={{
        firstname: "",
        surname: "",
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Please enter email"),
        password: Yup.string().required("Please enter password"),
        firstname: Yup.string().required("Please enter first name"),
        surname: Yup.string().required("Please enter last name"),
        confirmPassword: Yup.string().required("please confirm password"),
        phonenumber: Yup.string().required("Please enter phone number"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
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
              <h1 className="text-4xl font-bold text-[#247158] text-center mb-5">
                Create Account
              </h1>
              <div className=" flex flex-col text-left">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" flex flex-col text-left">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" flex flex-col text-left">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" flex flex-col text-left">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" flex flex-col text-left">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className=" flex flex-col text-left ">
                <Field
                  className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  placeholder=" Phone Number"
                />
                <ErrorMessage
                  name="phonenumber"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white rounded-md mt-3 bg-[#247158] font-bold w-full p-2"
                >
                  Register
                </button>
                <p className="text-gray-500  mt-2 ">Already have an account?</p>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default Register;
