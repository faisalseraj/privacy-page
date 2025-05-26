import * as React from "react";

import { Field as ChakraField } from "@chakra-ui/react";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  name: string;
  group?: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  flex?: string;
  prefix?: any;
  suffix?: string | React.ReactNode;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  hideErrorMessage?: boolean;
  marginBottom?: number;
  onChangeHandler?: () => void;
  readonly?: boolean;
  multiSelect?: boolean;
  blackLabel?: boolean;
  helperText?: string;
  errorText?: string;
  optionalText?: string;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props;
    return (
      <ChakraField.Root ref={ref} {...rest}>
        {label && (
          <ChakraField.Label color={'black'} fontWeight={"700"}>
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
        {children}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    );
  }
);
