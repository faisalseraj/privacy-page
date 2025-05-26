"use client"; // Allowing the use of React hooks

import { Field, Input, InputProps, Stack, Textarea } from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "../ui/password-input";
import { useEffect, useState } from "react";

import { Checkbox } from "../ui/checkbox";
import { Field as CustomField } from "@/components/ui/field";
import { InputGroup } from "../ui/input-group";
import ResizeTextarea from "react-textarea-autosize";
import { getFieldName } from "../form";
import { useDebounce } from "@/app/_utils/useDebounced";
import { useFormContext } from "react-hook-form";

interface CustomInputProps extends InputProps {
  label: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  name: string;
  helperText?: string;
  endElement?: any;
  endElementProps?: any;
  errorText?: string;
}

const InputComponent: React.FC<CustomInputProps> = ({
  label,
  // value,
  // onChange,
  required,
  name,
  checked,
  helperText,
  placeholder,
  mt = 4,
  type,
  errorText,
  endElementProps,
  endElement,
  ...rest
}) => {
  const form = useFormContext();
  const fieldName = getFieldName(name);
  const [value, setInternalValue] = useState(
    type === "number" ? Number(form.getValues(name) || 0) : form.getValues(name)
  );
  const onChange = (event: any) => {
    setInternalValue(event.target.value);
  };
  const formValue = form.watch(name);

  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    if (debouncedValue && debouncedValue !== formValue) {
      form.setValue(name, debouncedValue, {
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (value !== formValue) {
      setInternalValue(formValue);
    }
  }, [formValue]);

  const error = form.formState.errors?.[fieldName]?.message;

  return (
    <CustomField
      name={name}
      mt={mt}
      label={label}
      helperText={helperText}
      errorText={error as string}
      invalid={error !== undefined}
    >
      {type === "textarea" ? (
        <InputGroup
          {...(endElement ? { endElement } : {})}
          {...(endElementProps ? { endElementProps } : {})}
          w="100%"
          height={"auto"}
          p={0.5}
        >
          <Textarea
            p={2}
            color={"blackAlpha.800"}
            border={"1px solid lightgray"}
            _focus={{
              border: "1px solid lightgray",
            }}
            placeholder={placeholder}
            value={value}
            required={required}
            {...form.register(fieldName, {
              valueAsNumber: type === "number",
            })}
            resize={true}
            onChange={onChange}
            {...(rest as any)}
          />
        </InputGroup>
      ) : type === "password" ? (
        <Stack w={"100%"}>
          <PasswordInput
            p={2}
            color={"blackAlpha.800"}
            border={"1px solid lightgray"}
            _focus={{
              border: "1px solid lightgray",
            }}
            placeholder={placeholder}
            value={value}
            required={required}
            {...form.register(fieldName, {
              valueAsNumber: type === "number",
            })}
            onChange={onChange}
            {...rest}
          />
          <PasswordStrengthMeter value={value?.toString()?.length || 0} />
        </Stack>
      ) : type === "checkbox" ? (
        <Checkbox
          checked={checked}
          inputProps={{
            onChange,
          }}
        />
      ) : (
        <InputGroup
          {...(endElement ? { endElement } : {})}
          {...(endElementProps ? { endElementProps } : {})}
          w="100%"
          p={0.5}
        >
          <Input
            p={2}
            color={"blackAlpha.800"}
            border={"1px solid lightgray"}
            _focus={{
              border: "1px solid lightgray",
            }}
            type="area"
            placeholder={placeholder}
            value={value}
            required={required}
            {...form.register(fieldName, {
              valueAsNumber: type === "number",
            })}
            onChange={onChange}
            {...rest}
          />
        </InputGroup>
      )}
    </CustomField>
  );
};

export default InputComponent;
