import React, { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'

const initialValues = {
  country: '',
  FirstName: '',
  LastName: '',
  Address1: '',
  Address2: '',
  City: '',
  State: '',
  PostZipCode: '',
}

function AddressBook() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        if (response.status === 200) {
          const fetchedCountries = response.data
          const sortedCountries = fetchedCountries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common),
          )
          setCountries(sortedCountries)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const registerSchema = Yup.object({
    country: Yup.string().required('required'),
    FirstName: Yup.string().required('required'),
    LastName: Yup.string().required('required'),
    Address1: Yup.string().required('required'),
    City: Yup.string().required('required'),
    State: Yup.string().required('required'),
    PostZipCode: Yup.string().required('required'),
    phone: Yup.string().required('required'),
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
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="flex flex-col w-[100%] justify-center">
      <h1 className="text-4xl  text-[#247158] font-bold mb-5">ADDRESS BOOK</h1>
      <hr className="w-[70%] mt-2 h-1 border-[#247158]" />
      <div className="flex  mt-4 justify-center items-center opacity-75 bg-[#52b595] h-[20%] p-20 w-[20%] rounded-2xl ">
        <button
          type="button"
          onClick={openModal}
          className="text-4xl text-white opacity-90"
        >
          +
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" items-center w-full max-w-2xl mr-10 transform overflow-hidden backdrop-blur-sm p-10 rounded-2xl bg-[#E5DAC4]/70 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" text-lg font-medium leading-6 text-[#247158]"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-4xl">Add Address</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex  justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  hover:bg-[#fff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#247158] focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          <IoMdClose className="text-2xl hover:text-[#247158]" />
                        </button>
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div className="mt-5">
                        <div className="flex w-full  flex-col justify-center">
                          <div className="text-lg font-bold text-[#247158]">
                            Country/Region
                          </div>
                          <div className=" flex w-full flex-col text-left mb-5">
                            <select
                              as="select"
                              className="block  p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                              name="country"
                              onBlur={handleBlur}
                              onChange={(e) =>
                                setSelectedCountry(e.target.value)
                              }
                              value={selectedCountry}
                              id="dropdown"
                            >
                              <option value="" disabled>
                                Select an option
                              </option>
                              {countries.map((country) => (
                                <option
                                  key={country.name.common}
                                  value={country.name.common}
                                >
                                  {country.name.common}
                                </option>
                              ))}
                            </select>
                            {touched.country && errors.country ? (
                              <small className="text-red-500">
                                {errors.country}
                              </small>
                            ) : null}
                          </div>
                          <div className="text-lg font-bold  text-[#247158]">
                            Contact Information
                          </div>
                          <div className="flex w-full space-x-5">
                            <div className=" text-left w-full">
                              <input
                                type="text"
                                placeholder="First Name"
                                className="block  p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="FirstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.FirstName}
                              />
                              {touched.FirstName && errors.FirstName ? (
                                <small className="text-red-500">
                                  {errors.FirstName}
                                </small>
                              ) : null}
                            </div>
                            <div className="  text-left  w-full">
                              <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="LastName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.LastName}
                              />
                              {touched.LastName && errors.LastName ? (
                                <small className="text-red-500">
                                  {errors.LastName}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className=" flex flex-col text-left mb-5 ">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                              name="phone"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.phone}
                            />
                            {touched.phone && errors.phone ? (
                              <small className="text-red-500">
                                {errors.phone}
                              </small>
                            ) : null}
                          </div>
                          <div className="text-lg font-bold text-[#247158]">
                            Shipping Address
                          </div>

                          <div className=" flex flex-col text-left relative">
                            <input
                              type="text"
                              placeholder="Street name, number, company name"
                              className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                              name="Address1"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.Address1}
                            />

                            {touched.Address1 && errors.Address1 ? (
                              <small className="text-red-500">
                                {errors.Address1}
                              </small>
                            ) : null}
                          </div>
                          <div className="flex w-full space-x-5">
                            <div className=" flex flex-col w-full text-left relative">
                              <input
                                type="text"
                                placeholder="Building/apt/block no (optional)"
                                className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="Address2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Address2}
                              />
                            </div>

                            <div className=" flex flex-col  w-full text-left relative">
                              <input
                                type="text"
                                placeholder="City"
                                className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="City"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.City}
                              />

                              {touched.city && errors.City ? (
                                <small className="text-red-500">
                                  {errors.City}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex  w-full space-x-5">
                            <div className=" flex flex-col  w-full text-left relative">
                              <input
                                type="text"
                                placeholder="Select state/province"
                                className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="State"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.State}
                              />

                              {touched.State && errors.State ? (
                                <small className="text-red-500">
                                  {errors.State}
                                </small>
                              ) : null}
                            </div>
                            <div className=" flex flex-col w-full text-left relative">
                              <input
                                type="text"
                                placeholder="Zip Code"
                                className="block p-2 mb-3 placeholder-gray-500 ::placeholder rounded w-full outline outline-2 outline-white  bg-transparent"
                                name="PostZipCode"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.PostZipCode}
                              />

                              {touched.PostZipCode && errors.PostZipCode ? (
                                <small className="text-red-500">
                                  {errors.PostZipCode}
                                </small>
                              ) : null}
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="text-white rounded-md mt-3 bg-[#247158] font-bold w-full p-2"
                            >
                              Add address
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default AddressBook
