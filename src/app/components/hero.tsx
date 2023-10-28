"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              #1 Online
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Auction Platform
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Welcome to the Ultimate Auction Experience! Discover Rare Treasures,
            Bid on Exclusive Items, and Unleash Your Inner Collector. Start
            Bidding Now!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link style={{ textDecoration: "none" }} href="#all_products">
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Start Bidding
              </Button>
            </Link>
            <Link href="#how_it_works">
              <Button rounded={"full"}>How It Works</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Hero Image"}
          objectFit={"cover"}
          style={{
            borderRadius: "20px",
          }}
          //   width={"50%"}
          src={"/hero.webp"}
        />
      </Flex>
    </Stack>
  );
}
