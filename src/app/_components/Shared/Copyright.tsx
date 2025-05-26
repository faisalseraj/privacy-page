import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

// src/components/CopyrightBar.jsx

const CopyrightBar = () => {
  return (
    <Box
      py={0.5}
      mx="96px"
      bg="white"
      px={{ base: 4, md: 8, lg: 16 }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <HStack
        spaceX={{ base: 2, md: 4 }}
        wrap="wrap"
        justify={{ base: "center", md: "flex-start" }}
        mb={{ base: 4, md: 0 }}
      >
        <CopyrightText />
        <Separator />
        <PolicyLinks />
      </HStack>
      <DesignedByText />
    </Box>
  );
};

const CopyrightText = () => (
  <Text fontSize="sm" color="gray.600">
    Copyright &copy; 2024 by GERMANCARD Technologies GmbH
  </Text>
);

const Separator = () => (
  <Text fontSize="sm" color="gray.600">
    |
  </Text>
);

const PolicyLinks = () => (
  <>
    <Link
      href="/privacy-policy"
      fontSize="sm"
      color="gray.600"
      _hover={{ textDecoration: "underline" }}
    >
      Privacy Policy
    </Link>
    <Separator />
    <Link
      href="/cookies"
      fontSize="sm"
      color="gray.600"
      _hover={{ textDecoration: "underline" }}
    >
      Cookies
    </Link>
  </>
);

const DesignedByText = () => (
  <Text fontSize="sm" color="gray.600">
    Designed by{" "}
    <Link
      href="https://startify.io"
      fontWeight="bold"
      _hover={{ textDecoration: "underline" }}
    >
      <HStack as="span" spaceX={1} display="inline-flex" alignItems="center">
        <Text>Startify</Text>
        <Text as="span" color="blue.500" fontWeight="extrabold">
          ◆
        </Text>{" "}
        <Text>Mateusz Madura</Text>
      </HStack>
    </Link>
  </Text>
);

export default CopyrightBar;
