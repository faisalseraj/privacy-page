import {
  CadPressoIcon,
  DascomIcon,
  EvolisIcon,
  MaticaIcon,
  ZebraIcon
} from "@/app/_icons";
import { Flex, Text } from "@chakra-ui/react";

export const Companies = () => (
  <Flex
    mx={16}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    borderTop="1px solid #DADFE7"
  >
    <Text my={4} fontSize={12} fontWeight="bold">
      We are official partners for
    </Text>
    <Flex width="80%" justifyContent="space-evenly">
      {[CadPressoIcon, DascomIcon, MaticaIcon, EvolisIcon, ZebraIcon].map(
        (IconComponent, index) => (
          <IconComponent key={index} />
        )
      )}
    </Flex>
  </Flex>
);
