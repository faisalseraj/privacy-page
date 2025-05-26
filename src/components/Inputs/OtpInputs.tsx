// import { PinInput } from "../ui/pin-input";
// import { Box, usePinInput } from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  PinInput,
  Stack,
  usePinInput,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface OTPInputProps {
  onComplete: (details: { value: string[]; valueAsString: string }) => void;
  otpColor?: string;
  width?: any;
  height?: any;
  size?: any;
  isLoading?: boolean;
  fontSize?: any;
  defaultActiveIndex?: number;
}

export const OTPInputV2 = ({
  onComplete,
  otpColor,
  width,
  isLoading,
  height,
  fontSize,
  defaultActiveIndex,
}: OTPInputProps) => {
  const store = usePinInput();
  useEffect(() => {
    if (store.valueAsString.length === 4 && !isLoading) {
      onComplete(store);
      store.clearValue();
    }
  }, [store]);

  return (
    <PinInput.RootProvider
      value={store}
      color={"red.600"}
      // autoFocus
      // onValueComplete={onComplete}
    >
      <PinInput.Control display="flex" gap="2">
        {Array.from({ length: 4 }).map((_, index) => (
          <PinInput.Input
            {...(index === 0 ? { autoFocus: true } : {})}
            color={"red.600"}
            width={width}
            border={"1px solid #dc2626"}
            height={height}
            fontSize={fontSize}
            key={index}
            index={index}
          />
        ))}
      </PinInput.Control>
    </PinInput.RootProvider>
  );
};
