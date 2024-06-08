import { Button, Modal, Step, StepLabel } from "@mui/material";
import React, { useState } from "react";
import StyledTypography from "../Text/StyledTypography";
import { MyOrder } from "@/collection/Global/Cart/MyOrder";
import { Summary } from "@/collection/Global/Cart/Summary";
import { Payment } from "@/collection/Global/Cart/Payment";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Stepper from "@mui/material/Stepper";

const steps = ["My Order", "Summary", "Payment"];

interface StepperProps {
  handleClose: () => void;
  open: boolean;
}

export const CustomStepper = ({ handleClose, open }: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      return null;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return null;
    }
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <MyOrder />;
      case 1:
        return <Summary />;
      case 2:
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute top-2/4 left-2/4 w-[100%] lg:w-[40%]  bg-[#ffe6ff] border-8 border-[#77007a] p-4 -translate-x-1/2 -translate-y-1/2 rounded-xl h-[80%]">
        <div className="mt-3 flex justify-between items-center w-[60%] h-[5%]">
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            <ArrowBackIosRoundedIcon />
          </Button>
          <StyledTypography
            text="Your Cart"
            className="text-center text-2xl font-semibold "
          />
        </div>
        <div className="mt-3 h-[5%]">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className=" mt-5 h-[65%]">{renderStepContent(activeStep)}</div>
        <div className="border-t-2 border-black w-[50%] m-auto mt-2"></div>
        <div className=" mt-5 h-[10%] p-2 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <StyledTypography
              text="Total Price"
              className="text-base font-semibold"
            />
            <StyledTypography
              text="Delivery Time"
              className="text-base font-semibold"
            />
          </div>
          <div className="flex flex-col justify-center items-end mr-3">
            <StyledTypography
              text="PKR- 31.39"
              className="text-base font-semibold text-[#77007a]"
            />
            <StyledTypography
              text="27 min"
              className="text-base font-semibold text-[#77007a]"
            />
          </div>
        </div>
        <div className="flex justify-center items-end h-[5%] mt-1">
          <Button
            onClick={handleNext}
            className="w-[100%] lg:w-[50%] bg-[#77007a] rounded-lg hover:bg-[#77007a]"
          >
            <StyledTypography
              text={activeStep === steps.length - 1 ? "Checkout" : "Next"}
              className="text-white font-semibold tracking-widest"
            />
          </Button>
        </div>
      </div>
    </Modal>
  );
};
