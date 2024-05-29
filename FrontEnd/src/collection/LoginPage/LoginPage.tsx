import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { Field, ErrorMessage } from "formik";
import { StyledForm } from "@/components/Form/StyledForm";

interface formValues {
  email: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape({
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

export const LoginPage = () => {
  const initialValues: formValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: formValues) => {};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="hidden md:block">
        <Image
          src={"/assets/LandingPage/login.jpg"}
          width={400}
          height={100}
          alt="Image"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col p-0 md:p-10 w-4/5 md:w-1/5">
        <div className="flex justify-center mb-8">
          <Image
            src={"/assets/global/LOGO.svg"}
            width={150}
            height={100}
            alt="Image"
          />
        </div>
        <h1 className="font-semibold text-3xl mb-10">Login</h1>

        <StyledForm
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={handleSubmit}
          buttonText="Log In"
        >
          <div className="mb-7">
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
              className="text-red-600"
            />
          </div>
          <div className="mb-7">
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
              className="text-red-600 mb-4"
            />
          </div>
          <div className="flex mb-3">
            <input type="checkbox" />
            <p className="text-xs">
              &nbsp;&nbsp;I agree to the Terms and Service and Privacy Policy
            </p>
          </div>
        </StyledForm>

        <div className="flex mt-4">
          <p className="text-gray-500">Dont Have An Account?&nbsp;</p>
          <Link href="/signup" className="font-bold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
