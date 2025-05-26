import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Logo1, PhoneIcon } from "@/app/_icons";

export const CallToAction = () => {
  const phoneNumber = "+49 (0) 2273 60149 0";

  return (
    <Link href={`tel:${phoneNumber}`} _hover={{ textDecoration: "none" }}>
      <Flex
        bg="yellow.100"
        borderRadius="md"
        px={4}
        py={2}
        alignItems="center"
        gap={2}
      >
        <PhoneIcon />
        <Text fontSize="sm" color="black">
          Call now {phoneNumber}
        </Text>
      </Flex>
    </Link>
  );
};

export const Header1 = () => {
  return (
    <Box px="240px" mt={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Logo1 />
        <CallToAction />
      </Flex>
    </Box>
  );
};

