import { Box, Flex } from "@chakra-ui/react";

const LinearDottedLoadingIndicator = () => (
  <Flex width="100%" justifyContent="center">
    <Flex w="100px" className="stage" justifyContent="center">
      <Box as="span" className="dot-pulse" />
    </Flex>
  </Flex>
);

export default LinearDottedLoadingIndicator;
