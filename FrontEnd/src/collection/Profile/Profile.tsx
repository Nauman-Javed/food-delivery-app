import { StyledForm } from "@/components/Form/StyledForm";
import StyledTypography from "@/components/Text/StyledTypography";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import React from "react";
import { ErrorMessage, Field } from "formik";

interface formValuesProps {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  address: string;
  contact: string;
}

const ProfileFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "First Name cannot be more than 15 letters")
    .required("Required"),
  secondName: Yup.string()
    .max(15, "Second Name cannot be more than 15 letters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  address: Yup.string().max(150, "Address limit exceeds").required("Required"),
  contact: Yup.string().max(11, "invalid phone number").required("Required"),
});

export const Profile = () => {
  const initialValues: formValuesProps = {
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    address: "",
    contact: "",
  };

  const handleSubmit = (values: formValuesProps) => {};

  return (
    <div>
      <div className="mt-5">
        <Link href="/">
          <Image
            src={"/assets/Global/logo.svg"}
            width={185}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-full flex justify-center md:justify-start ">
        <div className="w-[80%] md:w-[50%] ml-0 md:ml-10">
          <StyledTypography
            text="Personal Details"
            className="text-3xl md:text-5xl mt-10 text-center md:text-start font-bold"
          />
          <div className="mt-10">
            <StyledForm
              initialValues={initialValues}
              validationSchema={ProfileFormSchema}
              onSubmit={handleSubmit}
              buttonText="Update"
            >
              <div className="mb-5">
                <label htmlFor="firstName" className="text-gray-500">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="h-10 w-full bg-gray-100 rounded-md p-2"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="secondName" className="text-gray-500">
                  Second Name
                </label>
                <Field
                  type="text"
                  id="secondName"
                  name="secondName"
                  className="h-10 w-full bg-gray-100 rounded-md p-2"
                />
                <ErrorMessage
                  name="secondName"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="mb-5">
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
              <div className="mb-5">
                <label htmlFor="password" className="text-gray-500">
                  Password (min 8 characters)
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
                  className="text-red-600"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="address" className="text-gray-500">
                  Address
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="h-10 w-full bg-gray-100 rounded-md p-2"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="contact" className="text-gray-500">
                  Contact (without dash)
                </label>
                <Field
                  type="text"
                  id="contact"
                  name="contact"
                  className="h-10 w-full bg-gray-100 rounded-md p-2"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </StyledForm>
          </div>
        </div>
      </div>
    </div>
  );
};
