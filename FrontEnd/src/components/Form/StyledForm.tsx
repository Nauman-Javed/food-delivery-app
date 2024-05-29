import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface FormComponentProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  buttonText: string;
  children: React.ReactNode;
}

export const StyledForm: React.FC<FormComponentProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col">
        {children}
        <button
          type="submit"
          className="w-full h-10 bg-[#FC8A06] rounded-md text-white font-semibold"
        >
          {buttonText}
        </button>
      </Form>
    </Formik>
  );
};
