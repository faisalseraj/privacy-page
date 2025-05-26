import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo1, PhoneIcon } from "@/app/_icons";

export const Banner = () => (
  <Flex
    borderRadius="8px"
    flexDirection="column"
    justifyContent="center"
    px="140px"
    mt={8}
    h="334px"
    mx="96px"
    bg="#E3EDF9"
  >
    <Box maxW="500px">
      <Text fontSize="44px" fontWeight={400}>
        Privacy Policy
      </Text>
      <Text mt={2} fontSize={16} fontWeight={500} color="#343434">
        Details the methods we use to collect, handle, and safeguard your personal
        information, ensuring your privacy and data security while using our
        website.
      </Text>
    </Box>
  </Flex>
);
