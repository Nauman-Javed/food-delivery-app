import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonProps {
  text: string;
  customStyle?: React.CSSProperties;
  onSubmit: (values: any) => void;
}

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({}));

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  customStyle,
  onSubmit,
}) => {
  return (
    <StyledButton onSubmit={onSubmit} style={customStyle}>
      {text}
    </StyledButton>
  );
};
