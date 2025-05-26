import "./Gradient/style.css";
import "./BorderAnimation/style.css";
import "./3DClick/style.css";
import "./FloatingShadow/style.css";
import "./NeonGlow/style.css";
import "./Morphing/style.css";
import "./ButtonGray/style.css"

import { Box, Button, ButtonProps } from "@chakra-ui/react";

import React from "react";

const ButtonComponent: React.FC<
  ButtonProps & {
    isLoading?: boolean;
    className:
      | "neon-btn"
      | "morph-btn"
      | "gradient-btn"
      | "border-animate-btn"
      | "btn-3d"
      | "floating-btn"
      | 'btn-gray';
  }
> = ({ children, className, onClick, isLoading, ...rest }) => {
  return (
    <Button
      {...rest}
      // loading={isLoading}
      className={`${className}`}
      onClick={onClick}
    >
      {isLoading ? <Box as="span" className="dot-pulse" /> : children}
    </Button>
  );
};

export default ButtonComponent;
