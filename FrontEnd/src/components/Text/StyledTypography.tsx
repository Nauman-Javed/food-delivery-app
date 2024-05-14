import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/system";

interface StyledTypographyProps extends TypographyProps {
  text: string;
  customStyle?: React.CSSProperties;
}

const CustomTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({})
);

const StyledTypography: React.FC<StyledTypographyProps> = ({
  text,
  customStyle,
  ...props
}) => {
  return (
    <CustomTypography style={customStyle} {...props}>
      {text}
    </CustomTypography>
  );
};

export default StyledTypography;
