import { Box, Flex } from "@chakra-ui/react";
import { BreadcrumbIcon, Logo1, PhoneIcon } from "@/app/_icons";

import { Dropdown } from "./Dropdown";

export interface Service {
  title: string;
  items: {
    text: string;
    link: string;
  }[];
}

const services: Service[] = [
  {
    title: "Plastic cards",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "Organic cards",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "RFID/Chip cards",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "Special formats",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "Personalization",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "Printer & Accessories",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
  {
    title: "Service",
    items: [
      { text: "Service 1", link: "#" },
      { text: "Service 2", link: "#" },
      { text: "Service 3", link: "#" },
    ],
  },
];

export const Services = () => {
  return (
    <Box px="240px" mt={10}>
      <Flex justifyContent="space-between">
        <Flex gap={4} alignItems="center">
          {services.slice(0, 3).map((service) => (
            <Dropdown key={service.title} {...service} textStyle="bold" />
          ))}
        </Flex>
        <Flex gap={4} alignItems="center">
          {services.slice(3).map((service) => (
            <Dropdown key={service.title} {...service} textStyle="semi-bold" />
          ))}
          <Box className="left-border">
            <BreadcrumbIcon />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

