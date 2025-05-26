import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ClimatePartnerIcon,
  DSSVIcon,
  GantnerIcon,
  ISOIcon,
  InboxIcon,
  InboxWhiteIcon,
  Logo1,
  MadeInGermanyIcon,
  PlantedIcon,
  TUVIcon,
} from "@/app/_icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXing,
} from "react-icons/fa";

import { CallToAction } from "./Header1";

const Footer = () => {
  const socialMediaLinks = [
    {
      href: "https://www.linkedin.com",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com",
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com",
      icon: FaTiktok,
      label: "TikTok",
    },
    {
      href: "https://www.xing.com",
      icon: FaXing,
      label: "Xing",
    },
  ];

  const certificates = [
    <MadeInGermanyIcon />,
    <PlantedIcon />,
    <ClimatePartnerIcon />,
    <ISOIcon />,
    <DSSVIcon />,
    <TUVIcon />,
    <GantnerIcon />,
  ];

  const aboutUsSection = (
    <Box flexBasis={{ base: "100%", md: "30%" }} mb={{ base: 8, md: 0 }}>
      <Text fontWeight="700" fontSize={12} mb={2}>
        ABOUT US
      </Text>
      <Text color="#6D727B" fontWeight="500" fontSize={16}>
        We,{" "}
        <Text as="span" fontWeight="700" fontSize={16}>
          GERMANCARD Technologies GmbH
        </Text>
        , are a special printing company based in Kerpen near Cologne and have
        specialized in the production of plastic cards, RFID cards and customer
        cards in the form of a check card up to special formats.
      </Text>
    </Box>
  );

  const productsAndServices = (
    <VStack
      align="flex-start"
      flexBasis={{ base: "100%", md: "20%" }}
      mb={{ base: 8, md: 0 }}
    >
      <Text fontWeight="700" fontSize={12} mb={2}>
        PRODUCTS & SERVICES
      </Text>
      {[
        "Plastic cards",
        "Organic cards",
        "RFID/Chip cards",
        "Special formats",
      ].map((service) => (
        <Link
          href="#"
          fontSize={"16px"}
          color="#343434"
          fontWeight={500}
          key={service}
        >
          {service}
        </Link>
      ))}
    </VStack>
  );

  const personalizationSection = (
    <VStack
      align="flex-start"
      flexBasis={{ base: "100%", md: "20%" }}
      mb={{ base: 8, md: 0 }}
    >
      <Text fontWeight="bold" mb={2} visibility="hidden">
        _
      </Text>
      {["Personalization", "Printer & Accessories", "Services"].map((item) => (
        <Link
          href="#"
          fontSize={"16px"}
          color="#343434"
          fontWeight={500}
          key={item}
        >
          {item}
        </Link>
      ))}
    </VStack>
  );

  const companySection = (
    <VStack align="flex-start" flexBasis={{ base: "100%", md: "15%" }}>
      <Text fontWeight="700" fontSize={12} mb={2}>
        COMPANY
      </Text>
      {["About us", "Jobs & Career", "Downloads"].map((item) => (
        <Link
          href="#"
          fontSize={"16px"}
          color="#343434"
          fontWeight={500}
          key={item}
        >
          {item}
        </Link>
      ))}
    </VStack>
  );

  const contactButtons = (
    <Link href="/contact" style={{ textDecoration: "none" }}>
      <Flex bg="black" borderRadius={"4px"} p={2} alignItems="center" gap={2}>
        <InboxWhiteIcon />
        <Text fontSize={"14px"} color={"white"}>
          Contact Us
        </Text>
      </Flex>

      <CallToAction />
    </Link>
  );

  return (
    <Box
      mt={4}
      bg="gray.100"
      py={10}
      px={{ base: 4, md: 8, lg: 16 }}
      mx={"96px"}
    >
      {/* Top Section: Social Media Icons */}
      <Flex justify="space-between" mb={8}>
        <Logo1 />
        <HStack spaceX={4}>
          {socialMediaLinks.map((social) => (
            <Link href={social.href} key={social.label}>
              <IconButton bg="white" borderRadius={"100%"}>
                <social.icon />
              </IconButton>
              <Text fontSize="sm">{social.label}</Text>
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Main Content Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        mb={10}
      >
        {aboutUsSection}
        {productsAndServices}
        {personalizationSection}
        {companySection}
      </Flex>

      {/* Certificates and Contact Buttons */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-end"
        mt={8}
      >
        <Box mb={{ base: 8, md: 0 }}>
          <Text fontWeight="700" fontSize={12} mb={4}>
            OUR CERTIFICATES
          </Text>
          <HStack justifyContent={"flex-start"} gap={16}>
            {certificates}
          </HStack>
        </Box>
        <Spacer display={{ base: "none", md: "block" }} />
        {contactButtons}
      </Flex>
    </Box>
  );
};

export default Footer;
