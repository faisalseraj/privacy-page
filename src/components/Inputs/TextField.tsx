import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CloseIcon, CopyIcon, Search2Icon } from "@chakra-ui/icons";
import { Field, FieldProps } from "@/components/ui/field";
import React, {
  CSSProperties,
  HTMLInputTypeAttribute,
  useCallback,
  useEffect,
  useState,
} from "react";

import { InputGroup } from "../ui/input-group";
import LinearDottedLoadingIndicator from "@/app/_components/LinearLoader";
import { PasswordInput } from "../ui/password-input";
import { getFieldName } from "@/components/form";
import { useDebounce } from "@/app/_utils/useDebounced";
import { useFormContext } from "react-hook-form";

export const TextField = (
  props: FieldProps & {
    type?: HTMLInputTypeAttribute | "textarea" | "timeField";
    info?: React.ReactNode;
    onFocusPrompt?: any;
    min?: number;
    max?: number;
    color?: string;
    style?: any;
    showSearchField?: boolean;
    toggleShowSearchField?: () => void;
    characterLimit?: number;
    minLength?: number;
    staticText?: string;
    maxLength?: number;
    isLoading?: boolean;
    leftIcon?: any;
    inputProps?: CSSProperties;
    blackLabel?: boolean;
    rightIcon?: any;
    errors?: string[];
  }
) => {
  const {
    name,
    group,
    width,
    height,
    type,
    label,
    placeholder,
    isDisabled,
    info,
    onFocusPrompt,
    readonly = false,
    showSearchField = true,
    max,
    color = "black",
    toggleShowSearchField,
    characterLimit,
    minLength,
    staticText,
    maxLength,
    isLoading,
    leftIcon,
    rightIcon,
    errors,
    inputProps = {},
  } = props;

  const form = useFormContext();
  const fieldName = getFieldName(name, group);
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
  }, [debouncedValue, form]);

  useEffect(() => {
    if (value !== formValue) {
      setInternalValue(formValue);
    }
  }, [ value]);

  const [inputFocussed, setInputFocussed] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onCloseSearch = () => {
    form.setValue(fieldName, "");
    if (toggleShowSearchField) {
      toggleShowSearchField();
    }
  };
  const onBlur = useCallback(() => () => setInputFocussed(false), []);
  const onFocus = useCallback(() => () => setInputFocussed(true), []);
  const field = () => {
    switch (type) {
      // case "textarea":
      //   return (
      //     <Box pos={"relative"}>
      //       <Textarea
      //         {...form.register(fieldName)}
      //         fontSize={{ md: 16, base: "14px" }}
      //         placeholder={placeholder}
      //         w={width ?? "100%"}
      //         h={height ?? "100%"}
      //         disabled={isDisabled}
      //         readOnly={readonly}
      //         onBlur={onBlur}
      //         onChange={onChange}
      //         value={value}
      //         maxLength={maxLength ?? characterLimit}
      //         minLength={minLength ?? 0}
      //         onFocus={onFocus}
      //         {...(inputProps as any)}
      //       />
      //       <Box
      //         width={"40px"}
      //         height={"32px"}
      //         position={"absolute"}
      //         right={"16px"}
      //         bottom={"4px"}
      //         zIndex={111}
      //       >
      //         {rightIcon}
      //       </Box>
      //     </Box>
      //   );
      // case "search":
      //   return (
      //     <React.Fragment>
      //       <InputGroup
      //         endElement={
      //           <>
      //             <IconButton
      //               display={showSearchField ? "inline-flex" : "none"}
      //               _hover={{
      //                 cursor: "pointer",
      //               }}
      //               onClick={onCloseSearch}
      //               height={"48px"}
      //             >
      //               <CloseIcon width={"14px"} />
      //             </IconButton>
      //             {
      //               <Search2Icon
      //                 width={"20px"}
      //                 height={"14px"}
      //                 onClick={toggleShowSearchField}
      //                 display={showSearchField ? "none" : "inline-flex"}
      //               />
      //             }
      //           </>
      //         }
      //       >
      //         <Input
      //           fontSize={{ md: 16, base: "14px" }}
      //           type={showSearchField ? "text" : "hidden"}
      //           {...form.register(fieldName, {
      //             valueAsNumber: type === "number",
      //           })}
      //           background={"#F0F0F0!important"}
      //           placeholder={
      //             placeholder ?? (typeof label === "string" ? label : undefined)
      //           }
      //           readOnly={readonly}
      //           w={width ?? "100%"}
      //           h={height ?? "48px"}
      //           disabled={isDisabled}
      //           onBlur={onBlur}
      //           onFocus={onFocus}
      //           onChange={onChange}
      //           value={value}
      //           maxLength={maxLength ?? characterLimit}
      //           minLength={minLength ?? 0}
      //           {...(inputProps as any)}
      //         />
      //       </InputGroup>
      //     </React.Fragment>
      //   );
      // case "password":
      //   return (
      //     <React.Fragment>
      //       <PasswordInput
      //         {...form.register(fieldName, {
      //           valueAsNumber: type === "number",
      //         })}
      //         type={showPassword ? "text" : type}
      //         fontSize={{ md: 16, base: "14px" }}
      //         placeholder={
      //           placeholder ?? (typeof label === "string" ? label : undefined)
      //         }
      //         onChange={onChange}
      //         value={value}
      //         readOnly={readonly}
      //         w={width ?? "100%"}
      //         h={height ?? "48px"}
      //         disabled={isDisabled}
      //         onBlur={onBlur}
      //         maxLength={maxLength ?? characterLimit}
      //         onFocus={onFocus}
      //         {...(inputProps as any)}
      //       />
      //     </React.Fragment>
      //   );

      // case "staticText":
      //   return (
      //     <InputGroup
      //       startElement={staticText && staticText}
      //       className="input-field"
      //       mb="0"
      //     >
      //       <Input
      //         {...form.register(fieldName, {
      //           valueAsNumber: type === "number",
      //         })}
      //         type={type === "number" ? "text" : type}
      //         placeholder={
      //           placeholder ?? (typeof label === "string" ? label : undefined)
      //         }
      //         readOnly={readonly}
      //         color={color}
      //         disabled={isDisabled}
      //         onBlur={onBlur}
      //         maxLength={maxLength ?? characterLimit}
      //         onFocus={onFocus}
      //         {...(inputProps as any)}
      //       />
      //     </InputGroup>
      //   );
      // case "copiableText":
      //   return (
      //     <InputGroup
      //       endElement={<CopyIcon />}
      //       startElement={staticText && staticText}
      //       className="input-field"
      //       mb="0"
      //     >
      //       <>{staticText && staticText}</>
      //     </InputGroup>
      //   );
      
        default:
        return (
          <InputGroup
            startElement={
              !leftIcon ? undefined : (
                <IconButton
                  display={"inline-flex"}
                  _hover={{
                    cursor: "pointer",
                  }}
                  bg="white"
                  height={{ md: "48px", base: "34px" }}
                >
                  {leftIcon}
                </IconButton>
              )
            }
            endElement={
              <IconButton
                display={"inline-flex"}
                _hover={{
                  cursor: "pointer",
                }}
                borderRight={"1px solid #A8B1B2"}
                borderLeft={"0px "}
                bg="white"
                height={{ md: "48px", base: "34px" }}
              >
                {leftIcon}
              </IconButton>
            }
          >
            <Input
              {...form.register(fieldName, {
                valueAsNumber: type === "number",
              })}
              type={type === "number" ? "text" : type}
              placeholder={
                placeholder ?? (typeof label === "string" ? label : undefined)
              }
              onChange={onChange}
              value={value}
              readOnly={readonly}
              color={color}
              disabled={isDisabled}
              onBlur={onBlur}
              maxLength={maxLength ?? characterLimit}
              onFocus={onFocus}
              {...(inputProps as any)}
            />
          </InputGroup>
        );
    }
  };

  // const value = form.watch(name);

  return (
    <Field
      {...props}
      content={
        (
          <>
            <React.Fragment>{field()}</React.Fragment>

            {characterLimit !== undefined && characterLimit > 0 ? (
              <Text className="input-info">
                Max characters {value?.length} - {characterLimit}
              </Text>
            ) : null}

            {minLength !== undefined &&
            minLength > 0 &&
            value?.length < minLength ? (
              <Text className="input-info">
                At least {minLength} Characters
              </Text>
            ) : null}

            {maxLength !== undefined && maxLength > 0 ? (
              value?.length > maxLength ? (
                <Text className="input-info">
                  At max {maxLength} Characters
                </Text>
              ) : (
                <Text className="input-info">
                  Characters {value?.length} - {maxLength}
                </Text>
              )
            ) : null}
            {isLoading ? <LinearDottedLoadingIndicator /> : null}
            {info ? <Text fontSize={10}>{info}</Text> : null}

            {errors?.length
              ? errors?.map((err) => (
                  <Text key={err} color="error" fontSize={10}>
                    {err}
                  </Text>
                ))
              : null}
          </>
        ) as any
      }
    />
  );
};
