import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  return (
    <Formik 
      initialValues={{
        firstname: '',
        surname: '',
        phonenumber: '',
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        firstname: Yup.string().required('Required'),
        phonenumber: Yup.string().required('Required'),
        surname: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col justify-center items-center h-screen ">
        <div className="my-3 flex flex-col">
          <label className='' htmlFor="firstname">First Name</label>
          <Field className="border border-gray-300 rounded-md px-4 py-2" type="text" id="firstname" name="firstname" />
          <ErrorMessage name="firstname" component="div" className="text-red-500" />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="surname">Last Name</label>
          <Field className="border border-gray-300 rounded-md px-4 py-2" type="text" id="surname" name="surname" />
          <ErrorMessage name="surname" component="div" className="text-red-500" />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="phonenumber">Phone Number</label>
          <Field className="border border-gray-300 rounded-md px-4 py-2" type="text" id="phonenumber" name="phonenumber" />
          <ErrorMessage name="phonenumber" component="div" className="text-red-500" />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="email">Email</label>
          <Field className="border border-gray-300 rounded-md px-4 py-2" type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="password">Password</label>
          <Field className="border border-gray-300 rounded-md px-4 py-2" type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>
        <button type="submit" className="text-white px-4 py-2 rounded-md mt-3" style={{ background: 'hsl(161, 68%, 29%)' }}>Submit</button>
      </Form>
    </Formik>
  );
};

export default Register;
