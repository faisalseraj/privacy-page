import { Badge, Box, Heading, Link, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";

const SubParagraphs = ({
  paraTitle,
  paraText,
}: {
  paraTitle?: string;
  paraText: string;
}) => (
  <Fragment>
    {paraTitle && (
      <Box mb={4} as="dt" fontWeight="400" fontSize={24}>
        {paraTitle}
      </Box>
    )}
    <Box mb={4} fontWeight="500" fontSize={16}>
      {paraText}{" "}
    </Box>
  </Fragment>
);
const textDetails = [
  {
    paraTitle: "Who is responsible for the data collection on this website?",
    paraText:
      'The data processing on this website is carried out by the website operator. His contact details can be found in the section "Note on the responsible body" in this privacy policy.',
  },
  {
    paraTitle: "How do we gather your data?",
    paraText:
      "On the one hand, your data is collected by the fact that you provide it to us. Here it can be e.g. B. data that you enter in a contact form. Other data is collected automatically or after your consent when you visit the website by our IT systems. These are mainly technical data (e.g. B. Internet browser, operating system or time of page view). This data is collected automatically as soon as you enter this website.",
  },
  {
    paraTitle: "For what purposes do we use your data?",
    paraText:
      "Part of the data is collected to ensure an error-free provision of the website. Other data can be used to analyze your user behavior.",
  },
  {
    paraTitle: "What rights do you have with regard to your data?",
    paraText:
      "You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. In addition, you have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have a right of appeal to the competent supervisory authority.",
  },
  {
    paraText:
      "For this and for further questions about data protection, you can contact us at any time.",
  },
];

export default function DataProtectionOverview() {
  const style = {
    fontWeight: 400,
    color: "#343434 !important",
  };

  return (
    <Box maxW="1072px" mx="auto">
      <Text fontSize={44} mb={4} {...style}>
        1. Data protection at a glance
      </Text>
      <Box ml="48px">
        <Text fontSize={"32px"} {...style}>
          General information
        </Text>
        <Text mt={2} fontSize={16} fontWeight={500}>
          The following notes provide a simple overview of what happens to your
          personal data when you visit this website. Personal data is all data
          with which you can be personally identified. Detailed information on
          the subject of data protection can be found in our privacy policy
          listed under this text.
        </Text>
        <Box as="dl" spaceX={4}>
          <Text my={4} fontSize={"32px"} {...style}>
            Data collection on this website
          </Text>
          {textDetails?.map((item) => (
            <SubParagraphs {...item} />
          ))}
          <Box as="dd" mt={2}></Box>
        </Box>
      </Box>
      <Box mt={4}>
        <Text fontSize={44} mb={4} {...style}>
          2. Hosting
        </Text>
        <Text mt={2} ml={2} fontSize={16} fontWeight={500}>
          We host the contents of our website with the following provider:
        </Text>
        <Box ml="48px" mt={2}>
          <Text fontSize={"32px"} {...style}>
            External hosting
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            This website is hosted externally. The personal data collected on
            this website is stored on the servers of the hoster / hoster. These
            can include IP addresses, contact requests, meta and communication
            data, contract data, contact data, names, website access and other
            data generated via a website.
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            The external hosting is carried out for the purpose of fulfilling
            the contract with our potential and existing customers (Art. 6 para.
            1 lit. b GDPR) and in the interest of a secure, fast and efficient
            provision of our online offer by a professional provider (Art. 6
            para. 1 lit. f DSGVO). If a corresponding consent has been
            requested, the processing is carried out exclusively on the basis of
            Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the
            consent requires the storage of cookies or access to information in
            the user's terminal device (e.g. B. Device fingerprinting) within
            the meaning of the TTDSG. The consent can be revoked at any time.
          </Text>
          <Text fontSize={16} fontWeight={500}>
            Our hoster will or will only process your data to the extent
            necessary to fulfill its performance obligations and follow our
            instructions regarding this data.
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            We use the following hoster(s): Vultr Frankfurt
            <br /> 319 Clematis Street - Suite 900
            <br /> West Palm Beach, FL 33401{" "}
          </Text>
        </Box>
      </Box>
      <Box mt={8}>
        <Text fontSize={44} mb={4} {...style}>
          3. General information and mandatory information
        </Text>
        <Text mt={4} ml={2} fontSize={16} fontWeight={500}>
          We host the contents of our website with the following provider:
        </Text>
        <Box ml="48px" mt={4}>
          <Text fontSize={"32px"} {...style}>
            Data privacy
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            The operators of these pages take the protection of your personal
            data very seriously. We treat your personal data confidentially and
            in accordance with the statutory data protection regulations and
            this data protection declaration.
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            When you use this website, various personal data are collected.
            Personal data is data with which you can be personally identified.
            This privacy policy explains what data we collect and what we use it
            for. She also explains how and for what purpose this is done.
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            We would like to point out that the data transmission on the
            Internet (e.g. B. when communicating by e-mail) may have security
            gaps. A complete protection of the data against access by third
            parties is not possible.
          </Text>{" "}
          <Text mt={6} fontSize={"32px"} {...style}>
            Note on the responsible authority
          </Text>
          <Text mt={2} fontSize={16} fontWeight={500}>
            The authority responsible for data processing on this website is:
            GERMANCARD Technologies GmbH
          </Text>
          <Text fontSize={16} fontWeight={500}>
            this represented d. d. <b>Managing Director Mesut Yilmaz </b> <br />
            Ottostr. 5<br />
            50170 Kerpen
            <br />
            GERMANY Phone: 02273601490
            <br />
            E-Mail: office@germancard.de
          </Text>
          <Text mt={4} fontSize={16} fontWeight={500}>
            The responsible body is the natural or legal person who alone or
            jointly with others is responsible for the purposes and means of
            processing personal data (e.g. B. Names, e-mail addresses o. Ä.)
            decides.
          </Text>{" "}
        </Box>
      </Box>
    </Box>
  );
}

