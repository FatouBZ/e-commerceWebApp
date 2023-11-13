import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  password: '',
  cpassword: '',
}

function Profile() {
  const registerSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter email address'),
    firstname: Yup.string().required('Please enter first name'),
    lastname: Yup.string().required('Last name cannot be left blank'),
    password: Yup.string().required('Please enter password'),
    cpassword: Yup.string().required('passwords do not match'),
    phone: Yup.string().required('Please enter phone number'),
  })

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-[70%] justify-start ">
        <div className="flex flex-row w-full rounded-lg p-1">
          <div className="flex flex-col w-[100%] justify-center">
            <h1 className="text-4xl text-[#fff] font-bold mb-5">
              Personal Information
            </h1>
            <div className="flex w-[100%]  mb-2">
              <img
                className="w-32 h-32 border-2 rounded-full bg-[#000]"
                src="./asset/2.jpg"
                alt="profile"
              />
              <div className="text-white">
                <p className="flex ml-2 mt-10 mr-10 ">Fatou Bintou</p>
                <p className=" ml-2 font-bold cursor-pointer hover:underline ">
                  Change
                </p>
              </div>
            </div>
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
            <div className=" flex flex-col text-left">
              <input
                type="password"
                placeholder="enter password"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              {touched.password && errors.password ? (
                <small className="text-red-500">{errors.password}</small>
              ) : null}
            </div>
            <div className=" flex flex-col text-left">
              <input
                type="password"
                placeholder="confirm your password"
                className="block p-2 mb-2 rounded w-full outline outline-1 outline-gray-200"
                name="cpassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpassword}
              />
              {touched.cpassword && errors.cpassword ? (
                <small className="text-red-500">{errors.cpassword}</small>
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
            <div>
              <button
                type="submit"
                className="text-[#247158] rounded-md mt-3 bg-[#fff] font-bold w-full p-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Profile
