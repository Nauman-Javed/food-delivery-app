import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";

interface formValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const SignupFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms")
    .required("Required"),
});

export const SignupPage = () => {
  const initialValues: formValues = {
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const handleSubmit = (values: formValues) => {};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="hidden md:block">
        <Image
          src={"/assets/LandingPage/signup.jpg"}
          width={400}
          height={100}
          alt="Image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col md:p-10 w-4/5 md:w-1/5">
        <div className="flex justify-center mb-8">
          <Image
            src={"/assets/global/LOGO.svg"}
            width={150}
            height={100}
            alt="Image"
          />
        </div>
        <h1 className="font-semibold text-3xl mb-10">Signup</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupFormSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col">
            <div className="mb-3">
              <label htmlFor="email" className="text-gray-500">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="h-10 w-full bg-gray-100 rounded-md p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 "
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="text-gray-500">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="h-10 w-full bg-gray-100 rounded-md p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 "
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="text-gray-500">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="h-10 w-full bg-gray-100 rounded-md p-2"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-600 "
              />
            </div>

            <div className="flex mb-3">
              <input type="checkbox" />
              <p className="text-xs">
                &nbsp;&nbsp;I agree to the Terms and Service and Privacy Policy
              </p>
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-[#FC8A06] rounded-md  text-white font-semibold"
            >
              Signup
            </button>
          </Form>
        </Formik>

        <div className="flex mt-4">
          <p className="text-gray-500">Already Have An Account?&nbsp;</p>
          <Link href="/login" className="font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
