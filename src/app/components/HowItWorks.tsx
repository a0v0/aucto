"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcCurrencyExchange,
  FcDonate,
  FcFeedIn,
  FcFeedback,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"lg"}>
            {description}
          </Text>
        </Box>
        =
      </Stack>
    </Box>
  );
};

export default function HowItWorks() {
  return (
    <Box id="how_it_works" p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          How It Works
        </Heading>
      </Stack>

      <Container maxW={"100%"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Register for free"}
            icon={<Icon as={FcFeedback} w={10} h={10} />}
            description={
              "Begin your journey by signing up for our platform at no cost."
            }
            href={"#"}
          />
          <Card
            heading={"Buy or Bid"}
            icon={<Icon as={FcFeedIn} w={10} h={10} />}
            description={
              " Explore our marketplace and either purchase your desired items or participate in exciting bidding opportunities."
            }
            href={"#"}
          />
          <Card
            heading={"Submit a Bid"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Place your bid on the items you desire, and let the excitement of the auction begin!"
            }
            href={"#"}
          />
          <Card
            heading={"Win"}
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            description={
              " If your bid is successful, you'll emerge victorious and take home the item you coveted!"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
