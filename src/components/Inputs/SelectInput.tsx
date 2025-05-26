import { Box, Stack, Text } from "@chakra-ui/react";

import AsyncSelect from "react-select/async";
import React from "react";
import Select from "react-select";

// import { ColourOption, colourOptions } from '../data';

export const SelectAsync = ({
  options,
  onChange,
  label,
}: {
  options: any;
  onChange: any;
  label?: string;
}) => {
  return (
    <Box>
      {label && <Text mb={2}>{label}</Text>}

      <AsyncSelect
        cacheOptions
        defaultValue={options[0]}
        defaultOptions
        loadOptions={options}
        onChange={onChange}
      />
    </Box>
  );
};

// import { ColourOption, colourOptions } from '../data';

export const SimpleSelect = React.memo(
  ({
    options,
    onChange,
    label,
  }: {
    options: any;
    onChange: any;
    label?: string;
  }) => {
    return (
      <Stack justifyContent={"space-around"}>
        {label && <Text>{label}</Text>}

        <Select
          menuPosition="fixed"
          defaultValue={options[0]}
          options={options}
          onChange={onChange}
        />
      </Stack>
    );
  },
);
